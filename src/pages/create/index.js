import React from 'react';
import Link from 'next/link';
import styles from './Create.module.scss';

const Create = () => {
  return (
    <>
      <h1>Create Page Stub</h1>
      <p className={styles.text}>Some styled text</p>
      <Link href="/">
        <a>Home</a>
      </Link>
    </>
  );
};

export default Create;
