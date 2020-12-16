import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { detailsData } from './details-data';
import styles from './Detail.module.scss';

const Detail = () => {
  const router = useRouter();
  const { id } = router.query;

  const data = detailsData[id];
  const totalLessons = data?.lessons?.length;

  return (
    <>
      <h1>
        {data.title} <span>{data.duration}</span>
      </h1>
      <p>{data.description}</p>
      <h3>{data.price}</h3>
      {data.purchased && (
        <button className="button">Purchase This Course</button>
      )}
      <p>Creator: {data.creator}</p>
      <h3>{totalLessons} Lessons</h3>
      <ul>
        {data?.lessons.map((lesson) => (
          <li>
            <p>{lesson.lessonName}</p>
            <p>{lesson.lessonDescription}</p>
            <p>{lesson.duration}</p>
          </li>
        ))}
      </ul>

      <div>
        <ul>
          {data?.comments.map((comment) => (
            <li>
              <p>{comment.author}</p>
              <p>{comment.comment}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Detail;
