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

  if (data) {
    return (
      <div className={styles.wrapper}>
        <h1>
          {data.title}{' '}
          <span className={styles.courseDuration}>{data.duration}</span>
        </h1>
        <p className={styles.desc}>{data.description}</p>
        <div className={styles.priceBlock}>
          <h3 className={styles.price}>{data.price}</h3>
          {!data.purchased && (
            <button className="button">Purchase This Course</button>
          )}
        </div>
        <div className={styles.videoWrapper}>
          <img src={`/${data.image}`} className={styles.videoThumbnail} />
          <img src="/play-icon.svg" className={styles.playIcon} />
        </div>
        {!data.purchased && (
          <div className={styles.previewMessage}>Preview this course</div>
        )}
        <p>Creator: {data.creator}</p>

        <h3>Lessons</h3>
        <ul className={styles.lessons}>
          {data?.lessons.map((lesson) => (
            <li className={styles.lessonInfoBlock}>
              <p className={styles.lessonName}>
                {lesson.lessonName}
                {` | `}
                <span className={styles.lessonDuration}>{lesson.duration}</span>
              </p>
              <p className={styles.lessonDescription}>
                {lesson.lessonDescription}
              </p>
            </li>
          ))}
        </ul>

        <div>
          <h3>Comments</h3>
          <ul>
            {data?.comments.map((comment) => (
              <li>
                <p>{comment.author}</p>
                <p>{comment.comment}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }

  return <></>;
};

export default Detail;
