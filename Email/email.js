const { request } = require("express");
const express = require("express");
const nodemailer = require("nodemailer");
const cron = require("node-cron");
var app = express();
const port = process.env.port || 3000;
const subjects = [
  "Great Work!",
  "You're doing amazing :)",
  "I love you <3",
  "You make me happy :)",
  "You're the best Pikachu!",
  "I miss you :'(",
];
const texts = [
  "Whats on your mind?",
  "How are you feeling?",
  "I hope your day is going well.",
  "Everything is going well :)",
  "I'm here for you <3",
];

const mailOption = {
  from: '"Daniel" <dan.dinardi@hotmail.com>', // sender address
  to: "biclpalileo@gmail.com", // list of receivers
  subject: "", // Subject line
  text: "", // plain text body
};

// create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
  host: "smtp-mail.outlook.com",
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: "dan.dinardi@hotmail.com", // generated ethereal user
    pass: "Daniel1999", // generated ethereal password
  },
});

// send mail with defined transport object
cron.schedule(
  "0 0,30 9-16 * * Mon-Fri ",
  () => {
    mailOption.subject = subjects[Math.round(Math.random() * 5)];
    mailOption.text = texts[Math.round(Math.random() * 4)];

    console.log(mailOption);

    transporter.sendMail(mailOption, (error, info) => {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
      }
    });
  },
  {
    scheduled: true,
    timezone: "Europe/Dublin",
  }
);

app.listen(port, (err) => {
  if (err) {
    return console.log("ERROR: " + err);
  }
  console.log(`Listening on port ${port}`);
});
