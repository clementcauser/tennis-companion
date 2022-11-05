import { RegisterForm } from '@tennis-companion/features/auth';
import { Card } from '@tennis-companion/uikit';
import { useRouter } from 'next/router';
import { ComponentProps } from 'react';
import AuthLayout from '../../components/layouts/AuthLayout';
import { Routes } from '../../constants/routes.enum';
import { useAppDispatch } from '../../hooks/redux';
import { registerUserWithEmailAndPasswordThunk } from '../../store/slices/authSlice';

const RegisterPage = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const handleSubmit: ComponentProps<typeof RegisterForm>['onSubmit'] = async ({
    email,
    password,
  }) => {
    await dispatch(
      registerUserWithEmailAndPasswordThunk({
        email,
        password,
        onSuccess: () => router.push(Routes.LOGIN),
      })
    );
  };

  return (
    <AuthLayout>
      <Card title="Créer un compte">
        <p className="text-gray-500 my-4">
          Créez votre compte pour accéder à toutes les fonctionnalités de
          l&apos;application.
        </p>
        <RegisterForm onSubmit={handleSubmit} />
      </Card>
    </AuthLayout>
  );
};

export default RegisterPage;
