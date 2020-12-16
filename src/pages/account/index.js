import React from 'react';
import { allData } from '../../component/data/data';
import Link from 'next/link';
import styles from './Account.module.scss';

const Account = () => {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Your Purchased Courses</h2>
      <ul className={styles.list}>
        <li className={styles.listItem}>
          <Link href="details/6">
            <a className={styles.linkImage}>
              <img
                src={allData.cooking[5].image}
                width="200"
                height="125"
                className={styles.image}
              />
            </a>
          </Link>

          <div className={styles.textBlock}>
            <p className={styles.text}>
              <Link href="details/6">
                <a className={styles.linkText}>{allData.cooking[5].title}</a>
              </Link>
            </p>
            <p className={styles.text}>
              In this inviting 25-minute class, beloved chef and recipe
              developer Julia Turshen shares how to make a no-fail yeast dough
              every time — a perfect base for sweet rolls, savory twisted
              breads, iced buns, and more. You'll learn:
            </p>
          </div>
        </li>

        <li className={styles.listItem}>
          <Link href="details/6">
            <a className={styles.linkImage}>
              <img
                src={allData.fitness[2].image}
                width="200"
                height="125"
                className={styles.image}
              />
            </a>
          </Link>

          <div className={styles.textBlock}>
            <p className={styles.text}>
              <Link href="details/6">
                <a className={styles.linkText}>{allData.fitness[2].title}</a>
              </Link>
            </p>
            <p className={styles.text}>
              Looking for a way to strengthen your abdominal muscles? Crunches
              are exercises you need to do if you want great abs and core. It
              works the rectums abdominal muscle. This exercise can also improve
              your muscle strength and flexibility. Try it out!
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Account;
