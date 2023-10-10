import React from 'react';
import { Link } from 'react-router-dom';
import Input from './ComponentsForm/Input';
import Button from './ComponentsForm/Button';

function LoginForm() {
  const [username, setUsername] = React.useState();
  const [password, setPassword] = React.useState();

  function handleSubmit(event) {
    event.preventDefault();
    fetch('https://dogsapi.origamid.dev/json/jwt-auth/v1/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: {
        username,
        password,
      }
    })
      .then(response => {
        console.log(response);
        return response.json();
      })
      .then(json => {
        console.log(json)
      })
  }

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <Input label='Username' type="text" name="username" />
        <Input label='Password' type="password" name="password" />

        <Button>Entrar</Button>
      </form>
      <Link to='/login/create'> Cadastrar </Link>
    </section>
  )
}

export default LoginForm