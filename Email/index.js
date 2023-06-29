var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
           user: 'kolteapurv1@gmail.com',
           pass: 'SoftwareEngi'
       }
   });

   const mailOptions = {
    from: 'kolteapurv1@gmail.com', // sender address
    to: 'apurvkolte10@gmail.com', // list of receivers
    subject: 'Subject of your email', // Subject line
    html: '<p>Your html here</p>'// plain text body
  };


  transporter.sendMail(mailOptions, function (err, info) {
    if(err)
      console.log(err)
    else
      console.log(info);
 })