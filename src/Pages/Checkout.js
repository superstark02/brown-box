import React, { Component } from 'react'
import { MyFooter } from '../Components/Footer'
import MyAppBar from "../Components/AppBar"
import { Feedback } from '@material-ui/icons'

export class Checkout extends Component {
    render() {
        return (
            <div>
                <MyAppBar />
                <div class="page-banner-section section bg-image" style={{backgroundImage:"url(https://demo.hasthemes.com/nelson-preview/nelson/assets/images/bg/breadcrumb.png)"}}>
                    <div class="container">
                        <div class="row">
                            <div class="col">
                                <div class="page-banner text-left">
                                    <h2>Checkout</h2>
                                    <ul class="page-breadcrumb">
                                        <li><a href="index.html">Home</a></li>
                                        <li>Checkout</li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div class="checkout-section section pt-90 pt-lg-70 pt-md-60 pt-sm-50 pt-xs-40  pb-70 pb-lg-50 pb-md-40 pb-sm-30 pb-xs-20">
                    <div class="container">
                        <div class="row">
                            <div class="col-12">

                                {/* Checkout Form Start*/}
                                <form action="#" class="checkout-form">
                                    <div class="row row-40">

                                        <div class="col-lg-7">

                                            {/* Billing Address */}
                                            <div id="billing-form" class="mb-10">
                                                <h4 class="checkout-title">Billing Address</h4>

                                                <div class="row">

                                                    <div class="col-md-6 col-12 mb-20">
                                                        <label>First Name*</label>
                                                        <input type="text" id="name" placeholder="Name" />
                                                    </div>

                                                    <div class="col-md-6 col-12 mb-20">
                                                        <label>Email Address*</label>
                                                        <input type="email" placeholder="Email Address" />
                                                    </div>

                                                    <div class="col-md-6 col-12 mb-20">
                                                        <label>Phone no*</label>
                                                        <input type="text" placeholder="Phone number" />
                                                    </div>

                                                    <div class="col-12 mb-20">
                                                        <label>Company Name</label>
                                                        <input type="text" placeholder="Company Name" />
                                                    </div>

                                                    <div class="col-12 mb-20">
                                                        <label>Address*</label>
                                                        <input type="text" placeholder="Address line 1" />
                                                        <input type="text" placeholder="Address line 2" />
                                                    </div>

                                                    <div class="col-md-6 col-12 mb-20">
                                                        <label>Country*</label>
                                                        <select class="nice-select">
                                                            <option>Bangladesh</option>
                                                            <option>China</option>
                                                            <option>country</option>
                                                            <option>India</option>
                                                            <option>Japan</option>
                                                        </select>
                                                    </div>

                                                    <div class="col-md-6 col-12 mb-20">
                                                        <label>Town/City*</label>
                                                        <input type="text" placeholder="Town/City" />
                                                    </div>

                                                    <div class="col-md-6 col-12 mb-20">
                                                        <label>State*</label>
                                                        <input type="text" placeholder="State" />
                                                    </div>

                                                    <div class="col-md-6 col-12 mb-20">
                                                        <label>Zip Code*</label>
                                                        <input type="text" placeholder="Zip Code" />
                                                    </div>

                                                    <div class="col-12 mb-20">
                                                        <div class="check-box">
                                                            <input type="checkbox" id="create_account" />
                                                            <label for="create_account">Create an Acount?</label>
                                                        </div>
                                                        <div class="check-box">
                                                            <input type="checkbox" id="shiping_address" data-shipping />
                                                            <label for="shiping_address">Ship to Different Address</label>
                                                        </div>
                                                    </div>

                                                </div>

                                            </div>

                                            {/* Shipping Address */}
                                            <div id="shipping-form">
                                                <h4 class="checkout-title">Shipping Address</h4>

                                                <div class="row">

                                                    <div class="col-md-6 col-12 mb-20">
                                                        <label>First Name*</label>
                                                        <input type="text" placeholder="First Name" />
                                                    </div>

                                                    <div class="col-md-6 col-12 mb-20">
                                                        <label>Last Name*</label>
                                                        <input type="text" placeholder="Last Name" />
                                                    </div>

                                                    <div class="col-md-6 col-12 mb-20">
                                                        <label>Email Address*</label>
                                                        <input type="email" placeholder="Email Address" />
                                                    </div>

                                                    <div class="col-md-6 col-12 mb-20">
                                                        <label>Phone no*</label>
                                                        <input type="text" placeholder="Phone number" />
                                                    </div>

                                                    <div class="col-12 mb-20">
                                                        <label>Company Name</label>
                                                        <input type="text" placeholder="Company Name" />
                                                    </div>

                                                    <div class="col-12 mb-20">
                                                        <label>Address*</label>
                                                        <input type="text" placeholder="Address line 1" />
                                                        <input type="text" placeholder="Address line 2" />
                                                    </div>

                                                    <div class="col-md-6 col-12 mb-20">
                                                        <label>Country*</label>
                                                        <select class="nice-select">
                                                            <option>Bangladesh</option>
                                                            <option>China</option>
                                                            <option>country</option>
                                                            <option>India</option>
                                                            <option>Japan</option>
                                                        </select>
                                                    </div>

                                                    <div class="col-md-6 col-12 mb-20">
                                                        <label>Town/City*</label>
                                                        <input type="text" placeholder="Town/City" />
                                                    </div>

                                                    <div class="col-md-6 col-12 mb-20">
                                                        <label>State*</label>
                                                        <input type="text" placeholder="State" />
                                                    </div>

                                                    <div class="col-md-6 col-12 mb-20">
                                                        <label>Zip Code*</label>
                                                        <input type="text" placeholder="Zip Code" />
                                                    </div>

                                                </div>

                                            </div>

                                        </div>

                                        <div class="col-lg-5">
                                            <div class="row">

                                                {/* Cart Total */}
                                                <div class="col-12 mb-60">

                                                    <h4 class="checkout-title">Cart Total</h4>

                                                    <div class="checkout-cart-total">

                                                        <h4>Product <span>Total</span></h4>

                                                        <ul>
                                                            <li>Teritory Quentily X 01 <span>$35.00</span></li>
                                                            <li>Adurite Silocone X 02 <span>$59.00</span></li>
                                                            <li>Baizidale Momone X 01 <span>$78.00</span></li>
                                                            <li>Makorone Cicile X 01 <span>$65.00</span></li>
                                                        </ul>

                                                        <p>Sub Total <span>$296.00</span></p>
                                                        <p>Shipping Fee <span>$00.00</span></p>

                                                        <h4>Grand Total <span>$296.00</span></h4>

                                                    </div>

                                                </div>

                                                {/* Payment Method */}
                                                <div class="col-12 mb-30">

                                                    <h4 class="checkout-title">Payment Method</h4>

                                                    <div class="checkout-payment-method">

                                                        <div class="single-method">
                                                            <input type="radio" id="payment_check" name="payment-method" value="check" />
                                                            <label for="payment_check">Check Payment</label>
                                                            <p data-method="check">Please send a Check to Store name with Store Street, Store Town, Store State, Store Postcode, Store Country.</p>
                                                        </div>

                                                        <div class="single-method">
                                                            <input type="radio" id="payment_bank" name="payment-method" value="bank" />
                                                            <label for="payment_bank">Direct Bank Transfer</label>
                                                            <p data-method="bank">Please send a Check to Store name with Store Street, Store Town, Store State, Store Postcode, Store Country.</p>
                                                        </div>

                                                        <div class="single-method">
                                                            <input type="radio" id="payment_cash" name="payment-method" value="cash" />
                                                            <label for="payment_cash">Cash on Delivery</label>
                                                            <p data-method="cash">Please send a Check to Store name with Store Street, Store Town, Store State, Store Postcode, Store Country.</p>
                                                        </div>

                                                        <div class="single-method">
                                                            <input type="radio" id="payment_paypal" name="payment-method" value="paypal" />
                                                            <label for="payment_paypal">Paypal</label>
                                                            <p data-method="paypal">Please send a Check to Store name with Store Street, Store Town, Store State, Store Postcode, Store Country.</p>
                                                        </div>

                                                        <div class="single-method">
                                                            <input type="radio" id="payment_payoneer" name="payment-method" value="payoneer" />
                                                            <label for="payment_payoneer">Payoneer</label>
                                                            <p data-method="payoneer">Please send a Check to Store name with Store Street, Store Town, Store State, Store Postcode, Store Country.</p>
                                                        </div>

                                                        <div class="single-method">
                                                            <input type="checkbox" id="accept_terms" />
                                                            <label for="accept_terms">I’ve read and accept the terms & conditions</label>
                                                        </div>

                                                    </div>

                                                    <button class="place-order btn btn-lg btn-round">Place order</button>

                                                </div>

                                            </div>
                                        </div>

                                    </div>
                                </form>

                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal fade quick-view-modal-container" id="quick-view-modal-container" tabindex="-1" role="dialog" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <div class="col-xl-12 col-lg-12">
                                    <div class="row">
                                        <div class="col-lg-4 col-md-6">
                                            {/* Product Details Left */}
                                            <div class="product-details-left">
                                                <div class="product-details-images">
                                                    <div class="lg-image">
                                                        <img src="./assets/images/product/large-product/l-product-1.jpg" alt="" />
                                                    </div>
                                                    <div class="lg-image">
                                                        <img src="./assets/images/product/large-product/l-product-2.jpg" alt="" />
                                                    </div>
                                                    <div class="lg-image">
                                                        <img src="./assets/images/product/large-product/l-product-3.jpg" alt="" />
                                                    </div>
                                                    <div class="lg-image">
                                                        <img src="./assets/images/product/large-product/l-product-4.jpg" alt="" />
                                                    </div>
                                                    <div class="lg-image">
                                                        <img src="./assets/images/product/large-product/l-product-5.jpg" alt="" />
                                                    </div>
                                                </div>
                                                <div class="product-details-thumbs">
                                                    <div class="sm-image"><img src="./assets/images/product/small-product/s-product-1.jpg" alt="product image thumb" /></div>
                                                    <div class="sm-image"><img src="./assets/images/product/small-product/s-product-2.jpg" alt="product image thumb" /></div>
                                                    <div class="sm-image"><img src="./assets/images/product/small-product/s-product-3.jpg" alt="product image thumb" /></div>
                                                    <div class="sm-image"><img src="./assets/images/product/small-product/s-product-4.jpg" alt="product image thumb" /></div>
                                                    <div class="sm-image"><img src="./assets/images/product/small-product/s-product-5.jpg" alt="product image thumb" /></div>
                                                </div>
                                            </div>
                                            {/*Product Details Left */}
                                        </div>
                                        <div class="col-lg-8 col-md-6">
                                            {/*Product Details Content Start*/}
                                            <div class="product-details-content">
                                                {/*Product Nav Start*/}
                                                <div class="product-nav">
                                                    <a href="#"><i class="fa fa-angle-left"></i></a>
                                                    <a href="#"><i class="fa fa-angle-right"></i></a>
                                                </div>
                                                {/*Product Nav End*/}
                                                <h2>Aliquam lobortis est turpis mauris egestas eget</h2>
                                                <div class="single-product-reviews">
                                                    <i class="fa fa-star active"></i>
                                                    <i class="fa fa-star active"></i>
                                                    <i class="fa fa-star active"></i>
                                                    <i class="fa fa-star active"></i>
                                                    <i class="fa fa-star-o"></i>
                                                    <a class="review-link" href="#">(1 customer review)</a>
                                                </div>
                                                <div class="single-product-price">
                                                    <span class="price new-price">$66.00</span>
                                                    <span class="regular-price">$77.00</span>
                                                </div>
                                                <div class="product-description">
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco,Proin lectus ipsum, gravida et mattis vulputate, tristique ut lectus</p>
                                                </div>
                                                <div class="single-product-quantity">
                                                    <form class="add-quantity" action="#">
                                                        <div class="product-quantity">
                                                            <input value="1" type="number" />
                                                        </div>
                                                        <div class="add-to-link">
                                                            <button class="btn"><i class="ion-bag"></i>add to cart</button>
                                                        </div>
                                                    </form>
                                                </div>
                                                <div class="wishlist-compare-btn">
                                                    <a href="#" class="wishlist-btn">Add to Wishlist</a>
                                                    <a href="#" class="add-compare">Compare</a>
                                                </div>
                                                <div class="product-meta">
                                                    <span class="posted-in">
                                                        Categories:
                                                        <a href="#">Accessories</a>,
                                                        <a href="#">Electronics</a>
                                                    </span>
                                                </div>
                                                <div class="single-product-sharing">
                                                    <h3>Share this product</h3>
                                                    <ul>
                                                        <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                                                        <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                                                        <li><a href="#"><i class="fa fa-google-plus"></i></a></li>
                                                        <li><a href="#"><i class="fa fa-pinterest"></i></a></li>
                                                        <li><a href="#"><i class="fa fa-instagram"></i></a></li>
                                                        <li><a href="#"><i class="fa fa-vimeo"></i></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            {/*Product Details Content End*/}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <Feedback />
                <MyFooter />
            </div>
        )
    }
}

export default Checkout
