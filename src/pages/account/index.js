import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import styles from './Account.module.scss';

const Account = () => {
  return (
    <>
      <h1>Account</h1>

      <h3>Your Learning Path</h3>
      <ul>
        <li>
          <img src="" width="200" height="125" />
          <p>
            <Link href="details/1">
              <a>The Chef's Kitchen</a>
            </Link>
          </p>
          <p>Details about this course...</p>
        </li>

        <li>
          <img src="" width="200" height="125" />
          <p>
            <Link href="details/2">
              <a>How to Bake</a>
            </Link>
          </p>
          <p>Details about this course...</p>
        </li>
      </ul>
    </>
  );
};

export default Account;
