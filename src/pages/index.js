import React from 'react';
import Link from 'next/link';

const Home = () => (
  <div>
    Home Page Stub
    <ul>
      <li>
        <Link href="create">
          <a>Create</a>
        </Link>
      </li>
      <li>
        <Link href="details/1">
          <a>Details 1</a>
        </Link>
      </li>
      <li>
        <Link href="details/2">
          <a>Details 2</a>
        </Link>
      </li>
      <li>
        <a href={process.env.HOME_URL}>Wayfair</a>
      </li>
    </ul>
  </div>
);

export default Home;
