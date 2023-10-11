import React from 'react'
import styles from '../Css/Header.module.css';
import { Link } from 'react-router-dom';
import { ReactComponent as Dogs } from '../img/dogs.svg';
import { UserContext } from '../../UserStorage';

function Header() {
  const { data } = React.useContext(UserContext);
  console.log(data)
  return (
    <header className={styles.header}>
      <nav className={`container ${styles.nav}`}>
        <Link to='/'>
          <Dogs className={styles.logo} aria-label='Dog - Home' />
        </Link>

        {data ? (
          <Link className={styles.login} to='/conta'>
            {data?.username || 'Login'}
          </Link>) : (
          <Link className={styles.login} to='/login'>
            Login
          </Link>)
        }

      </nav>

    </header>
  )
}

export default Header