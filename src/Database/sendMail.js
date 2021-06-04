import React from 'react'
import emailjs from 'emailjs-com';

function sendMail(e) {
    emailjs.sendForm('gmail', 'template_060u1yu', e.target, 'user_rdnQ08wROAm4vj2HIcVdc')
      .then((result) => {
          console.log(result.text);
          return true
      }, (error) => {
          console.log(error.text);
          return false
      });
}

export default sendMail
