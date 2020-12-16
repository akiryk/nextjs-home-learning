import React from 'react';
import LoadingIndicator from './LoadingIndicator';
import styles from './SavingMessage.module.scss';

const SavingMessage = () => (
  <div className={styles.savingContainer}>
    <p className={styles.savingMessage}>Saving</p>
    <LoadingIndicator />
  </div>
);

export default SavingMessage;
