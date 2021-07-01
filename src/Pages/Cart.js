import React, { Component } from 'react'
import MyAppBar from "../Components/AppBar"
import { MyFooter } from '../Components/Footer'
import getDoc from '../Database/getDoc'
import firebase from 'firebase'
import sendMail from '../Database/sendMail'
import { uploadData } from '../Database/uploadData'
import Dialog from '@material-ui/core/Dialog';
import "../css/cart.css"
import Loading from '../Components/Loading'
import LoginPage from '../Pages/LoginPage'
import login from '../Database/Login'

const dev = "http://localhost:1337/razorpay";
const production = "https://us-central1-pine-valley-7820d.cloudfunctions.net/pay/razorpay";

const shipping = 45.00;

function loadScript(src) {
    return new Promise((resolve) => {
        const script = document.createElement('script')
        script.src = src
        script.onload = () => {
            resolve(true)
        }
        script.onerror = () => {
            resolve(false)
        }
        document.body.appendChild(script)
    })
}

const __DEV__ = document.domain === 'localhost'

/*async function displayRazorpay(user_data) {
    const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js')
    if (!res) {
        alert('Razorpay SDK failed to load. Are you online?')
        return
    }
    const data = await fetch('https://us-central1-pine-valley-7820d.cloudfunctions.net/widgets/razorpay', { method: 'POST' }).then((t) =>
        t.json()
    )
    const options = {
        key: __DEV__ ? 'rzp_test_XG2R08Y3JGV5fg' : 'rzp_test_XG2R08Y3JGV5fg',
        currency: data.currency,
        amount: data.amount.toString(),
        order_id: data.id,
        name: 'Donation',
        description: 'Thank you for nothing. Please give us some money',
        handler: function (response) {
            uploadData(user_data, response)
            return true
        },
        prefill: {
            name: user_data.name,
            email: user_data.email,
            phone_number: user_data.phone
        }
    }
    const paymentObject = new window.Razorpay(options)
    paymentObject.open()
}*/

export class Cart extends Component {

    state = {
        data: null,
        user_data: null,
        quantity: 1,
        open: false,

        name: null,
        phone: null,
        email: null,
        address: null,
        city: null,
        my_state: null,
        pincode: null,

        login_page: false
    }

    componentDidMount() {

        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                getDoc("Users", user.uid).then(data => {
                    this.setState({ user_data: data })
                    this.setState({ name: data.name })
                    this.setState({ email: data.email })
                    this.setState({ phone: data.phone })
                    this.setState({ address: data.address })
                    this.setState({ city: data.city })
                    this.setState({ my_state: data.state })
                    this.setState({ pincode: data.pincode })
                })

                getDoc(this.props.match.params.doc, this.props.match.params.id).then(snap => {
                    this.setState({ data: snap })
                })

            } else {
                login()
            }
        });
    }

    handleClose = () => {
        this.setState({ open: false })
    };

    check_details = (e) => {
        e.preventDefault();

        var temp = {
            name: this.state.name,
            phone: this.state.phone,
            email: this.state.email,
            address: this.state.address,
            city: this.state.city,
            state: this.state.my_state,
            pincode: this.state.pincode,
            uid: this.state.user_data.uid,
            product: this.state.data.name,
            e: e,
            total: parseFloat(this.state.data.sp.replace(/,/g, '')) * this.state.quantity + shipping
        }

        this.displayRazorpay(temp).then(res => {
            this.setState({ open: res })
        })
        return
    }

    myChangeHandler = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({ [nam]: val });
    }


    displayRazorpay = async (user_data) => {
        const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js');

        if (!res) {
            alert('Razorpay SDK failed to load. Are you online?')
            return
        }

        let send_data = {
            amount: user_data.total
        }

        const data = await fetch(production, {
            method: 'POST',
            body: JSON.stringify(send_data),
            headers: { 'Content-Type': 'application/json' }
        }).then((t) =>
            t.json()
        )

        const options = {
            key: __DEV__ ? 'rzp_test_0NgOX9f0NSb8Cy' : 'rzp_test_0NgOX9f0NSb8Cy',
            currency: data.currency,
            amount: data.amount.toString(),
            order_id: data.id,
            name: 'Brown Box',
            description: 'Thank you for choosing us',
            handler: (response) => {
                uploadData(user_data, response, this.state.user_data.photo).then(res => {
                    sendMail(user_data.e);
                    this.setState({ open: true });
                })
            },
            prefill: {
                name: user_data.name,
                email: user_data.email,
                phone_number: user_data.phone
            }
        }

        const paymentObject = new window.Razorpay(options)
        paymentObject.open()
    }

    render() {
        if (!this.state.data) {
            return <div className="wrap" style={{height:"100vh"}} ><Loading/></div>
        }
        
        return (
            <div>
                <MyAppBar />
                <div class="page-banner-section section bg-image" style={{ backgroundImage: "url(https://image.freepik.com/free-photo/up-date-technology-top-view-diverse-personal-accessory_194236-8.jpg)" }}>
                    <div class="container">
                        <div class="row">
                            <div class="col">

                                <div class="page-banner text-left">
                                    <h2>Shopping Cart</h2>
                                    <ul class="page-breadcrumb">
                                        <li><a href="index.html">Home</a></li>
                                        <li>Shopping Cart</li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <div class="cart-section section pt-90 pt-lg-70 pt-md-60 pt-sm-50 pt-xs-45  pb-70 pb-lg-50 pb-md-40 pb-sm-30 pb-xs-20">
                    <div class="container">
                        <div class="row">

                            <div class="col-12">
                                {/* Cart Table */}
                                <div class="cart-table table-responsive mb-30">
                                    <table class="table">
                                        <thead>
                                            <tr>
                                                <th class="pro-thumbnail">Image</th>
                                                <th class="pro-title">Product</th>
                                                <th class="pro-price">Price</th>
                                                <th class="pro-quantity">Quantity</th>
                                                <th class="pro-subtotal">Total</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td class="pro-thumbnail"><a href="#"><img src={this.state.data.image} alt="Product" /></a></td>
                                                <td class="pro-title"><a href="#">{this.state.data.name}</a></td>
                                                <td class="pro-price"><span>&#8377;{this.state.data.sp}</span></td>
                                                <td class="pro-quantity">
                                                    <div class="pro-qty">
                                                        <input onChange={(e) => { this.setState({ quantity: e.target.value }) }} type="number" defaultValue="1" />
                                                    </div>
                                                </td>
                                                <td class="pro-subtotal"><span>&#8377;{this.state.quantity * parseFloat(this.state.data.sp.replace(/,/g, ''))}</span></td>

                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <div class="row">

                                    <div class="col-12">
                                        <div class="row row-40">
                                            <div class="col-lg-7">
                                                <form class="checkout-form" onSubmit={this.check_details} >
                                                    {/* Billing Address */}
                                                    <div id="billing-form" class="mb-10">
                                                        <h4 class="checkout-title">Billing Address</h4>

                                                        <div class="row">

                                                            <div class="col-md-6 col-12 mb-20">
                                                                <label>Full Name*</label>
                                                                <input required name="name" onChange={this.myChangeHandler} type="text" defaultValue={this.state.user_data.name} placeholder="First Name" />
                                                            </div>

                                                            <div class="col-md-6 col-12 mb-20">
                                                                <label>Email Address*</label>
                                                                <input required name="email" onChange={this.myChangeHandler} type="email" defaultValue={this.state.user_data.email} placeholder="Email Address" />
                                                            </div>

                                                            <div class="col-md-6 col-12 mb-20">
                                                                <label>Phone no*</label>
                                                                <input required name="phone" onChange={this.myChangeHandler} type="text" defaultValue={this.state.user_data.phone} placeholder="Phone number" />
                                                            </div>

                                                            <div class="col-12 mb-20">
                                                                <label>Address*</label>
                                                                <input required name="address" onChange={this.myChangeHandler} type="text" defaultValue={this.state.user_data.address} placeholder="Address line" />
                                                            </div>

                                                            <div class="col-md-6 col-12 mb-20">
                                                                <label>Country*</label>
                                                                <select class="nice-select" value="India" >
                                                                    <option>India</option>
                                                                </select>
                                                            </div>

                                                            <div class="col-md-6 col-12 mb-20">
                                                                <label>Town/City*</label>
                                                                <input required name="city" onChange={this.myChangeHandler} defaultValue={this.state.user_data.city} type="text" placeholder="Town/City" />
                                                            </div>

                                                            <div class="col-md-6 col-12 mb-20">
                                                                <label>State*</label>
                                                                <input required name="my_state" onChange={this.myChangeHandler} type="text" defaultValue={this.state.user_data.my_state} placeholder="State" />
                                                            </div>

                                                            <div class="col-md-6 col-12 mb-20">
                                                                <label>Zip Code*</label>
                                                                <input required name="pincode" onChange={this.myChangeHandler} value={this.state.user_data.pincode} defaultValue={this.state.user_data.pincode} type="text" placeholder="Zip Code" />
                                                            </div>
                                                        </div>
                                                        <input style={{ backgroundColor: "black", color: "white" }} type="submit" value="Place Order" class="place-order btn btn-lg btn-round" />
                                                    </div>
                                                </form>

                                                {/* Shipping Address */}
                                                <div id="shipping-form">
                                                    <h4 class="checkout-title">Shipping Address</h4>

                                                    <div class="row">

                                                        <div class="col-md-6 col-12 mb-20">
                                                            <label>Full Name*</label>
                                                            <input name="name" onChange={this.myChangeHandler} type="text" value={this.state.user_data.name} defaultValue={this.state.user_data.name} placeholder="First Name" />
                                                        </div>

                                                        <div class="col-md-6 col-12 mb-20">
                                                            <label>Email Address*</label>
                                                            <input name="email" onChange={this.myChangeHandler} value={this.state.user_data.email} defaultValue={this.state.user_data.email} type="email" placeholder="Email Address" />
                                                        </div>

                                                        <div class="col-md-6 col-12 mb-20">
                                                            <label>Phone no*</label>
                                                            <input name="phone" onChange={this.myChangeHandler} value={this.state.user_data.phone} defaultValue={this.state.user_data.phone} type="text" placeholder="Phone number" />
                                                        </div>

                                                        <div class="col-12 mb-20">
                                                            <label>Address*</label>
                                                            <input name="address" onChange={this.myChangeHandler} value={this.state.user_data.address} type="text" defaultValue={this.state.user_data.address} placeholder="Address line" />
                                                        </div>

                                                        <div class="col-md-6 col-12 mb-20">
                                                            <label>Country*</label>
                                                            <select class="nice-select" value="India" >
                                                                <option>India</option>
                                                            </select>
                                                        </div>

                                                        <div class="col-md-6 col-12 mb-20">
                                                            <label>Town/City*</label>
                                                            <input name="city" onChange={this.myChangeHandler} value={this.state.user_data.city} defaultValue={this.state.user_data.city} type="text" placeholder="Town/City" />
                                                        </div>

                                                        <div class="col-md-6 col-12 mb-20">
                                                            <label>State*</label>
                                                            <input name="my_state" onChange={this.myChangeHandler} value={this.state.user_data.my_state} type="text" defaultValue={this.state.user_data.my_state} placeholder="State" />
                                                        </div>

                                                        <div class="col-md-6 col-12 mb-20">
                                                            <label>Zip Code*</label>
                                                            <input name="pincode" onChange={this.myChangeHandler} value={this.state.user_data.picode} type="text" defaultValue={this.state.user_data.pincode} placeholder="Zip Code" />
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
                                                                <li>{this.state.data.name} X {this.state.quantity} <span>&#8377;{parseFloat(this.state.data.sp.replace(/,/g, '')) * this.state.quantity}</span></li>
                                                            </ul>

                                                            <p>Sub Total <span>&#8377;{this.state.data.sp}</span></p>
                                                            <p>Shipping Fee <span>&#8377;{shipping}</span></p>

                                                            <p>Sorry, Cash On Delivery is not available at the moment. We are working on that.</p>

                                                            <h4>Grand Total <span>&#8377;{parseFloat(this.state.data.sp.replace(/,/g, '')) * this.state.quantity + shipping}</span></h4>

                                                        </div>
                                                    </div>

                                                </div>
                                            </div>

                                        </div>

                                        {/*<div class="single-method">
                                                    <input type="checkbox" id="accept_terms" />
                                                    <label for="accept_terms">I’ve read and accept the terms & conditions</label>
                                                </div>*/}
                                        {/* Calculate Shipping */}
                                        {/*<div class="calculate-shipping">
                                            <h4>Calculate Shipping</h4>
                                            <form action="#">
                                                <div class="row">
                                                    <div class="col-md-6 col-12 mb-25">
                                                        <select class="nice-select">
                                                            <option>Bangladesh</option>
                                                            <option>China</option>
                                                            <option>country</option>
                                                            <option>India</option>
                                                            <option>Japan</option>
                                                        </select>
                                                    </div>
                                                    <div class="col-md-6 col-12 mb-25">
                                                        <select class="nice-select">
                                                            <option>Dhaka</option>
                                                            <option>Barisal</option>
                                                            <option>Khulna</option>
                                                            <option>Comilla</option>
                                                            <option>Chittagong</option>
                                                        </select>
                                                    </div>
                                                    <div class="col-md-6 col-12 mb-25">
                                                        <input type="text" placeholder="Postcode / Zip" />
                                                    </div>
                                                    <div class="col-md-6 col-12 mb-25">
                                                        <button class="btn">Estimate</button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                        {/* Discount Coupon 
                                        
                                        <div class="discount-coupon">
                                            <h4>Discount Coupon Code</h4>
                                            <form action="#">
                                                <div class="row">
                                                    <div class="col-md-6 col-12 mb-25">
                                                        <input type="text" placeholder="Coupon Code" />
                                                    </div>
                                                    <div class="col-md-6 col-12 mb-25">
                                                        <button class="btn">Apply Code</button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>*/}
                                    </div>

                                    {/* Cart Summary */}
                                    {/*<div class="col-lg-6 col-12 mb-30 d-flex">
                                        <div class="cart-summary">
                                            <div class="cart-summary-wrap">
                                                <h4>Cart Summary</h4>
                                                <p>Sub Total <span>&#8377;{this.state.quantity * parseFloat(this.state.data.sp.replace(/,/g, ''))}</span></p>
                                                <p>Shipping Cost <span>&#8377;{shipping}</span></p>
                                                <h2>Grand Total <span>&#8377;{this.state.quantity * parseFloat(this.state.data.sp.replace(/,/g, '')) + shipping}</span></h2>
                                            </div>
                                            <div class="cart-summary-button">
                                                <button class="btn">Checkout</button>
                                            </div>
                                        </div>
                                    </div>*/}

                                </div>

                            </div>

                        </div>
                    </div>
                </div>

                <Dialog onClose={this.handleClose} style={{ backgroundColor: "transparent" }} open={this.state.open}>
                    <div style={{ background: "transparent" }} >
                        <div class="modal-dialog modal-confirm">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <div className="wrap" >
                                        <div class="icon-box">
                                            <i class="material-icons">&#xE876;</i>
                                        </div>
                                    </div>
                                    
                                </div>
                                <h4 style={{textAlign:"center"}} class="modal-title">Awesome!</h4>
                                <div class="modal-body">
                                    <p class="text-center">Your order is placed!! Check your email for details.</p>
                                </div>
                                <h3 style={{ textAlign: "center" }} >
                                    Thank You <br /> For Shopping With Us<br />🙏
                                </h3>
                                <div class="modal-footer">
                                    <a href="/" >
                                        <button class="btn btn-success btn-block" data-dismiss="modal">OK</button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </Dialog>

                <MyFooter />
            </div>
        )
    }
}

export default Cart
