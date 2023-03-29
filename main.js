
const nodemailer = require('nodemailer');
const crypto = require('crypto');

const generateToken = () => {
  return crypto.randomBytes(20).toString('hex');
};

const token = generateToken()

function send_mail(mail, code){


const transporter = nodemailer.createTransport({
  service: 'gmail',
  
  auth: {
    user: 'shadyanvilena@gmail.com',
    pass: 'avegajujqbskqkbh'
  },
  tls:{
    rejectUnauthorized:false
  }
});

const mailOptions = {
    from: 'shadyanvilen@gmail.com',
    // to: 'vshadyan070@gmail.com',
    to:mail,
    subject: 'Sending Email using Node.js',
    text: `sexmel http://localhost:3000/verify/${code}`
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
}

send_mail('vshadyan070@gmail.com', token)
