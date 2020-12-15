import React, { useReducer, useState } from 'react';
import { useRouter } from 'next/router';
import SavingMessage from '../../component/SavingMessage';
import styles from './Create.module.scss';

const SAVING = 'SAVING';
const DEFAULT = 'DEFAULT';

const initialState = {
  title: '',
  description: '',
  price: '',
};

const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'title': {
      return {
        ...state,
        title: payload,
      };
    }
    case 'description': {
      return {
        ...state,
        description: payload,
      };
    }
    case 'price': {
      return {
        ...state,
        price: payload,
      };
    }
    default:
      return state;
  }
};

const Create = () => {
  const router = useRouter();
  const [formState, dispatch] = useReducer(reducer, initialState);
  const [status, setStatus] = useState(DEFAULT);

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus(SAVING);
    localStorage.setItem('courseData', JSON.stringify(formState));

    // mock saving to a backend...
    setTimeout(() => {
      router.push({
        pathname: 'create/1',
      });
    }, 800);
  };

  const handleChange = (e) => {
    dispatch({
      type: e.currentTarget.name,
      payload: e.currentTarget.value,
    });
  };

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Create Your Course</h1>
      <div className={styles.formWrapper}>
        <form
          onSubmit={handleSubmit}
          className={status === SAVING ? styles.formMuted : styles.form}
        >
          <div className={styles.inputWrapper}>
            <label className={styles.label} htmlFor="a">
              Course Title
            </label>
            <input
              type="text"
              className={styles.input}
              id="a"
              name="title"
              onChange={handleChange}
            />
          </div>

          <div className={styles.inputWrapper}>
            <label className={styles.label} htmlFor="b">
              Course Description
            </label>
            <textarea
              className={styles.textarea}
              id="b"
              rows="6"
              name="description"
              onChange={handleChange}
            />
          </div>

          <div className={styles.inputWrapper}>
            <label className={styles.label} htmlFor="c">
              Price
            </label>
            <input
              type="text"
              className={styles.input}
              id="c"
              name="price"
              onChange={handleChange}
            />
          </div>

          <button className={styles.button}>Save Your Course</button>
        </form>
        {status === SAVING && <SavingMessage />}
      </div>
    </div>
  );
};

export default Create;
