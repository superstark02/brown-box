import React, { Component } from 'react'
import "./Footer.css"

export class Footer extends Component {
    render() {
        return (
            <div className="wrap footer" >
                <div className="font-a" >
                    brown box.
                </div>
            </div>
        )
    }
}

export default Footer


export class MyFooter extends Component {
    render() {
        return (
            <div className="footer-grid" style={{ marginTop: "100px" }} >
                <div className="container">
                    {/*<div className="col-md-2 re-ft-grd">
                        <h3>Categories</h3>
                        <ul className="categories">
                            <li><a href="#">Men</a></li>
                        </ul>
                    </div>*/}
                    <div className="col-md-2 re-ft-grd">
                        <h3>Short links</h3>
                        <ul className="shot-links">
                            <li><a href="/contact">Contact Us</a></li>
                            <li><a href="/about">About Us</a></li>
                            <li><a href="/terms-conditions/#privacy">Privacy Policy</a></li>
                            <li><a href="/terms-conditions/#refunds">Refund Policy</a></li>
                            <li><a href="/terms-conditions/#conditions">Terms & conditions</a></li>
                        </ul>
                    </div>
                    <div className="col-md-6 re-ft-grd">
                        <h3>Social</h3>
                        <ul className="shot-links">
                            <li><a href="https://www.instagram.com/brownbox_india/" className="fb">instagram</a></li>
                            <li><a href="https://wa.me/919319977851?text=Hi" className="gpls">whatsapp</a></li>
                            <div className="clearfix"></div>
                        </ul>
                    </div>

                    <div className="clearfix"></div>
                </div>
                <div className="copy-rt">
                    <div className="container">
                        <p>&copy;   2021 Brown Box All Rights Reserved. Design by Pidgin</p>
                    </div>
                </div>
            </div>
        )
    }
}
