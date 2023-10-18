import React from 'react'
import styles from '../Css/Footer.module.css';
import { Link } from 'react-router-dom';
import { ReactComponent as Dogs} from '../img/dogs-footer.svg';

function Footer() {
  return (
    <div className={styles.footer}>
      <Dogs />
      <p>Alguns direitos reservados. Site desenvolvido no curso de React do <Link to='https://www.origamid.com/'>Origamid.com</Link>
      </p>
    </div>
  )
}

export default Footer