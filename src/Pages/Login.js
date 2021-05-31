import React, { Component } from 'react'
import AppBar from '../Components/AppBar'
import { MyFooter } from '../Components/Footer'

export class Login extends Component {
    render() {
        return (
            <div>
                <AppBar />
                <div class="login">
                    <div class="container">
                        <div class="login-grids">
                            <div class="col-md-6 log">
                                <h3>Login</h3>
                                <div class="strip"></div>
                                <p>Welcome, please login with your Google account:</p>
                                
                            </div>
                            <div class="clearfix"></div>
                        </div>
                    </div>
                </div>
                <MyFooter/>
            </div>
        )
    }
}

export default Login
