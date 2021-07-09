import React, { Component } from 'react'
import MyAppBar from "../Components/AppBar"
import { MyFooter } from '../Components/Footer'
import login from '../Database/Login'


export default class LoginPage extends Component {
    render() {
        return (
            <div>
                <MyAppBar />

                <div>
                    <div class="page-banner-section section bg-image" style={{ backgroundImage: "url(https://thegadgetflow.com/wp-content/uploads/2021/02/Gaming-Gadgets-Category-Large.jpg)" }} >
                        <div class="container">
                            <div class="row">
                                <div class="col">
                                    <div class="page-banner text-left" style={{ color: "white" }} >
                                        <h2>Login / Register</h2>
                                        <ul class="page-breadcrumb" style={{ color: "white" }}  >
                                            <li><a href="/" style={{ color: "white" }}  >Home</a></li>
                                            <li style={{ color: "white" }}  >Login / Register</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



                <div class=" section pt-90     pb-70 pb-lg-50 ">
                    <div class="container">
                        <div class="row">
                            <div class="wrap" style={{width:"90%"}} >
                                <div class="customer-login-register"  >
                                    <div class="form-login-title">
                                        <h2>Login With Google</h2>
                                    </div>
                                    <div class="login-form">
                                        <div>
                                            <button className="wrap" style={{border:"none", background: "none"}} onClick={login} >
                                                <img width="200px" src="https://miro.medium.com/max/1192/1*f5xLXkJMq8sMk79B6O8WCA.png" />
                                            </button>
                                        </div>
                                    </div>
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