import { yupResolver } from '@hookform/resolvers/yup';
import { Button, TextInput } from '@tennis-companion/uikit';
import { Controller, useForm } from 'react-hook-form';
import { registerFormValidationSchema } from './register-form.validation';

type RegisterFormValues = {
  email: string;
  password: string;
  confirmPassword: string;
};

interface RegisterFormProps {
  onSubmit: (formValues: RegisterFormValues) => void;
}

const RegisterForm = ({ onSubmit }: RegisterFormProps) => {
  const { handleSubmit, control } = useForm<RegisterFormValues>({
    resolver: yupResolver(registerFormValidationSchema),
    defaultValues: { confirmPassword: '', email: '', password: '' },
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <Controller
        name="email"
        control={control}
        render={({
          field: { name, onChange, value },
          fieldState: { error },
        }) => (
          <TextInput
            name={name}
            onChange={onChange}
            value={value}
            label="Adresse email"
            placeholder="adresse@mail.com"
            type="email"
            error={error?.message}
          />
        )}
      />
      <Controller
        name="password"
        control={control}
        render={({
          field: { name, onChange, value },
          fieldState: { error },
        }) => (
          <TextInput
            name={name}
            onChange={onChange}
            value={value}
            label="Mot de passe"
            placeholder="********"
            type="password"
            error={error?.message}
          />
        )}
      />
      <Controller
        name="confirmPassword"
        control={control}
        render={({
          field: { name, onChange, value },
          fieldState: { error },
        }) => (
          <TextInput
            name={name}
            onChange={onChange}
            value={value}
            label="Confirmation du mot de passe"
            placeholder="********"
            type="password"
            error={error?.message}
          />
        )}
      />
      <div className="flex justify-end mt-8">
        <Button type="submit" variant="contained" status="primary" fullWidth>
          S'enregistrer
        </Button>
      </div>
    </form>
  );
};

export default RegisterForm;
