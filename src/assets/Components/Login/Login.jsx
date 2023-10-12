import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom';
import LoginForm from './LoginForm';
import LoginCreate from './LoginCreate';
import LoginPasswordLost from './LoginPasswordLost';
import LoginPasswordReset from './LoginPasswordReset';
import { UserContext } from '../../../UserStorage';
import styles from '../../Css/Login.module.css';

function Login() {
  const { login } = React.useContext(UserContext);

  if (login == true) return <Navigate to='/conta' />

  return (
    <section className={styles.login}>
      <div className={styles.forms}>
        <Routes>
          <Route path='/' element={<LoginForm />} />
          <Route path='/create' element={<LoginCreate />} />
          <Route path='/passwordLost' element={<LoginPasswordLost />} />
          <Route path='/passwordReset' element={<LoginPasswordReset />} />
        </Routes>
      </div>
    </section>
  )
}

export default Login