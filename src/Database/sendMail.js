import emailjs from 'emailjs-com';

function sendMail(e) {
    emailjs.sendForm('service_wnng1k5', 'template_79oc4tk', e.target, 'user_4y4gw3JRalVlGfHP1RZJS')
      .then((result) => {
          console.log(result.text);
          return true
      }, (error) => {
          console.log(error.text);
          return false
      });
}

export default sendMail
