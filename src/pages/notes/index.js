import React from 'react';
import Link from 'next/link';

const Page = () => (
  <div>
    Notes Index Path{' '}
    <Link href="notes/[id]" as="notes/3">
      Three
    </Link>
    <div>
      <Link href="/">Home</Link>
    </div>
  </div>
);

export default Page;
