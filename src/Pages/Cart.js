import React, { Component, useState } from 'react'
import MyAppBar from "../Components/AppBar"
import { MyFooter } from '../Components/Footer'
import getDoc from '../Database/getDoc'
import firebase from 'firebase'
import { uploadData } from '../Database/uploadData'
import "../css/cart.css"
import Loading from '../Components/Loading'
import login from '../Database/Login'
import { useHistory } from "react-router-dom";
import bg from "../Images/products.jpg"

const shipping = 45.00;
const cod_shipping = 75.00

function GoToUpay(props) {
    const history = useHistory();

    if (props.payment_mode === "prepaid" && props.id==="1" ) {
        return <div>
            <a href='https://pmny.in/Qrh0EfW5DlcG' >
                <div style={{ width: "135px", backgroundColor: "#0D1E29", textAlign: "center", fontWeight: "800", padding: "11px 0px", color: "white", fontSize: "12px", display: "inline-block", textDecoration: "none" }} >
                    Buy Now
                </div>
            </a>
        </div>
    }

    if (props.payment_mode === "prepaid" && props.id==="2" ) {
        return <div>
            <a href='https://pmny.in/WIvJiSJNo6B8' >
                <div style={{ width: "135px", backgroundColor: "#0D1E29", textAlign: "center", fontWeight: "800", padding: "11px 0px", color: "white", fontSize: "12px", display: "inline-block", textDecoration: "none" }} >
                    Buy Now
                </div>
            </a>
        </div>
    }

    else if (props.payment_mode === "cod") {
        return <div>
            <a href="/payment-success/cod" >
                <div style={{ width: "135px", backgroundColor: "#0D1E29", textAlign: "center", fontWeight: "800", padding: "11px 0px", color: "white", fontSize: "12px", display: "inline-block", textDecoration: "none" }} >
                    Confirm Order
                </div>
            </a>
        </div>
    }
}


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

        login_page: false,
        showUpay: false,
        buttonText: "Place Order",
        payment_mode: "prepaid",
        shipping: shipping,
    }

    componentDidMount() {

        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                this.setState({ email: user.email })
                getDoc(this.props.match.params.doc, this.props.match.params.id).then(snap => {
                    this.setState({ data: snap })
                    this.setState({ user_data: user })
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

        this.setState({ buttonText: "Checking Details Please Wait" })

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
            total: parseFloat(this.state.data.sp.replace(/,/g, '')) * this.state.quantity + this.state.shipping
        }

        uploadData(temp, this.state.user_data.photo).then(res => {
            this.setState({ showUpay: true })
        })
        return
    }

    myChangeHandler = (event) => {
        let nam = event.target.name;
        let val = event.target.value;

        if(val === "prepaid"){
            this.setState({shipping:shipping})
        }
        if(val === 'cod'){
            this.setState({shipping:cod_shipping})
        }
        this.setState({ [nam]: val });
    }

    render() {
        if (!this.state.data || !this.state.user_data) {
            return <div className="wrap" style={{ height: "100vh" }} ><Loading /></div>
        }

        return (
            <div>
                <MyAppBar />
                <div class="page-banner-section section bg-image" style={{ backgroundImage: "url("+ bg +")" }}>
                    <div class="container">
                        <div class="row">
                            <div class="col">

                                <div class="page-banner text-left">
                                    <h2 style={{color:"white"}}  >Shopping Cart</h2>
                                    <ul class="page-breadcrumb">
                                        <li><a href="index.html" style={{color:"white"}}  >Home</a></li>
                                        <li style={{color:"white"}}  >Shopping Cart</li>
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
                                                    <div class="pro-qty"><input type="number" name="quantity" value={1} /></div>
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
                                                                <input required name="name" onChange={this.myChangeHandler} type="text" placeholder="Full Name" />
                                                            </div>

                                                            <div class="col-md-6 col-12 mb-20">
                                                                <label>Email Address*</label>
                                                                <input required name="email" value={this.state.user_data.email} />
                                                            </div>

                                                            <div class="col-md-6 col-12 mb-20">
                                                                <label>Phone no*</label>
                                                                <input required name="phone" onChange={this.myChangeHandler} type="text" placeholder="Phone number" />
                                                            </div>

                                                            <div class="col-12 mb-20">
                                                                <label>Address*</label>
                                                                <input required name="address" onChange={this.myChangeHandler} type="text" placeholder="Address line" />
                                                            </div>

                                                            <div class="col-md-6 col-12 mb-20">
                                                                <label>Country*</label>
                                                                <select class="nice-select" value="India" >
                                                                    <option>India</option>
                                                                </select>
                                                            </div>

                                                            <div class="col-md-6 col-12 mb-20">
                                                                <label>Town/City*</label>
                                                                <input required name="city" onChange={this.myChangeHandler} type="text" placeholder="Town/City" />
                                                            </div>

                                                            <div class="col-md-6 col-12 mb-20">
                                                                <label>State*</label>
                                                                <input required name="my_state" onChange={this.myChangeHandler} type="text" placeholder="State" />
                                                            </div>

                                                            <div class="col-md-6 col-12 mb-20">
                                                                <label>Zip Code*</label>
                                                                <input required name="pincode" onChange={this.myChangeHandler} type="text" placeholder="Zip Code" />
                                                            </div>

                                                            <div class="col-md-6 col-12 mb-20">
                                                                <label>Payment Mode*</label>
                                                                <select required name="payment_mode" defaultValue={this.state.payment_mode} onChange={this.myChangeHandler} style={{ padding: "10px" }}>
                                                                    <option value="cod">Cash On Delivery</option>
                                                                    <option value="prepaid">Prepaid</option>
                                                                </select>
                                                            </div>
                                                        </div>

                                                        {
                                                            this.state.showUpay ? (
                                                                <GoToUpay payment_mode={this.state.payment_mode} id={this.state.data.id} />
                                                            ) : (
                                                                <input style={{ backgroundColor: "black", color: "white" }} type="submit" value={this.state.buttonText} class="place-order btn btn-lg " />
                                                            )
                                                        }
                                                    </div>
                                                </form>
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

                                                            {
                                                                this.state.payment_mode === "prepaid" ? (
                                                                    <p>Shipping Fee (Prepaid) <span>&#8377;{shipping}</span></p>
                                                                ):(
                                                                    <p>Shipping Fee (COD) <span>&#8377;{cod_shipping}</span></p>
                                                                )
                                                            }                                                            

                                                            <h4>Grand Total <span>&#8377;{parseFloat(this.state.data.sp.replace(/,/g, '')) * this.state.quantity + this.state.shipping}</span></h4>

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

                <MyFooter />
            </div>
        )
    }
}

export default Cart
