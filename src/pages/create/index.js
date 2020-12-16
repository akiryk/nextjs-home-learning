import React, { useEffect, useReducer, useState } from 'react';
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
      if (payload.substr(0, 1) !== '$') {
        return {
          ...state,
          price: `$${payload}`,
        };
      } else {
        return {
          ...state,
          price: payload,
        };
      }
    }
    default:
      return state;
  }
};

const Create = () => {
  const router = useRouter();
  const [formState, dispatch] = useReducer(reducer, initialState);
  const [status, setStatus] = useState(DEFAULT);

  useEffect(() => {
    localStorage.setItem('lessons', null);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus(SAVING);
    localStorage.setItem('courseData', JSON.stringify(formState));

    // mock saving to a backend...
    setTimeout(() => {
      router.push({
        pathname: 'create/1',
      });
    }, 400);
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
              Course Title{' '}
              <span className={styles.helpLink}>
                See what makes a good title
              </span>
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
              <span className={styles.helpLink}>
                Get help with the description
              </span>
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
              <span className={styles.helpLink}>
                Get help settling on a price
              </span>
            </label>
            <input
              type="text"
              className={styles.input}
              id="c"
              name="price"
              onChange={handleChange}
              value={formState.price}
            />
          </div>

          <button className="button">Save Your Course</button>
        </form>
        {status === SAVING && <SavingMessage />}
      </div>
    </div>
  );
};

export default Create;
