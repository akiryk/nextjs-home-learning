import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

const Note = () => {
  const router = useRouter();
  const { id } = router.query;
  console.log(router.query);

  return (
    <>
      <h1>Note {id} </h1>
      <Link href="../faqs/[id]" as={`../faqs/${id}`}>
        <a>Go to faq {id}</a>
      </Link>
      <div>
        <Link href="/">Home</Link>
      </div>
    </>
  );
};

export default Note;
