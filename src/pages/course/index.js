import React, { useEffect, useState } from 'react';
import styles from './Course.module.scss';

const handlePublish = () => {
  //
};

const Lessons = ({ lessonsData }) => {
  return (
    <ul>
      {lessonsData.map((lesson) => {
        return lesson.lessonName ? (
          <li key={lesson.lessonNumber}>
            <h3>{lesson.lessonName}</h3>
            <p>{lesson.lessonDescription}</p>
          </li>
        ) : (
          <></>
        );
      })}
    </ul>
  );
};

const Course = () => {
  const [courseData, setCourseData] = useState(null);
  const [lessonsData, setLessonsData] = useState(null);
  useEffect(() => {
    const courseData = JSON.parse(localStorage.getItem('courseData'));
    const lessonsData = JSON.parse(localStorage.getItem('lessons'));
    setCourseData(courseData);
    setLessonsData(lessonsData);
  });
  return (
    <div className={styles.wrapper}>
      <h1>Course: {courseData?.title}</h1>
      {lessonsData?.length > 0 && <Lessons lessonsData={lessonsData} />}
      <button type="button" className="button" onClick={handlePublish}>
        Publish
      </button>
    </div>
  );
};

export default Course;
