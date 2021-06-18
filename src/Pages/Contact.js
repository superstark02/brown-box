import React, { Component } from 'react'
import { MyFooter } from '../Components/Footer'
import AppBar from '../Components/AppBar'
import "./Contact.css"
import emailjs from 'emailjs-com';

export class Contact extends Component {

    sendMail = (e) => {
        e.preventDefault();

        emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    }

    render() {
        return (
            <div>
                <AppBar />

                <div style={{ position: 'relative' }} >
                    <div className="wallpaper-ctc" >
                    </div>
                    <div className="overlay wrap" style={{ height: "50vh" }} >
                        <div className="content" >
                            <div>
                                <div style={{ fontSize: "6vw" }} className="font-a" >
                                    contact us
                                </div>
                            </div>
                            <p className="intro" >
                                We value our users
                            </p>
                        </div>
                    </div>
                </div>

                <div class="contact" style={{ margin: "100px 0px" }} >
                    <div class="container">
                        <div class="contact-content">
                            <form onSubmit={this.sendMail} >
                                <input type="text" class="textbox" name="name" id="name" placeholder="Name" /><br />
                                <input type="text" class="textbox" name="email" id="email" placeholder="Email" /><br />
                                <div class="clear"> </div>
                                <div>
                                    <textarea placeholder="Message" name="message" id="message" >Your Message</textarea><br />
                                </div>
                                <div class="submit">
                                    <input class="btn btn-default cont-btn" type="submit" value="SEND " />
                                </div>
                            </form>

                            <p>
                                Phone: 91 99101 97196
                            </p>
                            <a href="https://wa.me/919319977851?text=Hi" >
                                WhatsApp us
                            </a>
                            <p>
                                Mail: mail@pidgin.online
                            </p>
                        </div>
                    </div>
                </div>
                <MyFooter />
            </div>
        )
    }
}

export default Contact
