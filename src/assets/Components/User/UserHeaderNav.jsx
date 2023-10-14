import React from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { UserContext } from '../../../UserStorage';
import { ReactComponent as MinhasFotosSVG } from '../../img/feed.svg';
import { ReactComponent as EstatisticasSVG } from '../../img/estatisticas.svg';
import { ReactComponent as AdicionarSVG } from '../../img/adicionar.svg';
import { ReactComponent as SairSVG } from '../../img/sair.svg';
import styles from '../../Css/UserHeaderNav.module.css';
import useMedia from '../../Hooks/useMedia';

function UserHeaderNav() {
  const mobile = useMedia('(max-width: 40rem)');
  const { userLogout } = React.useContext(UserContext);
  const [menuMobile, setMenuMobile] = React.useState(false);
  const navigate = useNavigate();
  const {pathname} = useLocation();

  React.useEffect(() => {
    setMenuMobile(false);
  }, [pathname])

  function handleLogout() {
    userLogout();
    navigate('/login')
  }

  return (
    <>
      {mobile && (
        <button
          aria-label='Menu Mobile'
          onClick={() => setMenuMobile(!menuMobile)}
          className={`
          ${styles.menuMobile} 
          ${menuMobile && styles.menuMobileActive}
        `}>
        </button>
      )}

      <nav className={`
        ${mobile ? styles.navMobile : styles.nav} 
        ${menuMobile && styles.navMobileActive}`
      }>
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

        <button onClick={handleLogout}>
          <SairSVG />
          {mobile && 'Sair'}
        </button>
      </nav>
    </>
  )
}

export default UserHeaderNav