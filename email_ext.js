const nodemailer = require('@nodemailer/pro');

// create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.USERAUTH_USERNAME,
        pass: process.env.USERAUTH_USERPASS
    }
});

// setup email data with unicode symbols
let mailOptions = {
    from: '"oyama siphula 👻" <oyamasiphula@gmail.com>', // sender address
    to: 'oyama@projectcodex.co', /* oyama@projectcodex.co',  list of receivers */
    subject: 'Appointment Arrangment ✔', // Subject line
    text: 'Hello I would like to make an appointment for this reason ...', // plain text body
    html: '<b>Hello I would like to make an appointment for this reason ... </b>' // html body
};
console.log(mailOptions);
// send mail with defined transport object
transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
        return console.log(error);
    }
    console.log('Message %s sent: %s', info.messageId, info.response);
});
