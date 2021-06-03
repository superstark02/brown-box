import React, { Component } from 'react'
import AppBar from '../Components/AppBar'
import '../App.css'
import './Single.css'
import MyList from '../Components/MyList'
import MobileList from '../Components/MobileList'
import Slider from '../Components/Slider'
import { MyFooter } from '../Components/Footer'
import { FaCheckCircle, FaExchangeAlt, FaShippingFast, FaUndo } from 'react-icons/fa'
import Avatar from '@material-ui/core/Avatar';
import AvatarGroup from '@material-ui/lab/AvatarGroup';
import firebase from 'firebase'
import { Redirect, useHistory } from 'react-router'
import login from '../Database/Login'


export function Single() {

    const history = useHistory();
  
    const handleOnSubmit = () => {
      history.push(`/cart`);
    };

    const check_user = () => {
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                return handleOnSubmit()
            } else {
                login().then(res => {
                    return handleOnSubmit()
                });
            }
        });
    }

    return (
        <div>
            <AppBar />

            <div className="showcase-grid">
                <div className="container">
                    <div className="col-md-8 showcase">
                        <Slider />
                    </div>
                    <div className="col-md-4 showcase">
                        <div className="showcase-rt-top">
                            <div className="pull-left shoe-name">
                                <h3>Stone Grenade RTL</h3>
                                <p>BLUETOOTH SPEAKERS</p>
                                <h4 style={{ color: "#ffb300" }} >₹1,002.00</h4>
                                <div style={{ margin: "10px 0px", color: "grey" }} >
                                    Online : ₹1,500.00
                                    </div>
                                <div style={{ margin: "10px 0px", color: "grey" }} >
                                    Save 45%
                                    </div>
                            </div>
                            <div className="clearfix"></div>
                        </div>
                        <hr className="featurette-divider" />
                        <div className="shocase-rt-bot">
                            <div className="view-cnt" >
                                <div className="view" >
                                    View On
                                        <div>
                                        <a href="#" >
                                            <img src={"http://www.mountaincolours.in/uploads/clients/1551518604.jpg"} width="30px" />
                                        </a>
                                    </div>
                                </div>
                                <div className="view" >
                                    View On
                                        <div>
                                        <a href="#" >
                                            <img src={"https://www.pngarea.com/pngm/6/5103627_amazon-logo-png-icon-amazon-logo-png-transparent.png"} width="30px" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="float-qty-chart">
                                <ul>
                                    {/*
                                            <li className="qty">
                                                <h3>Size Chart</h3>
                                                <select className="form-control siz-chrt">
                                                    <option>6 US</option>
                                                    <option>7 US</option>
                                                    <option>8 US</option>
                                                    <option>9 US</option>
                                                    <option>10 US</option>
                                                    <option>11 US</option>
                                                </select>
                                            </li>
                                        */}

                                    <li className="qty">
                                        <h4>QTY</h4>
                                        <select className="form-control qnty-chrt">
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                            <option>6</option>
                                            <option>7</option>
                                        </select>
                                    </li>
                                </ul>
                                <div className="clearfix"></div>
                            </div>
                        </div>

                        <div style={{ marginTop: "30px" }} >
                            <div>
                                <AvatarGroup max={4}>
                                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                                    <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                                    <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                                    <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
                                    <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
                                </AvatarGroup>
                            </div>
                            <div>
                                10+ people are buying this together
                                </div>
                        </div>

                        <ul>
                            <button className="std-btn-1" onClick={check_user} >
                                Buy Together
                                </button>
                        </ul>

                        <div className="showcase-last">
                            <h3>Description</h3>
                            <ul>
                                <li>Internal bootie wraps your foot for a sock-like fit</li>
                                <li>Unique eyestays work with the Flywire cables to create an even better glove-like fit</li>
                                <li>Waffle outsole for durability and multi-surface traction</li>
                                <li>Sculpted Cushlon midsole combines plush cushioning and springy resilience for impact protection</li>
                                <li>Midsole flex grooves for greater forefoot flexibility</li>
                            </ul>
                        </div>
                    </div>
                    <div className="clearfix"></div>
                </div>
            </div>

            <div className="specifications">
                <div className="container">
                    <h3>Item Details</h3>
                    <div className="detai-tabs">

                        <div className="tab-content">
                            <div className="tab-pane active features" style={{ display: "flex", justifyContent: "space-evenly" }} >
                                <div>
                                    <div className="feature-icons" >
                                        <FaExchangeAlt />
                                    </div>
                                    <div className="feature-text" >
                                        Easy Returns
                                        </div>
                                </div>

                                <div>
                                    <div className="feature-icons" >
                                        <FaUndo />
                                    </div>
                                    <div className="feature-text" >
                                        Easy Refunds
                                        </div>
                                </div>

                                <div>
                                    <div className="feature-icons" >
                                        <FaShippingFast />
                                    </div>
                                    <div className="feature-text" >
                                        Ship in 48 hours
                                        </div>
                                </div>

                                <div>
                                    <div className="feature-icons" >
                                        <FaCheckCircle />
                                    </div>
                                    <div className="feature-text" >
                                        Genuine Product
                                        </div>
                                </div>
                            </div>
                        </div>

                        {/* Home */}
                        <ul className="nav nav-pills tab-nike" role="tablist">
                            <li role="presentation" className=""><a aria-controls="home" role="tab" data-toggle="tab">Highlights</a></li>
                        </ul>
                        <div className="tab-content">
                            <div className="tab-pane active" id="home">
                                <p>The full-length Max Air unit delivers excellent cushioning with enhanced flexibility for smoother transitions through footstrike.</p>
                                <p>Dynamic Flywire cables integrate with the laces and wrap your midfoot for a truly adaptive, supportive fit.</p>
                            </div>
                        </div>

                        {/* Desc */}
                        <ul className="nav nav-pills tab-nike" role="tablist">
                            <li role="presentation" className=""><a aria-controls="home" role="tab" data-toggle="tab">Product Details</a></li>
                        </ul>
                        <div className="tab-content">
                            <div className="tab-pane active" id="home">
                                <p>Nike is one of the leading manufacturer and supplier of sports equipment, footwear and apparels. Nike is a global brand and it continuously creates products using high technology and design innovation. Nike has a vast collection of sports shoes for men at Snapdeal. You can explore our range of basketball shoes, football shoes, cricket shoes, tennis shoes, running shoes, daily shoes or lifestyle shoes. Take your pick from an array of sports shoes in vibrant colours like red, yellow, green, blue, brown, black, grey, olive, pink, beige and white. Designed for top performance, these shoes match the way you play or run. Available in materials like leather, canvas, suede leather, faux leather, mesh etc, these shoes are lightweight, comfortable, sturdy and extremely sporty. The sole of all Nike shoes is designed to provide an increased amount of comfort and the material is good enough to provide an improved fit. These shoes are easy to maintain and last for a really long time given to their durability. Buy Nike shoes for men online with us at some unbelievable discounts and great prices. So get faster and run farther with your Nike shoes and track how hard you can play.</p>
                            </div>
                        </div>

                        {/*  */}
                    </div>
                </div>
            </div>

            <div className="you-might-like">
                <div className="container">
                    <h3 className="you-might">Products You May Like</h3>
                    <div className="clearfix"></div>
                </div>
            </div>

            <div className="desktop" >
                <MyList />
            </div>
            <div className="mobile" >
                <MobileList />
            </div>
            <MyFooter />
        </div>
    )
}

export default Single
