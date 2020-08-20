import React from 'react';
import styles from './Completed.module.scss';
import Button from '@material-ui/core/Button';

const Completed = ({ goBack }) => {
  return (
    <div className={styles.container}>
      <img src='Mail.svg' alt='Mail' />
      <div className={styles.notificationText}>
        <h2>Event successfully created!</h2>
        <p>
          You will receive email notifications 30 and 15 minutes before the
          event
        </p>

        <Button
          variant='contained'
          color='primary'
          className={styles.goBackButton}
          onClick={goBack}
        >
          GO BACK
        </Button>
      </div>
    </div>
  );
};

export default Completed;
