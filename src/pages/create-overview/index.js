import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import styles from './CreateOverview.module.scss';

const CreateOverview = () => {
  const router = useRouter();
  const handleGetStarted = () => {
    router.push({
      pathname: 'create',
    });
  };
  return (
    <div className={styles.wrapper}>
      <h1>Share your expertise!</h1>

      <h3>It's so easy</h3>
      <p>
        We'll walk you through the steps of creating a first-rate lesson in
        no-time. We'll guide you through designing a course and creating lessons
        — and then we'll help you market the result. Best of all, you'll retain
        all the proceeds.
      </p>

      <h3>The rewards of online teaching</h3>
      <p>
        It's fun to share what you know. It's also rewarding to get paid. When
        you participate in Wayfair Learning, you receive all of the proceeds of
        your work.
      </p>

      <h3>Get started</h3>
      <p>Why wait, start a trial now!</p>
      <button className="button" onClick={handleGetStarted} type="button">
        Get Started Creating
      </button>
    </div>
  );
};

export default CreateOverview;
