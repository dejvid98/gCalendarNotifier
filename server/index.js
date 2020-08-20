const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const createEvent = require('./calendar');
const sendEmail = require('./email');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/event', (req, res) => {
  const { email, name, date } = req.body;
  const firstNotification = 30 * 60 * 1000;
  const secondNotification = 15 * 60 * 1000;
  const eventDate = new Date(date);
  const currentTime = new Date();
  const timeLeftUntilFirstNotification =
    eventDate - currentTime - firstNotification;
  const timeLeftUntilSecondNotification =
    eventDate - currentTime - secondNotification;
  console.log(timeLeftUntilFirstNotification);
  createEvent(date);

  if (
    timeLeftUntilFirstNotification < 0 ||
    timeLeftUntilSecondNotification < 0
  ) {
    sendEmail(name, email, 0);
    res.send('Email successfully sent!');
    return;
  }

  setTimeout(() => {
    sendEmail(name, email, 30);
  }, timeLeftUntilFirstNotification);

  setTimeout(() => {
    sendEmail(name, email, 15);
  }, timeLeftUntilSecondNotification);

  res.send('Email successfully sent!');
});

const port = 3005;

app.listen(port, () => console.log(`Server is running on port ${port}`));
