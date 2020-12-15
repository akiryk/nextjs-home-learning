import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import styles from './Faq.module.scss';

const FAQ = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <h1>FAQ {id} </h1>
      <Link href="/">
        <a className="link">Home</a>
      </Link>
    </>
  );
};

export default FAQ;
