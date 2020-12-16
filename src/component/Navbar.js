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
            <a className={styles.brandLink}>WayLearn</a>
          </h1>
        </Link>

        <ul id="nav-mobile" className={styles.nav}>
          <li className={styles.navItem}>
            <Link href="/">
              <a className={styles.menuItem}>Learn</a>
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/create-overview">
              <a className={styles.menuItem}>Create</a>
            </Link>
          </li>
        </ul>

        <ul id="nav-mobile" className={styles.navAccount}>
          <li className={styles.navItem}>
            <Link href="/account">
              <a className={styles.menuItem}>My Account</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
