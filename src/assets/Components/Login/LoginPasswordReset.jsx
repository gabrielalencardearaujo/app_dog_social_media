import React from 'react';
import Input from './ComponentsForm/Input';
import Button from './ComponentsForm/Button';
import useForm from '../../Hooks/useForm';
import useFetch from '../../Hooks/useFetch';
import { PASSWORD_RESET } from '../../../api';
import Error from '../Errors/Error';
import { useNavigate } from 'react-router-dom';
import Head from '../Errors/Head';

function LoginPasswordReset() {
  const [login, setLogin] = React.useState('');
  const [key, setKey] = React.useState('');
  const password = useForm();
  const {error, loading, request} = useFetch(); 
  const navigate = useNavigate();

  React.useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const key = params.get('key');
    const login = params.get('login');
    if (key) setKey(key);
    if (login) setLogin(key);

    console.log(key);
  }, [])

  async function handleSubmit(event) {
    event.preventDefault();
    if(password.validate()) {
      const {url, options} = PASSWORD_RESET({
        login,
        key,
        password: password.value 
      });
  
      const {response} = await request(url, options);
  
      if(response.ok) navigate('/login');
    }
  }

  return (
    <section className='animeLeft'>
    <Head title='Reset senha' />

    <h1 className='title'>Resete sua senha.</h1>
      <form onSubmit={handleSubmit}>
        <Input label='Nova senha' type='password' name='password' {...password} />

        {(loading) ? (
            <Button disabled>Resetando...</Button>
          ) : (
            <Button>Resetar</Button>
          )
        }

          <Error error={error} />
      </form>
    </section>
  )
}

export default LoginPasswordReset