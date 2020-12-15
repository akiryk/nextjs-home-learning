import React from 'react';
import Link from 'next/link';

const Page = () => (
  <div>
    Index Page{' '}
    <Link href="notes/[id]" as="notes/1">
      Twelve
    </Link>
  </div>
);

export default Page;
