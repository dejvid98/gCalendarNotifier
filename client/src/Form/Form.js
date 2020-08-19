import React, { useState } from 'react';
import styles from './Form.module.scss';
import TextField from '@material-ui/core/TextField';
import DatePicker from './DatePicker';
import Button from '@material-ui/core/Button';

const Form = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date());

  return (
    <div className={styles.container}>
      <h1>Welcome!</h1>
      <TextField
        id='standard-basic'
        label='Name'
        className={styles.input}
        variant='outlined'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <TextField
        id='standard-basic'
        label='Phone'
        variant='outlined'
        className={styles.input}
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <TextField
        id='standard-basic'
        label='Email'
        variant='outlined'
        className={styles.input}
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <DatePicker date={date} time={time} setDate={setDate} setTime={setTime} />
      <Button
        variant='contained'
        color='secondary'
        className={styles.createButton}
      >
        CREATE
      </Button>
    </div>
  );
};

export default Form;
