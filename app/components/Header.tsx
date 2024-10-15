

import Link from 'next/link';
import styles from '../styles/Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <h1>My Next.js website</h1>
      <nav>
        <ul className={styles.nav}>
          <li className={styles.navItem}>
            <Link href="/" className={styles.navLink}>Home</Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/about" className={styles.navLink}>About</Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/contact" className={styles.navLink}>Contact</Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/services" className={styles.navLink}>Services</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;





