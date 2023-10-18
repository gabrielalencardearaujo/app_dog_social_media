import React from 'react'
import Input from './ComponentsForm/Input'
import Button from './ComponentsForm/Button'
import useForm from '../../Hooks/useForm';
import { USER_POST } from '../../../api';
import { UserContext } from '../../../UserStorage';
import useFetch from '../../Hooks/useFetch';
import Error from '../Errors/Error';
import Head from '../Errors/Head';

function LoginCreate() {
  const username = useForm();
  const email = useForm('email');
  const password = useForm('password');

  const { userLogin } = React.useContext(UserContext);
  const { loading, error, request } = useFetch()

  async function handleSubmit(event) {
    event.preventDefault();
    const { url, options } = USER_POST({
      username: username.value,
      email: email.value,
      password: password.value,
    })

    const {response}  = await request(url, options)

    if (response.ok)
      userLogin(username.value, password.value)
  }

  return (
    <section className='animeLeft'>
      <Head title='Crie sua Conta' />

      <h1 className='title'>Cadastre-se</h1>
      <form onSubmit={handleSubmit}>
        <Input type='text' label='Username' name='username' {...username} />
        <Input type='text' label='Email' name='email' {...email} />
        <Input type='password' label='Password' name='password' {...password} />
        <Error error={error} />

        {loading ? (
          <Button disabled>Cadastrando...</Button>
        ) : (
          <Button >Cadastre-se</Button>
        )}


      </form>
    </section>
  )
}

export default LoginCreate