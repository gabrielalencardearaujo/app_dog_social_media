import React from 'react'
import styles from '../Css/Header.module.css';
import { Link } from 'react-router-dom';
import {ReactComponent as Dogs} from '../img/dogs.svg';

function Header() {
  return (
    <header className={styles.header}>
      <nav className={`container ${styles.nav}`}>
        <Link to='/'>
          <Dogs className={styles.logo} aria-label='Dog - Home'/>
        </Link>
        <Link className={styles.login} to='login'>Login</Link>
      </nav>

    </header>
  )
}

export default Header