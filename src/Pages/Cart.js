import React from 'react'
import firebase from 'firebase'
import AppBar from '../Components/AppBar'
import { MyFooter } from '../Components/Footer'
import './Cart.css'
import Dialog from '@material-ui/core/Dialog';
import Loading from '../Components/Loading'
import getDoc from '../Database/getDoc'
import { uploadData } from '../Database/uploadData'
import sendMail from '../Database/sendMail'

const dev = "http://localhost:1337/razorpay";
const production = "https://us-central1-pine-valley-7820d.cloudfunctions.net/pay/razorpay";
const shipping = 45

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
        image: { logo },
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

export class Cart extends React.Component {

    state = {
        product: "Product Name",

        open: false,
        data: null,

        name: null,
        phone: null,
        address: null,
        city: null,
        my_state: null,
        pincode: null,

        product_data: null,
        quantity: 1
    }

    handleClose = () => {
        this.setState({ open: false })
    };

    componentDidMount() {
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                getDoc("Users", user.uid).then(data => {
                    this.setState({ data: data })
                    this.setState({ name: data.name })
                    this.setState({ email: data.email })
                    this.setState({ phone: data.phone })
                    this.setState({ address: data.address })
                    this.setState({ city: data.city })
                    this.setState({ my_state: data.state })
                    this.setState({ pincode: data.pincode })
                })

                getDoc("Products", "1").then(snap => {
                    this.setState({product_data:snap})
                })

            } else {
                alert("Please sign in to continue. Or contact support")
            }
        });
    }

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
            uid: this.state.data.uid,
            product: this.state.product,
            e: e,
            total: parseFloat(this.state.product_data.sp)*this.state.quantity + shipping
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
            image: res.image,
            name: 'Brown Box',
            description: 'Thank you for choosing us',
            handler: (response) => {
                uploadData(user_data, response, this.state.data.photo).then(res => {
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
        if (!this.state.data || !this.state.product_data) {
            return <Loading />
        }

        return (
            <div>
                <AppBar />
                <form onSubmit={this.check_details} >
                    <input type="hidden" name="product_name" value="Product name" />
                    <input type="hidden" name="shipping" value="100" />

                    <div class="check">
                        <div class="container">
                            <div class="col-md-3 cart-total">
                                <div class="price-details">
                                    <h3>Price Details</h3>
                                    <span>Product</span>
                                    <span class="total1">₹{this.state.product_data.sp}</span>
                                    <span>Quantity</span>
                                    <span class="total1">{this.state.quantity}</span>
                                    <span>Save</span>
                                    <span class="total1">{this.state.product_data.discount}(Team Buy)</span>
                                    <span>Shipping</span>
                                    <span class="total1">₹{shipping}</span>
                                    <span>Payment Mode</span>
                                    <span class="total1">Online</span>
                                    <div class="clearfix"></div>
                                </div>
                                <hr class="featurette-divider" />
                                <ul class="total_price">
                                    <li class="last_price"> <h4>TOTAL</h4></li>
                                    <li class="last_price"><span>₹{parseFloat(this.state.product_data.sp)*this.state.quantity + shipping}</span></li>
                                    <div class="clearfix"> </div>
                                </ul>
                                <div class="clearfix"></div>
                                <input type="submit" class="std-btn" value="Place Order" href="#" />
                            </div>
                            <div class="col-md-9 cart-items">
                                <h1>Checkout</h1>
                                <div class="cart-header">
                                    {/*<div class="close1"><FaWindowClose /></div>*/}
                                    <div class="cart-sec simpleCart_shelfItem">
                                        <div class="cart-item cyc">
                                            <img src={this.state.product_data.image} class="img-responsive" alt="" />
                                        </div>
                                        <div class="cart-item-info">
                                            <ul class="qty">
                                                <li>
                                                    <p>
                                                        Qty : 
                                                        <select className="qt" 
                                                            onChange={(e)=>{this.setState({quantity:e.target.value})}} >
                                                            <option value="1">1</option>
                                                            <option value="2">2</option>
                                                            <option value="3">3</option>
                                                            <option value="4">4</option>
                                                            <option value="5">5</option>
                                                            <option value="6">6</option>
                                                            <option value="7">7</option>
                                                            <option value="8">8</option>
                                                        </select>
                                                    </p>
                                                </li>
                                                <li><p>Price each : ₹{this.state.product_data.sp}</p></li>
                                            </ul>
                                            <div class="delivery">
                                                <p>No hidden charges</p>
                                                <span>Delivered in 3-4 bussiness days</span>
                                                <div class="clearfix"></div>
                                            </div>
                                        </div>
                                        <div>
                                            Sorry, cash on delivery ( COD ) is not available. We are working on that.
                                        </div>
                                        <div class="clearfix"></div>

                                    </div>
                                </div>

                                <div class="panel-body bio-graph-info" style={{ marginTop: "50px" }} >
                                    <h1>Shipping Details</h1>

                                    <div class="panel-body bio-graph-info">
                                        <h1>Personal Info</h1>
                                        <div class="row">
                                            <div class="bio-row">
                                                <p>
                                                    <span>Name </span>
                                                    <input required name="name" onChange={this.myChangeHandler} defaultValue={this.state.data.name}
                                                        class="input-xlarge" />
                                                </p>
                                            </div>
                                            <div class="bio-row">
                                                <p><span>Email </span> <input required onChange={this.myChangeHandler} name="email" type="email" defaultValue={this.state.data.email}
                                                    class="input-xlarge" /></p>
                                            </div>
                                            <div class="bio-row">
                                                <p><span>Mobile </span> <input required onChange={this.myChangeHandler} name="phone" type="text" defaultValue={this.state.data.phone}
                                                    class="input-xlarge" /></p>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="control-group">
                                        <label class="control-label">Address Line</label>
                                        <div class="controls">
                                            <input required name="address" defaultValue={this.state.data.address} onChange={this.myChangeHandler} type="text"
                                                class="input-xlarge" />
                                            <p class="help-block">Apartment, suite , unit, building, floor, etc.</p>
                                        </div>
                                    </div>

                                    <div class="control-group">
                                        <label class="control-label">City / Town</label>
                                        <div class="controls">
                                            <input required name="city" onChange={this.myChangeHandler} defaultValue={this.state.data.city} type="text" placeholder="City" class="input-xlarge" />
                                            <p class="help-block"></p>
                                        </div>
                                    </div>

                                    <div class="control-group">
                                        <label class="control-label">State / Province / Region</label>
                                        <div class="controls">
                                            <input required name="my_state" onChange={this.myChangeHandler} defaultValue={this.state.data.state} type="text" placeholder="State / Province / Region"
                                                class="input-xlarge" />
                                            <p class="help-block"></p>
                                        </div>
                                    </div>

                                    <div class="control-group">
                                        <label class="control-label">Zip / Postal Code</label>
                                        <div class="controls">
                                            <input required name="pincode" onChange={this.myChangeHandler} defaultValue={this.state.data.pincode} type="text" placeholder="Zip or Postal Code"
                                                class="input-xlarge" />
                                            <p class="help-block"></p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div class="clearfix"> </div>
                        </div>
                    </div>
                </form>

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
                                    <h4 class="modal-title">Awesome!</h4>
                                </div>
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
