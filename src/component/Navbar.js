import Link from 'next/link';
import Image from 'next/image'
import React from 'react';

const NavBar = () => {
  return (
    <nav>
      <div className="nav-wrapper #1565c0 purple darken-3">
        <Link href="/"><a className="brand-logo left">
          <Image
            src="/logo.png"
            alt="logo"
            width={100}
            height={50}
          />
          Home Learning</a>
        </Link>
        <ul id="nav-mobile" className="right">
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
    </nav>
  );
};


export default NavBar;