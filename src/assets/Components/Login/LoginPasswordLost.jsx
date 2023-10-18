import React from 'react';
import Input from './ComponentsForm/Input';
import Button from './ComponentsForm/Button';
import useForm from '../../Hooks/useForm';
import useFetch from '../../Hooks/useFetch';
import { PASSWORD_LOST } from '../../../api';
import Error from '../Errors/Error';
import Head from '../Errors/Head';


function LoginPasswordLost() {
  const login = useForm();
  const { data, loading, error, request } = useFetch();

  async function handleSubmit(event) {
    event.preventDefault();

    if (login.validate()) {
      const { url, options } = PASSWORD_LOST({
        login: login.value,
        url: window.location.href,
      });
      const { json } = await request(url, options)
    }
  }

  return (
    <section className='animeLeft'>
      <Head title='Esqueceu a senha?' />

      <h1 className='title'>Perdeu a senha?</h1>

      {data ? (
        <p style={{ color: '#4c1' }}>{data}</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <Input label="Email / Usuário" type='text' name='email' {...login} />
          
          {(loading) ? (
            <Button disabled>Enviando...</Button>
          ) : (
            <Button>Enviar Email</Button>
          )}

          <Error error={error} />
        </form>
      )}
    </section>
  )
}

export default LoginPasswordLost