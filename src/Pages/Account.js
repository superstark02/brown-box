import React, { Component } from 'react'
import MyAppBar from "../Components/AppBar"
import { MyFooter } from '../Components/Footer'
import getDoc from '../Database/getDoc'
import { getSubCollection } from '../Database/getCollection'
import firebase from 'firebase'
import { useHistory } from "react-router-dom";
import LoginPage from './LoginPage'

function Redirect() {
    const history = useHistory();

    const handleRoute = () => {
        firebase.auth().signOut().then(() => {
            history.push("/");
        }).catch((error) => {
            // An error happened.
        });
    }

    return (
        <a href="" onClick={handleRoute} ><i class="fa fa-sign-out"></i> Logout</a>
    )
}

export class Account extends Component {

    state = {
        user_data: null,
        orders: null,
        login: false
    }

    componentDidMount() {
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                getDoc("Users", user.uid).then(user_data => {
                    this.setState({ user_data: user_data })
                })

                getSubCollection("Users", user.uid, "Orders").then(item => {
                    this.setState({ orders: item })
                })
            } else {
                this.setState({ login: true })
            }
        });
    }

    logout = () => {
        firebase.auth().signOut().then(() => {
            Redirect();
        }).catch((error) => {
            // An error happened.
        });
    }

    render() {
        if (this.state.user_data) {
            return (
                <div>
                    <MyAppBar />
                    <div class="page-banner-section section bg-image" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1518655048521-f130df041f66?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80)" }}>
                        <div class="container">
                            <div class="row">
                                <div class="col">
                                    <div class="page-banner text-left">
                                        <h2>My Account</h2>
                                        <ul class="page-breadcrumb">
                                            <li><a href="index.html">Home</a></li>
                                            <li>My Account</li>
                                        </ul>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Page Banner Section End */}
                    {/*My Account section start*/}
                    <div class="my-account-section section pt-90 pt-lg-70 pt-md-60 pt-sm-50 pt-xs-45  pb-100 pb-lg-80 pb-md-70 pb-sm-60 pb-xs-50">
                        <div class="container">
                            <div class="row">

                                <div class="col-12">
                                    <div class="row">
                                        {/* My Account Tab Menu Start */}
                                        <div class="col-lg-3 col-12">
                                            <div class="myaccount-tab-menu nav" role="tablist">
                                                <a href="#dashboad" class="active" data-toggle="tab">
                                                    <div>
                                                        <i class="fa fa-dashboard"></i>
                                                        Dashboard
                                                    </div>
                                                </a>

                                                <a href="#orders" data-toggle="tab">
                                                    <div>
                                                        <i class="fa fa-cart-arrow-down"></i> Orders
                                                    </div>
                                                </a>

                                                <a href="#address-edit" data-toggle="tab">
                                                    <div>
                                                        <i class="fa fa-map-marker"></i>
                                                        Address
                                                    </div>
                                                </a>

                                                <Redirect />
                                            </div>
                                        </div>
                                        {/* My Account Tab Menu End */}

                                        {/* My Account Tab Content Start */}
                                        <div class="col-lg-9 col-12">
                                            <div class="tab-content" id="myaccountContent">
                                                {/* Single Tab Content Start */}
                                                <div class="tab-pane fade show active" id="dashboad" role="tabpanel">
                                                    <div class="myaccount-content">
                                                        <h3>Dashboard</h3>

                                                        <div class="welcome mb-20">
                                                            <p>Hello, <strong>{this.state.user_data.name}</strong></p>
                                                        </div>

                                                        <p class="mb-0">From your account dashboard. you can easily check &amp; view your
                                                            recent orders, manage your shipping and billing addresses and edit your
                                                            password and account details.</p>
                                                    </div>
                                                </div>
                                                {/* Single Tab Content End */}

                                                {/* Single Tab Content Start */}
                                                <div class="tab-pane fade" id="orders" role="tabpanel">
                                                    <div class="myaccount-content">
                                                        <h3>Orders</h3>

                                                        <div class="myaccount-table table-responsive text-center">
                                                            <table class="table table-bordered">
                                                                <thead class="thead-light">
                                                                    <tr>
                                                                        <th>No</th>
                                                                        <th>Name</th>
                                                                        <th>Date</th>
                                                                        <th>Status</th>
                                                                        <th>Payment</th>
                                                                        <th>Total (Rs.)</th>
                                                                    </tr>
                                                                </thead>

                                                                {
                                                                    this.state.orders ? (
                                                                        this.state.orders.map((item, index) => {
                                                                            if (item.payment) {
                                                                                return (
                                                                                    <tbody>
                                                                                        <tr>
                                                                                            <td>{index + 1}</td>
                                                                                            <td>{item.product}</td>
                                                                                            <td>{item.date}</td>
                                                                                            <td>Pending</td>
                                                                                            <td>Success</td>
                                                                                            <td>{item.amount / 100}</td>
                                                                                        </tr>
                                                                                    </tbody>
                                                                                )
                                                                            }
                                                                        })
                                                                    ) : (
                                                                        <div>
                                                                            No orders yet
                                                                        </div>
                                                                    )
                                                                }
                                                            </table>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Single Tab Content Start */}
                                                <div class="tab-pane fade" id="address-edit" role="tabpanel">
                                                    <div class="myaccount-content">
                                                        <h3>Billing Address</h3>

                                                        <address>
                                                            <p><strong>{this.state.user_data.name}</strong></p>
                                                            <p>
                                                                {this.state.user_data.address}<br />
                                                                {this.state.user_data.city} <br />
                                                                {this.state.user_data.state} <br />
                                                                {this.state.user_data.pincode}
                                                            </p>
                                                            <p>Mobile: {this.state.user_data.phone}</p>
                                                        </address>

                                                        <p>
                                                            <b>
                                                                You can set your address and mobile while placing an order.
                                                            </b>
                                                        </p>
                                                    </div>
                                                </div>
                                                {/* Single Tab Content End */}

                                                {/* Single Tab Content End */}
                                            </div>
                                        </div>
                                        {/* My Account Tab Content End */}
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>
                    <MyFooter />
                </div>
            )
        }
        if (this.state.login) {
            return (
                <LoginPage />
            )
        }
        else {
            return (
                <div></div>
            )
        }
    }
}

export default Account
