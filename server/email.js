const nodemailer = require('nodemailer');

const sendEmail = (receiverName, receiverEmail, time) => {
  const output = `
    <h3>Greetings, ${receiverName}</h3>
    <p>You have an upcoming event in ${time} minutes according to your Google Calendar</p>
  `;

  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    port: 587,
    secure: false,
    auth: {
      user: 'gcalendarnotifierclient@gmail.com',
      pass: 'testacc123',
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  const mailOptions = {
    from: '"GCalendarNotifier" <gcalendarnotifierclient@gmail.com>',
    to: receiverEmail,
    subject: 'Upcoming event',
    text: 'Hello world?',
    html: output,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return false;
    }
    return true;
  });
};

sendEmail('davidsucur111@gmail.com')

module.exports = sendEmail;
