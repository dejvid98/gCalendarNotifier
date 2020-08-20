import React, { useState } from 'react';
import styles from './Container.module.scss';
import Form from './Form';
import Completed from './Completed';
import HTTP from '../util/HTTP';

const Container = () => {
  const [isSent, setIsSent] = useState(false);

  const createAnEvent = async (name, email, date) => {
    try {
      await HTTP.post('/event', { name, email, date });
      setIsSent(true);
    } catch (err) {
      console.log(err);
    }
  };

  const goBack = () => setIsSent(false);

  return (
    <div className={styles.container}>
      {isSent ? (
        <Completed goBack={goBack} />
      ) : (
        <div style={{ display: 'flex' }}>
          <Form createAnEvent={createAnEvent} />
          <div className={styles.illustrationContainer}>
            <img src='Calendar.svg' alt='Calendar' />
          </div>
        </div>
      )}
    </div>
  );
};

export default Container;
