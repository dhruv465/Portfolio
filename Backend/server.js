const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = 5001;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Nodemailer setup (Gmail in this case)
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER, 
    pass: process.env.EMAIL_PASS, 
  },
});

app.post('/send-email', (req, res) => {
  const { email, message } = req.body;

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER, 
    subject: 'Request for web development services',
    text: `From: ${email}\n\nMessage: ${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).json({ error: 'Failed to send email' });
    }
    res.status(200).json({ message: 'Email sent successfully' });
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});