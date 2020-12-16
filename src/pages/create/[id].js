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
  const [lessonDescription, setLessonDescription] = useState('');
  const { id } = router.query;

  useEffect(() => {
    const formData = JSON.parse(localStorage.getItem('courseData'));
    setCourseTitle(formData?.title || 'unnamed course');
  }, []);

  const saveLesson = () => {
    setStatus(SAVING);
    const lessons = JSON.parse(localStorage.getItem('lessons')) || [];
    lessons.push({
      lessonName,
      lessonDescription,
      lessonNumber: id,
    });
    localStorage.setItem('lessons', JSON.stringify(lessons));
  };

  const clearForm = () => {
    setLessonName('');
    setLessonDescription('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    saveLesson();
    const nextLesson = 1 + parseInt(id, 10);
    // mock saving to a backend...
    setTimeout(() => {
      setStatus(DEFAULT);
      clearForm();
      router.push({
        pathname: `./${nextLesson}`,
      });
    }, 300);
  };

  const handleSeeFullCourse = () => {
    saveLesson();
    setTimeout(() => {
      setStatus(DEFAULT);
      clearForm();
      router.push({
        pathname: `../../course`,
      });
    }, 300);
  };

  const handleChangeName = (e) => {
    setLessonName(e.currentTarget.value);
  };

  const handleChangeDescription = (e) => {
    setLessonDescription(e.currentTarget.value);
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
              <span className={styles.helpLink}>Get help with the name</span>
            </label>
            <input
              type="text"
              className={styles.input}
              id="a"
              onChange={handleChangeName}
              value={lessonName}
            />
          </div>

          <div className={styles.inputWrapper}>
            <label className={styles.label} htmlFor="desc">
              Describe your lesson
              <span className={styles.helpLink}>
                Get help with the description
              </span>
            </label>
            <input
              type="text"
              className={styles.input}
              id="desc"
              onChange={handleChangeDescription}
              value={lessonDescription}
            />
          </div>

          <div className={styles.inputWrapper}>
            <label className={styles.label} htmlFor="desc">
              Lesson Materials
              <span className={styles.helpLink}>
                Get help creating lesson materials
              </span>
            </label>
            <div className={styles.imageDrop}>
              <p className={styles.uploadText}>
                Drop video or other assets here or click to choose files
              </p>
              <button type="button" className="button">
                Upload Assets
              </button>
            </div>
          </div>

          <button className="button">Add Another Lesson</button>
          <button
            type="button"
            className="button"
            onClick={handleSeeFullCourse}
          >
            See Full Course
          </button>
        </form>
        {status === SAVING && <SavingMessage />}
      </div>
    </>
  );
};

export default CreateLesson;
