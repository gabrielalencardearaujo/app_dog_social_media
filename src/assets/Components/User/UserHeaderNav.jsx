import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { UserContext } from '../../../UserStorage';
import { ReactComponent as MinhasFotosSVG } from '../../img/feed.svg';
import { ReactComponent as EstatisticasSVG } from '../../img/estatisticas.svg';
import { ReactComponent as AdicionarSVG } from '../../img/adicionar.svg';
import { ReactComponent as SairSVG } from '../../img/sair.svg';
import styles from '../../Css/UserHeaderNav.module.css';

function UserHeaderNav() {
  const [mobile, setMobile] = React.useState(null)
  const { userLogout } = React.useContext(UserContext);
  const navigate = useNavigate();

  function handleLogout() {
    userLogout();
    navigate('/login')
  }

  return (
    <nav className={styles.nav}>
      <NavLink to='/conta' end>
        <MinhasFotosSVG />
        {mobile && 'Minhas Fotos'}
      </NavLink>

      <NavLink to='/conta/userStats'>
        <EstatisticasSVG />
        {mobile && 'Estatísticas'}
      </NavLink>
      
      <NavLink to='/conta/userPost'>
        <AdicionarSVG />
        {mobile && 'Postar'}
      </NavLink>

      <button onClick={userLogout}>
        <SairSVG />
        {mobile && 'Sair'}
      </button>
    </nav>
  )
}

export default UserHeaderNav