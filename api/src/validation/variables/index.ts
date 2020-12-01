import * as yup from 'yup';

export const string = yup.string().typeError('O campo informado deve ser uma string').required('Campo obrigatório');

export const optionalString = yup.string().notRequired();

export const number = yup.number().typeError('O campo informado deve ser um número').required('Campo obrigatório');

export const optionalNumber = yup.number().notRequired();

export const email = yup
  .string()
  .trim()
  .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2-4}$/i, 'O e-mail informado é inválido');

export const boolean = yup.boolean().required('O campo é obrigatório');

export const password = yup
  .string()
  .trim()
  .min(8, 'A senha deve ter no mínimo 08 caracteres')
  .required('A senha é obrigatória');

export const repeatPassword = yup
  .string()
  .oneOf([yup.ref('password')], 'As senhas devem ser idênticas')
  .required('A confirmação da senha é obrigatória.');

export const token = yup.string().required('O token é obrigatório');

export const phone = yup
  .string()
  .matches(/\((\d){2}\) ((\d){4}|(\d){5})-(\d){4}/, 'O telefone informado está no fomato inválido')
  .required('O telefone é obrigatório');
