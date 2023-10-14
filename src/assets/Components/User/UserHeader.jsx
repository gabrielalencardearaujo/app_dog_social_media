import React from 'react';
import UserHeaderNav from './UserHeaderNav';
import styles from '../../Css/UserHeader.module.css';
import { useLocation } from 'react-router-dom';

function UserHeader() {
  const [title, setTitle] = React.useState('');
  const location = useLocation();

  React.useEffect(() => {
    const {pathname} = location;

    switch(pathname) {
      case '/conta/userPost':
        setTitle('Poste seu Dog');
        break;
      case '/conta/userStats':
        setTitle('Estatísticas');
        break;
      default:
        setTitle('Minhas Fotos')
    }
  }, [location])
  return (
    <header className={styles.header}>
      <h1 className='title'>{title}</h1>
      <UserHeaderNav />
    </header>
  )
}

export default UserHeader