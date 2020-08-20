const createEvent = (date) => {
  // Require google from googleapis package.
  const { google } = require('googleapis');

  // Require oAuth2 from the google instance.
  const { OAuth2 } = google.auth;

  // Create a new instance of oAuth and set the Client ID & Client Secret.
  const oAuth2Client = new OAuth2(
    '405491021854-bv83iq011dn1l9vebpmm83a8473fmvel.apps.googleusercontent.com',
    'wOgPLZFROQv9bWOiLTEEzmOH'
  );

  // Call the setCredentials method on the oAuth2Client instance and set the refresh token.
  oAuth2Client.setCredentials({
    refresh_token:
      '1//04SpDa-YW0KPwCgYIARAAGAQSNwF-L9IribXmMADppMXEclKhDpSfY1OomcKjVi3L9I2s_-tgL08LmlXnqB2aqK_iDCjgoJxv0iQ',
  });

  // Create a new calender instance.
  const calendar = google.calendar({
    version: 'v3',
    auth: oAuth2Client,
  });

  // Create a new event start date instance for temp uses in the calendar.
  let eventStartTime = new Date(date);

  // Create a new event end date instance for temp uses in the calendar.
  let eventEndTime = new Date(date);
  eventEndTime.setMinutes(eventEndTime.getMinutes() + 1);

  // Create a dummy event for temp uses in the calendar
  const event = {
    summary: `An important event`,
    location: `Terzije 30, Belgrade, Serbia 11000`,
    description: `Truly important event.`,
    colorId: 1,
    start: {
      dateTime: eventStartTime,
      timeZone: 'Europe/Belgrade',
    },
    end: {
      dateTime: eventEndTime,
      timeZone: 'Europe/Belgrade',
    },
  };

  // Check if user is busy and have an event on the calendar for the same time.
  calendar.freebusy.query(
    {
      resource: {
        timeMin: eventStartTime,
        timeMax: eventEndTime,
        timeZone: 'Europe/Belgrade',
        items: [{ id: 'primary' }],
      },
    },
    (err, res) => {
      // Check for errors in the query and log them if they exist.
      if (err) return console.error('Free Busy Query Error: ', err);

      // Create an array of all events on the calendar during that time.
      const eventArr = res.data.calendars.primary.busy;

      // Check if event array is empty which means user is not busy
      if (eventArr.length === 0)
        // If the user is not busy create a new calendar event.
        return calendar.events.insert(
          {
            calendarId: 'primary',
            resource: event,
          },
          (err) => {
            // Check for errors and log them if they exist.
            if (err)
              return console.error('Error Creating Calender Event:', err);
            // Else log that the event was created.
            return console.log('Calendar event successfully created.');
          }
        );

      // If event array is not empty log that we are busy.
      return console.log(`Error: Selected time slot is already taken!`);
    }
  );
};

module.exports = createEvent;
