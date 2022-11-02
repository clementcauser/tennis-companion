import * as Yup from 'yup';
import { passwordRegex } from '../constants';

const required = 'Ce champ est obligatoire';
const password =
  'Doit contenir au moins 6 caractères, 1 majuscule, 1 minuscule et 1 chiffre';
const email = 'Doit être une adresse email valide';

export const registerFormValidationSchema = Yup.object().shape({
  email: Yup.string().email(email).required(required),
  password: Yup.string().matches(passwordRegex, password).required(required),
  confirmPassword: Yup.string()
    .matches(passwordRegex, password)
    .oneOf(
      [Yup.ref('password')],
      'Les deux mots de passe doivent être identiques'
    )
    .required(required),
});
