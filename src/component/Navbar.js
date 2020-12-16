import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Navbar.module.scss';

const NavBar = () => {
  return (
    <nav className={styles.siteHeader}>
      <div className={styles.innerWrapper}>
        <Link href="/">
          <h1 className={styles.brandTitle}>
            <a className={styles.brandLink}>Home Learning</a>
          </h1>
        </Link>
        <ul id="nav-mobile" className={styles.nav}>
          <li className={styles.navItem}>
            <Link href="/">
              <a>Learn</a>
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/create-overview">
              <a>Create</a>
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/">
              <a>My Account</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
