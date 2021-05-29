import React, { Component } from 'react'
import AppBar from '../Components/AppBar'
import '../App.css'
import MyList from '../Components/MyList'
import MobileList from '../Components/MobileList'

export class Single extends Component {
    render() {
        return (
            <div>
                <AppBar />
                <div className="head-bread" style={{ paddingTop: "10vh" }} >
                    <div className="container">
                        <ol className="breadcrumb">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Men</a></li>
                            <li className="active">Shop</li>
                        </ol>
                    </div>
                </div>

                <div className="showcase-grid">
                    <div className="container">
                        <div className="col-md-8 showcase">
                            <MySlider/>
                        </div>
                        <div className="col-md-4 showcase">
                            <div className="showcase-rt-top">
                                <div className="pull-left shoe-name">
                                    <h3>Stone Grenade RTL</h3>
                                    <p>BLUETOOTH SPEAKERS</p>
                                    <h4>₹1,002.00</h4>
                                </div>
                                <div className="clearfix"></div>
                            </div>
                            <hr className="featurette-divider" />
                            <div className="shocase-rt-bot">
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
                                <ul>
                                    <li className="ad-2-crt simpleCart_shelfItem">
                                        <a className="btn item_add" href="#" role="button">Add To Cart</a>
                                        <a className="btn" href="#" role="button">Buy Now</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="showcase-last">
                                <h3>product details</h3>
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
                            <ul className="nav nav-pills tab-nike" role="tablist">
                                <li role="presentation" className="active"><a href="#home" aria-controls="home" role="tab" data-toggle="tab">Highlights</a></li>
                                <li role="presentation"><a href="#profile" aria-controls="profile" role="tab" data-toggle="tab">Description</a></li>
                                <li role="presentation"><a href="#messages" aria-controls="messages" role="tab" data-toggle="tab">Terms & conditions</a></li>
                            </ul>
                            <div className="tab-content">
                                <div role="tabpanel" className="tab-pane active" id="home">
                                    <p>The full-length Max Air unit delivers excellent cushioning with enhanced flexibility for smoother transitions through footstrike.</p>
                                    <p>Dynamic Flywire cables integrate with the laces and wrap your midfoot for a truly adaptive, supportive fit.</p>
                                </div>
                                <div role="tabpanel" className="tab-pane" id="profile">
                                    <p>Nike is one of the leading manufacturer and supplier of sports equipment, footwear and apparels. Nike is a global brand and it continuously creates products using high technology and design innovation. Nike has a vast collection of sports shoes for men at Snapdeal. You can explore our range of basketball shoes, football shoes, cricket shoes, tennis shoes, running shoes, daily shoes or lifestyle shoes. Take your pick from an array of sports shoes in vibrant colours like red, yellow, green, blue, brown, black, grey, olive, pink, beige and white. Designed for top performance, these shoes match the way you play or run. Available in materials like leather, canvas, suede leather, faux leather, mesh etc, these shoes are lightweight, comfortable, sturdy and extremely sporty. The sole of all Nike shoes is designed to provide an increased amount of comfort and the material is good enough to provide an improved fit. These shoes are easy to maintain and last for a really long time given to their durability. Buy Nike shoes for men online with us at some unbelievable discounts and great prices. So get faster and run farther with your Nike shoes and track how hard you can play.</p>
                                </div>
                                <div role="tabpanel" className="tab-pane" id="messages">
                                    The images represent actual product though color of the image and product may slightly differ.
                                </div>
                            </div>
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

                <div className="footer-grid" style={{marginTop:"100px"}} >
                    <div className="container">
                        <div className="col-md-2 re-ft-grd">
                            <h3>Categories</h3>
                            <ul className="categories">
                                <li><a href="#">Men</a></li>
                                <li><a href="#">Women</a></li>
                                <li><a href="#">Kids</a></li>
                                <li><a href="#">Formal</a></li>
                                <li><a href="#">Casuals</a></li>
                                <li><a href="#">Sports</a></li>
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
                                <li><a href="#" className="fb">facebook</a></li>
                                <li><a href="#" className="twt">twitter</a></li>
                                <li><a href="#" className="gpls">g+ plus</a></li>
                                <div className="clearfix"></div>
                            </ul>
                        </div>
                        
                        <div className="clearfix"></div>
                    </div>
                    <div className="copy-rt">
                        <div className="container">
                            <p>&copy;   2015 N-AIR All Rights Reserved. Design by <a href="http://www.w3layouts.com">w3layouts</a></p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Single
