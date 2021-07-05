import React, { Component } from 'react';
import firebase from 'firebase'
import { updatePayment, uploadData } from '../Database/uploadData'
import getDoc from '../Database/getDoc';

class Success extends Component {
    state = {
        status: false
    }

    componentDidMount() {
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                getDoc("Procudts", "1pow").then(snap => {
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
        });
    }

    render() {
        return (
            <div>
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
                                <p class="text-center">Your order is placed!! Check your email for details.</p>
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
}

export default Success;