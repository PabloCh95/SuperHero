import * as yup from 'yup';

export const loginValidation = yup.object().shape({
  email: yup
    .string()
    .email('Please enter valid email')
    .required('Email is required'),
  password: yup
    .string()
    .min(4, ({min}) => `Passowrd must be at least ${min} characters`)
    .required('Password is required'),
});
