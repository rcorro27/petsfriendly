let nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'etudiant.isi.java2@gmail.com',
      pass: 'z2mLt32AE'
    }
});

function envoyerMailAuPetsitter (mailOptions) {
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
}

function envoyerMailAuProprietaire (mailOptions) {
    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
}

  module.exports = {
    envoyerMailAuPetsitter,
    envoyerMailAuProprietaire
  }