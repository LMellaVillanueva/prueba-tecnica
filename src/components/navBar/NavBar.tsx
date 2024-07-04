'use client'
import Link from "next/link";
import styles from './navBar.module.css';

const NavBar = () => {
  return (
    <>
      <nav className={styles.anim}>
        <ul className={styles.list}>
          <li className={styles.select}><Link href="/">Inicio</Link></li>
          <div className={styles.linea}></div>
          <li className={styles.select}><Link href="/sobreMi">Sobre Mi</Link></li>
          <div className={styles.linea}></div>
          <li className={styles.select}><Link href="/intereses">Intereses</Link></li>
          <div className={styles.linea}></div>
          <li className={styles.select}><Link href="/contacto">Contacto</Link></li>
        </ul>
      </nav>
    </>
  );
};
export default NavBar;
