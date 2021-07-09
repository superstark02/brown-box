import React, { Component } from 'react';
import firebase from 'firebase'
import { updatePayment } from '../Database/uploadData'
import getDoc from '../Database/getDoc';
import emailjs from 'emailjs-com';


class Success extends Component {
    state = {
        status: false,
        e: null,
        name: null,
        product_name: null,
        date: null,
        amount: null,
        to: null
    }

    sendMail = (e) => {
        e.preventDefault();

        emailjs.sendForm('gmail', 'template_060u1yu', e.target, 'user_rdnQ08wROAm4vj2HIcVdc')
            .then((result) => {
                this.setState({ status: true })
            }, (error) => {
                this.setState({
                    status: <div style={{ color: "rgba(250,0,0,1)" }} >
                        Payment was success: but there was some internal error: 501, report <a href="/contact" >here</a>
                    </div>
                })
            });
    }

    componentDidMount() {
        firebase.auth().onAuthStateChanged(user => {
            if (user) {

                getDoc("Products", "1pow").then(snap => {
                    updatePayment({
                        user_id: user.uid,
                        pow: snap.name
                    }).then(res => {
                        if (res) {
                            this.setState({ status: true })
                        }
                        else {
                            this.setState({
                                status: <div style={{ color: "rgba(250,0,0,1)" }} >
                                    Payment was success: but there was some internal error: 500, report <a href="/contact" >here</a>
                                </div>
                            })
                        }
                    })
                })
            }
            else {
                alert("Please Sign In")
            }
        });
    }

    render() {
        if (this.state.status) {
            return (
                <div id="element" >
                    <form id="mail" onSubmit={this.sendMail} >
                        <input type="hidden" name="name" value={this.state.name} />
                        <input type="hidden" name="name" value={this.state.product_name} />
                        <input type="hidden" name="name" value={this.state.date} />
                        <input type="hidden" name="name" value={this.state.amount} />
                        <input type="hidden" name="name" value={this.state.to} />
                    </form>
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
                                <h4 style={{ textAlign: "center" }} class="modal-title">Awesome!</h4>
                                <div class="modal-body">
                                    <p class="text-center">Your order is placed!! Click <a href="/account" >here</a> for details.</p>
                                </div>
                                <h3 style={{ textAlign: "center" }} >
                                    Thank You <br /> For Shopping With Us<br />🙏
                                </h3>
                                <div>
                                    {this.state.status}
                                </div>
                                <div>
                                    <a href="/" className="wrap" >
                                        <button class="btn btn-success btn-block" style={{ width: "100%", margin: "30px 0px" }} data-dismiss="modal">OK</button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
        else {
            return <div  id="element"  className="wrap" ><div>Please wait. Do not refresh or reload the page</div></div>
        }
    }
}

export default Success;