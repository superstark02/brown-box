import React from 'react'
import { FaWindowClose } from 'react-icons/fa'
import AppBar from '../Components/AppBar'
import { MyFooter } from '../Components/Footer'
import './Cart.css'
import Dialog from '@material-ui/core/Dialog';
import logo from "../Images/bblogo.jfif"

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

export function Cart() {

    const handleClose = () => {
        setOpen(false)
    };

    const [name, setName] = React.useState('Mehul')
    const [open, setOpen] = React.useState(false)

    async function displayRazorpay() {
        const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js')

        if (!res) {
            alert('Razorpay SDK failed to load. Are you online?')
            return
        }

        const data = await fetch('https://us-central1-pine-valley-7820d.cloudfunctions.net/widgets/razorpay', { method: 'POST' }).then((t) =>
            t.json()
        )

        console.log(data)

        const options = {
            key: __DEV__ ? 'rzp_test_XG2R08Y3JGV5fg' : 'rzp_test_XG2R08Y3JGV5fg',
            currency: data.currency,
            amount: data.amount.toString(),
            order_id: data.id,
            name: 'Donation',
            description: 'Thank you for nothing. Please give us some money',
            image: {logo},
            handler: function (response) {
                setOpen(true)
            },
            prefill: {
                name,
                email: 'sdfdsjfh2@ndsfdf.com',
                phone_number: '9899999999'
            }
        }
        const paymentObject = new window.Razorpay(options)
        paymentObject.open()
    }

    return (
        <div>
            <AppBar />
            <div class="check">
                <div class="container">
                    <div class="col-md-3 cart-total">
                        <div class="price-details">
                            <h3>Price Details</h3>
                            <span>Total</span>
                            <span class="total1">6200.00</span>
                            <span>Discount</span>
                            <span class="total1">10%(Festival Offer)</span>
                            <span>Delivery Charges</span>
                            <span class="total1">150.00</span>
                            <div class="clearfix"></div>
                        </div>
                        <hr class="featurette-divider" />
                        <ul class="total_price">
                            <li class="last_price"> <h4>TOTAL</h4></li>
                            <li class="last_price"><span>6150.00</span></li>
                            <div class="clearfix"> </div>
                        </ul>
                        <div class="clearfix"></div>
                        <a class="order" onClick={displayRazorpay} href="#">Place Order</a>
                    </div>
                    <div class="col-md-9 cart-items">
                        <h1>My Shopping Bag (2)</h1>
                        <div class="cart-header">
                            <div class="close1"><FaWindowClose /></div>
                            <div class="cart-sec simpleCart_shelfItem">
                                <div class="cart-item cyc">
                                    <img src="https://cdn.shopify.com/s/files/1/0057/8938/4802/products/stone-grenade-rtl-1_720x.png?v=1613743977" class="img-responsive" alt="" />
                                </div>
                                <div class="cart-item-info">
                                    <ul class="qty">
                                        <li><p>Size : 9 US</p></li>
                                        <li><p>Qty : 1</p></li>
                                        <li><p>Price each : $190</p></li>
                                    </ul>
                                    <div class="delivery">
                                        <p>Service Charges : Rs.190.00</p>
                                        <span>Delivered in 2-3 bussiness days</span>
                                        <div class="clearfix"></div>
                                    </div>
                                </div>
                                <div class="clearfix"></div>

                            </div>
                        </div>
                    </div>
                    <div class="clearfix"> </div>
                </div>
            </div>

            <Dialog onClose={handleClose} style={{backgroundColor:"transparent"}} open={open}>
                <div style={{background:"transparent"}} >
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
                            <h3 style={{textAlign:"center"}} >
                                Thank You <br/> For Shopping With Us<br/>🙏
                            </h3>
                            <div class="modal-footer">
                                <button class="btn btn-success btn-block" onClick={() => { setOpen(false) }} data-dismiss="modal">OK</button>
                            </div>
                        </div>
                    </div>
                </div>
            </Dialog>
            <MyFooter />
        </div>
    )
}

export default Cart
