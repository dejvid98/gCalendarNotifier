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

export default function MaterialUIPickers() {
  const [selectedDate, setSelectedDate] = React.useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
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
          value={selectedDate}
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
          value={selectedDate}
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
