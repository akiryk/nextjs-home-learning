import React from 'react';
import Link from 'next/link';
import styles from './Create.module.scss';

const Create = () => {
  return (
    <>
      <h1 className={styles.title}>Create Page Stub</h1>
      <div className={styles.formWrapper}>
        <form
          onSubmit={() => {
            console.log('submit!');
          }}
        >
          <div className={styles.inputWrapper}>
            <label className={styles.label} htmlFor="a">
              Course Title
            </label>
            <input type="text" className={styles.input} id="a" />
          </div>

          <div className={styles.inputWrapper}>
            <label className={styles.label} htmlFor="b">
              Course Description
            </label>
            <textarea className={styles.textarea} id="b" rows="6" />
          </div>

          <div className={styles.inputWrapper}>
            <label className={styles.label} htmlFor="c">
              Price
            </label>
            <input type="text" className={styles.input} id="c" />
          </div>

          <div className={styles.imageDrop}>
            <p className={styles.uploadText}>
              Drop video here or click to choose files
            </p>
            <button className={styles.uploadButton}>Upload Video</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Create;
