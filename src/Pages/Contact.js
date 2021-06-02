import React, { Component } from 'react'
import { MyFooter } from '../Components/Footer'
import AppBar from '../Components/AppBar'

export class Contact extends Component {
    render() {
        return (
            <div>
                <AppBar />
                <div class="contact" style={{margin:"100px 0px"}} >
                    <div class="container">
                        <h3>Catch us</h3>
                        <div class="contact-content">
                            <form>
                                <input type="text" class="textbox" placeholder="Name" /><br />
                                <input type="text" class="textbox" placeholder="Email" /><br />
                                <div class="clear"> </div>
                                <div>
                                    <textarea placeholder="Message" >Your Message</textarea><br />
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
