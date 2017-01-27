const nodemailer = require('@nodemailer/pro');

// create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'gmail.oyamasiphula@gmail.com',
        pass: 'oyamasi2241'
    }
});

// setup email data with unicode symbols
let mailOptions = {
    from: '"Fred Foo 👻" <oyamasiphula@gmail.com>', // sender address
    to: 'oyamasiphula@gmail.com', /* oyama@projectcodex.co',  list of receivers */
    subject: 'Hello ✔', // Subject line
    text: 'Hello world ?', // plain text body
    html: '<b>Hello world ?</b>' // html body
};

// send mail with defined transport object
transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
        return console.log(error);
    }
    console.log('Message %s sent: %s', info.messageId, info.response);
});
