import emailjs from 'emailjs-com';

function sendMail(e,res) {
    emailjs.sendForm('gmail', 'template_060u1yu', {
        name: e.name,
        product_name: e.product_name,
        shipping: e.shipping,
        phone: e.phone,
        address: e.address,
        city: e.city,
        my_state: e.my_state,
        pincode: e.pincode,
        email: e.email,
        order_id: res.razorpay_order_id,
        payment_id: res.razorpay_payment_id
    }, 'user_rdnQ08wROAm4vj2HIcVdc')
      .then((result) => {
          console.log(result.text);
          return true
      }, (error) => {
          console.log(error.text);
          return false
      });
}

export default sendMail
