const nodemailer = require('@nodemailer/pro');

exports.home = function(res, req, next){
	res.render('home');
};

exports.about = function(res, req, next){
	res.render('about');
};

exports.appointmentArrangmentMailer = function(req, res, next){
      // create reusable transporter object using the default SMTP transport
      let transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: {
              user: process.env.USERAUTH_USERNAME,
              pass: process.env.USERAUTH_USERPASS
          }
      });

      var subject = "Appointment Arrangment";
      var userPartial = req.body.userPartial;
      var mailUserName = req.body.mailUserName;
      var user_write_up = req.body.user_write_up;
      var clientContactNo = req.body.clientContactNo;

      // setup email data with unicode symbols
      let mailOptions = {
        	from: userPartial + "👻" + "<" + mailUserName + ">" , // sender address
          to: 'oyama@projectcodex.co', /* oyama@projectcodex.co',  list of receivers */
          subject: subject + "✔", // Subject line
          text: user_write_up , // plain text body
          html: user_write_up + "<br>" + "Client Contact Number: " + clientContactNo // html body
      };
			console.log(mailOptions);
      // send mail with defined transport object
      transporter.sendMail(mailOptions, function(error, info) {
          if (error) {
              return console.log(error);
          }
          console.log('Message %s sent: %s', info.messageId, info.response);
      });
			res.redirect('/sentMailFeedback');
};
