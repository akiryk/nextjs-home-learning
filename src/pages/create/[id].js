import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import SavingMessage from '../../component/SavingMessage';
import styles from './Create.module.scss';

const SAVING = 'SAVING';
const DEFAULT = 'DEFAULT';

const CreateLesson = () => {
  const router = useRouter();
  const [status, setStatus] = useState(DEFAULT);
  const [courseTitle, setCourseTitle] = useState('');
  const [lessonName, setLessonName] = useState('');
  const { id } = router.query;

  useEffect(() => {
    const formData = JSON.parse(localStorage.getItem('courseData'));
    setCourseTitle(formData?.title || 'unnamed course');
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus(SAVING);
    localStorage.setItem('lessons', JSON.stringify(lessonsState));
    const nextLesson = 1 + parseInt(id, 10);
    // mock saving to a backend...
    setTimeout(() => {
      setStatus(DEFAULT);
      router.push({
        pathname: `./${nextLesson}`,
      });
    }, 800);
  };

  const handleChange = (e) => {
    setLessonName(e.currentTarget.value);
  };

  return (
    <>
      <h1 className={styles.lessonTitle}>
        {courseTitle && <span>{courseTitle} </span>}
        <span className={styles.subtitle}>Create Lesson {id}</span>
      </h1>
      <div className={styles.formWrapper}>
        <form
          onSubmit={handleSubmit}
          className={status === SAVING ? styles.formMuted : styles.form}
        >
          <div className={styles.inputWrapper}>
            <label className={styles.label} htmlFor="a">
              Name your lesson
            </label>
            <input
              type="text"
              className={styles.input}
              id="a"
              onChange={handleChange}
            />
          </div>

          <div className={styles.imageDrop}>
            <p className={styles.uploadText}>
              Drop video here or click to choose files
            </p>
            <button type="button" className={styles.button}>
              Upload Video
            </button>
          </div>

          <button className={styles.button}>Add Another Lesson</button>
        </form>
        {status === SAVING && <SavingMessage />}
      </div>
    </>
  );
};

export default CreateLesson;
