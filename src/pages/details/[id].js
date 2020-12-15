import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import styles from './Detail.module.scss';

const Detail = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <h1>Updated Detail Page</h1>
      <h3>{id}</h3>
      <Link href="/">
        <a className={styles.link}>Home</a>
      </Link>
    </>
  );
};

export default Detail;
