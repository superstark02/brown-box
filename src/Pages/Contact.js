import React, { Component } from 'react'
import { MyFooter } from '../Components/Footer'
import MyAppBar from "../Components/AppBar"

export class Contact extends Component {
    render() {
        return (
            <div>
                <MyAppBar />

                <div class="page-banner-section section bg-image" style={{backgroundImage:"url(https://www.appier.com/wp-content/uploads/2019/05/GettyImages-938430346.jpg)"}}>
                    <div class="container">
                        <div class="row">
                            <div class="col">

                                <div class="page-banner text-left">
                                    <h2>Contact</h2>
                                    <ul class="page-breadcrumb">
                                        <li><a href="index.html">Home</a></li>
                                        <li>Contact</li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <div class="conact-section section pt-85 pt-lg-65 pt-md-55 pt-sm-45 pt-xs-35  pb-100 pb-lg-80 pb-md-70 pb-sm-60 pb-xs-50">
                    <div class="container">

                        <div class="row">
                            <div class="col-12">
                                <div class="contact-form-wrap">
                                    <h3 class="contact-title">Service Support</h3>
                                    <p>
                                        support@brownboxindia.store
                                    </p>
                                    <p>
                                        Call: +91 99101 97196
                                    </p>
                                    <p>
                                        <a href="https://wa.me/919319977851?text=Hi" >
                                            WhatsApp Link
                                        </a>
                                    </p>
                                    <p class="form-messege"></p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div class="conact-section section pt-85 pt-lg-65 pt-md-55 pt-sm-45 pt-xs-35  pb-100 pb-lg-80 pb-md-70 pb-sm-60 pb-xs-50">
                    <div class="container">

                        <div class="row">
                            <div class="col-12">
                                <div class="contact-form-wrap">
                                    <h3 class="contact-title">Cancel Order</h3>
                                    <p>
                                        order@brownboxindia.store
                                    </p>
                                    <p>
                                        Call: +91 93199 77851
                                    </p>
                                    <p>
                                        <a href="https://wa.me/919319977851?text=Hi" >
                                            WhatsApp Link
                                        </a>
                                    </p>
                                    <p class="form-messege"></p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div class="conact-section section pt-85 pt-lg-65 pt-md-55 pt-sm-45 pt-xs-35  pb-100 pb-lg-80 pb-md-70 pb-sm-60 pb-xs-50">
                    <div class="container">

                        <div class="row">
                            <div class="col-12">
                                <div class="contact-form-wrap">
                                    <h3 class="contact-title">Feedback</h3>
                                    <form id="contact-form" action="assets/php/mail.php" method="post">
                                        <div class="row">
                                            <div class="col-lg-5">
                                                <div class="name-fild-padding mb-sm-30 mb-xs-30">
                                                    <div class="row">
                                                        <div class="col-md-12">
                                                            <div class="contact-form-style mb-20">
                                                                <label class="fild-name">Name</label>
                                                                <input name="name" placeholder="" type="text" />
                                                            </div>
                                                        </div>
                                                        <div class="col-md-12">
                                                            <div class="contact-form-style mb-20">
                                                                <label class="fild-name">Email</label>
                                                                <input name="email" placeholder="" type="email" />
                                                            </div>
                                                        </div>
                                                        <div class="col-md-12">
                                                            <div class="check-box">
                                                                <input type="checkbox" id="create_account" />
                                                                <label for="create_account">I am not a robot</label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-lg-7">
                                                <div class="contact-form-style bl">
                                                    <label class="fild-name pl-15">Message</label>
                                                    <textarea class="pl-15" name="message" placeholder="Type your message here.."></textarea>
                                                    <button class="btn" type="submit"><span>Send message</span></button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                    <p class="form-messege"></p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <MyFooter />
            </div>
        )
    }
}

export default Contact
