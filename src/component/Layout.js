import NavBar from './Navbar';
import Head from 'next/head';
import styles from './Layout.module.scss';

const layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Wayfair Learning Academy</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <NavBar />
      <div className={styles.wrapper}>{children}</div>
    </>
  );
};

export default layout;
