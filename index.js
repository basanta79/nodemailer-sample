const nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    host: 'smtp.office365.com',
    port: 587,
    secure: false,
    auth: {
      user: 'noreply@efuelapp.com',
      pass: '********' // password needed
    }
  });
  
  var mailOptions = {
    from: 'noreply@2ionline.com',
    to: 'basanta79@gmail.com',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });