import React from 'react';
import { Link } from 'react-router-dom';
import Input from './ComponentsForm/Input';
import Button from './ComponentsForm/Button';
import useForm from '../../Hooks/useForm';

function LoginForm() {
  // const [username, setUsername] = React.useState();
  // const [password, setPassword] = React.useState();

  const username = useForm();
  const password = useForm();

  console.log(username)

  function handleSubmit(event) {
    event.preventDefault();

    if (username.validate() && password.validate()) {
      fetch('https://dogsapi.origamid.dev/json/jwt-auth/v1/token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify()
      })
        .then(response => {
          console.log(response);
          return response.json();
        })
        .then(json => {
          console.log(json)
        })
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