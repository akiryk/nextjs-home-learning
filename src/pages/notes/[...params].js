import React from 'react';
import { useRouter } from 'next/router';

const Params = () => {
  const router = useRouter();
  const { params } = router.query;
  console.log(params);

  return <h1>Params </h1>;
};

export default Params;
