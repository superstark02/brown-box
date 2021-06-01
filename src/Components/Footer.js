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
                    <div className="col-md-2 re-ft-grd">
                        <h3>Categories</h3>
                        <ul className="categories">
                            <li><a href="#">Men</a></li>
                        </ul>
                    </div>
                    <div className="col-md-2 re-ft-grd">
                        <h3>Short links</h3>
                        <ul className="shot-links">
                            <li><a href="#">Contact us</a></li>
                            <li><a href="#">Support</a></li>
                            <li><a href="#">Delivery</a></li>
                            <li><a href="#">Return Policy</a></li>
                            <li><a href="#">Terms & conditions</a></li>
                            <li><a href="contact.html">Sitemap</a></li>
                        </ul>
                    </div>
                    <div className="col-md-6 re-ft-grd">
                        <h3>Social</h3>
                        <ul className="shot-links">
                            <li><a href="#" className="fb">instagram</a></li>
                            <li><a href="#" className="twt">twitter</a></li>
                            <li><a href="#" className="gpls">discord</a></li>
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
