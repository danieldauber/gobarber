import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import logo from '~/assets/logo.svg';

import { signUpRequest } from '~/store/modules/auth/actions';

const schema = Yup.object().shape({
  name: Yup.string().required('O nome é obrigatório'),
  email: Yup.string()
    .email('Insira um email válido')
    .required('E-mail é obrigatório'),
  password: Yup.string()
    .min(6, 'A senha deve ter pelo menos 6 caracteres')
    .required('a senha é obrigatória'),
});

export default function SignUp() {
  const dispatch = useDispatch();

  function handleOnSubmit({ name, email, password }) {
    dispatch(signUpRequest(name, email, password));
  }

  return (
    <>
      <img src={logo} alt="GoBarber" />
      <Form schema={schema} onSubmit={handleOnSubmit}>
        <Input name="name" placeholder="Digite seu Nome" />
        <Input name="email" type="email" placeholder="Digite seu email" />
        <Input
          name="password"
          type="password"
          placeholder="Digite a sua senha"
        />
        <button type="submit">Criar conta</button>
        <Link to="/">Já tenho uma conta.</Link>
      </Form>
    </>
  );
}
