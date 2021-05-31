import React, { Component } from 'react'
import AppBar from '../Components/AppBar'
import Footer, { MyFooter } from '../Components/Footer'

export class PhoneVerify extends Component {
    render() {
        return (
            <div>
                <AppBar/>
                <div class="reg-form">
                    <div class="container">
                        <div class="reg">
                            <h3>Register Now</h3>
                            <p>Welcome, please verify your phone so that we can provide you the best service possible.</p>
                            <form>
                                <ul>
                                    <li class="text-info">First Name: </li>
                                    <li><input type="text" value="" /></li>
                                </ul>
                                <ul>
                                    <li class="text-info">Last Name: </li>
                                    <li><input type="text" value="" /></li>
                                </ul>
                                <ul>
                                    <li class="text-info">Email: </li>
                                    <li><input type="text" value="" /></li>
                                </ul>
                                <ul>
                                    <li class="text-info">Mobile Number:</li>
                                    <li><input type="text" value="" /></li>
                                </ul>
                                <ul>
                                    <li class="text-info">One Time Password (OTP): </li>
                                    <li><input type="password" /></li>
                                </ul>
                                <input type="submit" value="Verify" />
                                <p class="click">By clicking this button, you are agree to our <a href="#">Policy Terms and Conditions.</a></p>
                            </form>
                        </div>
                    </div>
                </div>
                <MyFooter/>
            </div>
        )
    }
}

export default PhoneVerify
