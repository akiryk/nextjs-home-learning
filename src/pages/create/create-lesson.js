import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import styles from './Create.module.scss';

const CreateLesson = () => {
  const router = useRouter();
  const [courseTitle, setCourseTitle] = useState('');
  const [lesson, setLesson] = useState('');

  useEffect(() => {
    const formData = JSON.parse(localStorage.getItem('courseData'));
    setCourseTitle(formData?.title || 'unnamed course');
  }, []);

  useEffect(() => {
    setLesson(router.query?.lesson);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const nextLesson = 1 + parseInt(lesson, 10);
    router.push({
      pathname: './create-lesson',
      query: { nextLesson },
    });
  };

  return (
    <>
      <h1 className={styles.lessonTitle}>
        {courseTitle && <span>{courseTitle} </span>}
        <span className={styles.subtitle}>Create Lesson {lesson}</span>
      </h1>
      <div className={styles.formWrapper}>
        <form onSubmit={handleSubmit}>
          <div className={styles.inputWrapper}>
            <label className={styles.label} htmlFor="a">
              Name your lesson
            </label>
            <input type="text" className={styles.input} id="a" />
          </div>

          <div className={styles.imageDrop}>
            <p className={styles.uploadText}>
              Drop video here or click to choose files
            </p>
            <button type="button" className={styles.button}>
              Upload Video
            </button>
          </div>

          <button className={styles.button} type="button" onClick={() => {}}>
            Save Lesson
          </button>
          <button className={styles.button}>Add Another Lesson</button>
        </form>
      </div>
    </>
  );
};

export default CreateLesson;
