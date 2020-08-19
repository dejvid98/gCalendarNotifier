import React from 'react';
import styles from './Container.module.scss';
import Form from './Form';

const Container = () => {
  return (
    <div className={styles.container}>
      <Form />
      <div className={styles.illustrationContainer}>
        <img src='Calendar.svg' alt='Calendar' />
      </div>
    </div>
  );
};

export default Container;
