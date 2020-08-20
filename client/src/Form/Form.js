import React, { useState } from 'react';
import validator from 'validator';
import styles from './Form.module.scss';
import TextField from '@material-ui/core/TextField';
import DatePicker from './DatePicker';
import Button from '@material-ui/core/Button';

const Form = ({ createAnEvent }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [nameError, setNameError] = useState(false);
  const [numberError, setNumberError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [date, setDate] = useState();

  const validateInputs = () => {
    if (!name) {
      setError('Please enter a valid name');
      setNameError(true);
      return false;
    }

    if (number.length < 8 || !validator.isNumeric(number)) {
      setError('Please enter a valid phone number');
      setNumberError(true);
      return false;
    }

    if (!email || !validator.isEmail(email)) {
      setError('Please enter a valid email');
      setEmailError(true);
      return false;
    }

    if (!date) {
      setError('Please enter a valid date/time');
      return false;
    }

    return true;
  };

  const handleSubmit = () => {
    if (validateInputs()) {
      createAnEvent(name, email, date);
    }
  };

  return (
    <div className={styles.container}>
      <h1>Welcome!</h1>
      {error ? <div className={styles.errorWrapper}>{error}</div> : null}
      <TextField
        id='standard-basic'
        label='Name'
        className={styles.input}
        variant='outlined'
        value={name}
        error={nameError}
        onChange={(e) => {
          setError('');
          setNameError(false);
          setName(e.target.value);
        }}
      />
      <TextField
        id='standard-basic'
        label='Phone number'
        variant='outlined'
        className={styles.input}
        value={number}
        error={numberError}
        onChange={(e) => {
          setError('');
          setNumberError(false);
          setNumber(e.target.value);
        }}
      />
      <TextField
        id='standard-basic'
        label='Email'
        variant='outlined'
        className={styles.input}
        value={email}
        error={emailError}
        onChange={(e) => {
          setError('');
          setEmailError(false);
          setEmail(e.target.value);
        }}
      />
      <DatePicker date={date} setDate={setDate} />
      <Button
        variant='contained'
        color='secondary'
        className={styles.submitButton}
        onClick={handleSubmit}
      >
        Submit
      </Button>
    </div>
  );
};

export default Form;
