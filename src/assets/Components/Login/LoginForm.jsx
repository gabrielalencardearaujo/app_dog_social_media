import React from 'react';
import { Link } from 'react-router-dom';
import Input from './ComponentsForm/Input';
import Button from './ComponentsForm/Button';
import useForm from '../../Hooks/useForm';
import { UserContext } from '../../../UserStorage';
import Error from '../Errors/Error';
import styles from '../../Css/LoginForm.module.css';
import stylesBtn from '../Login/ComponentsForm/Button.module.css';
import Head from '../Errors/Head';

function LoginForm() {
  const username = useForm();
  const password = useForm();

  const { userLogin, error, loading } = React.useContext(UserContext);

  async function handleSubmit(event) {
    event.preventDefault();

    if (username.validate() && password.validate()) {
      userLogin(username.value, password.value)
    }
  }

  return (
    <section className='animeLeft'>
      <Head title='Login' />

      <h1 className='title'>Login</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <Input label='Username' type="text" name="username" {...username} />
        <Input label='Password' type="password" name="password" {...password} />

        {loading ? (
          <Button disabled>Carregando</Button>
        ) : (
          <Button>Entrar</Button>
        )}

        <Error error={error} />
      </form>

      <Link className={styles.resetPassword} to='/login/resetPassword'>Esqueceu senha?</Link>

      <div className={styles.cadastro}>
        <h2 className={styles.subtitle}>Casdastre-se</h2>
        <p>Faça seu cadastro, é simples e rápido.</p>

        <Link className={stylesBtn.button} to='/login/create'>
          Cadastrar
        </Link>
      </div>
    </section>
  )
}

export default LoginForm;