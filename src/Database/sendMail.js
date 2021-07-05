import emailjs from 'emailjs-com';

async function sendMail(e) {

    emailjs.sendForm('gmail', 'template_060u1yu', e.target, 'user_rdnQ08wROAm4vj2HIcVdc')
      .then((result) => {
          console.log(result.text);
          return true
      }, (error) => {
          console.log(error.text);
          return false
      });

    /*const data = {
        fromAddress: "order@brownboxindia.store",
        toAddress: e.email,
        bccAddress: "pidgin2020@gmail.com",
        "subject": "Order Placed",
        "content": "Email can never be dead. The most neutral and effective way, that can be used for one to many and two way communication.",
        "askReceipt": "yes"
    }

    await axios.post('https://mail.zoho.com/api/accounts/<accountId>/messages', data)
        .then(response => this.setState({ articleId: response.data.id }));*/
}

export default sendMail
