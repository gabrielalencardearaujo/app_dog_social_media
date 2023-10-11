import React from 'react';
import { Link } from 'react-router-dom';
import Input from './ComponentsForm/Input';
import Button from './ComponentsForm/Button';
import useForm from '../../Hooks/useForm';
import { UserContext } from '../../../UserStorage';

function LoginForm() {
  const username = useForm();
  const password = useForm();

  const {userLogin} = React.useContext(UserContext);

  async function handleSubmit(event) {
    event.preventDefault();

    if (username.validate() && password.validate()) {
      userLogin(username.value, password.value)
    }
  }

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <Input label='Username' type="text" name="username" {...username} />
        <Input label='Password' type="password" name="password" {...password} />

        <Button>Entrar</Button>
      </form>
      <Link to='/login/create'> Cadastrar </Link>
    </section>
  )
}

export default LoginForm