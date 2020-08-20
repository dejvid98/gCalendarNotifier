import 'date-fns';
import React from 'react';
import MomentUtils from '@date-io/moment';
import styles from './Form.module.scss';
import Grid from '@material-ui/core/Grid';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';

export default function MaterialUIPickers({ date, setDate }) {
  const handleDateChange = (date) => {
    setDate(date._d);
  };

  return (
    <MuiPickersUtilsProvider utils={MomentUtils}>
      <Grid container justify='space-evenly'>
        <KeyboardDatePicker
          disableToolbar
          variant='inline'
          format='MM/DD/yyyy'
          margin='normal'
          id='date-picker-inline'
          label='Date'
          value={date}
          onChange={handleDateChange}
          className={styles.dateTime}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
        <KeyboardTimePicker
          margin='normal'
          id='time-picker'
          label='Time'
          value={date}
          onChange={handleDateChange}
          className={styles.dateTime}
          KeyboardButtonProps={{
            'aria-label': 'change time',
          }}
        />
      </Grid>
    </MuiPickersUtilsProvider>
  );
}
