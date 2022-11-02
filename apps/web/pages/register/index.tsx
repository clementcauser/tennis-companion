import { RegisterForm } from '@tennis-companion/features/auth';
import { Card } from '@tennis-companion/uikit';
import AuthLayout from '../../components/layouts/AuthLayout';

const RegisterPage = () => {
  return (
    <AuthLayout>
      <Card title="Créer un compte">
        <p className="text-gray-500 my-4">
          Créez votre compte pour accéder à toutes les fonctionnalités de
          l&apos;application.
        </p>
        <RegisterForm onSubmit={console.log} />
      </Card>
    </AuthLayout>
  );
};

export default RegisterPage;
