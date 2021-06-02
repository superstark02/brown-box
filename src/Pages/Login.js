import React, { Component } from 'react'
import AppBar from '../Components/AppBar'
import { MyFooter } from '../Components/Footer'
import "./Login.css"

export class Login extends Component {
    render() {
        return (
            <div>
                <AppBar />

                <div class="container bootstrap snippets bootdey">
                    <div class="row">
                        <div class="profile-nav col-md-3">
                            <div class="panel">
                                <div class="user-heading round">
                                    <a href="#">
                                        <img src="https://bootdey.com/img/Content/avatar/avatar3.png" alt="" />
                                    </a>
                                    <h1>Camila Smith</h1>
                                    <p>deydey@theEmail.com</p>
                                </div>

                                <ul class="nav nav-pills nav-stacked">
                                    <li class="active"><a href="#"> <i class="fa fa-user"></i> Profile</a></li>
                                    {/*<li><a href="#"> <i class="fa fa-calendar"></i> Recent Activity <span class="label label-warning pull-right r-activity">9</span></a></li>
                                    <li><a href="#"> <i class="fa fa-edit"></i> Edit profile</a></li>*/}
                                </ul>
                            </div>
                        </div>

                        <div class="profile-info col-md-9">

                            <div class="panel">
                                <div class="bio-graph-heading">
                                    Team buying saves money
                                </div>
                                <div class="panel-body bio-graph-info">
                                    <h1>Personal Info</h1>
                                    <div class="row">
                                        <div class="bio-row">
                                            <p>
                                                <span>First Name </span>:
                                                <input id="address-line2" id="first-name" placeholder="Name"
                                                    class="input-xlarge" />
                                            </p>
                                        </div>
                                        <div class="bio-row">
                                            <p><span>Last Name </span>: <input id="last-name" type="text"
                                                    class="input-xlarge" /></p>
                                        </div>
                                        <div class="bio-row">
                                            <p><span>Email </span>: <input id="email" type="email"
                                                    class="input-xlarge" /></p>
                                        </div>
                                        <div class="bio-row">
                                            <p><span>Mobile </span>: <input id="phone" name="address-line" type="text"
                                                    class="input-xlarge" /></p>
                                        </div>
                                    </div>
                                </div>

                                <div class="panel-body bio-graph-info">

                                    <div class="control-group">
                                        <label class="control-label">Address Line</label>
                                        <div class="controls">
                                            <input id="address-line2" name="address-line" type="text" placeholder="address line 2"
                                                class="input-xlarge" />
                                            <p class="help-block">Apartment, suite , unit, building, floor, etc.</p>
                                        </div>
                                    </div>

                                    <div class="control-group">
                                        <label class="control-label">City / Town</label>
                                        <div class="controls">
                                            <input id="city" name="city" type="text" placeholder="city" class="input-xlarge" />
                                            <p class="help-block"></p>
                                        </div>
                                    </div>

                                    <div class="control-group">
                                        <label class="control-label">State / Province / Region</label>
                                        <div class="controls">
                                            <input id="region" name="region" type="text" placeholder="state / province / region"
                                                class="input-xlarge" />
                                            <p class="help-block"></p>
                                        </div>
                                    </div>

                                    <div class="control-group">
                                        <label class="control-label">Zip / Postal Code</label>
                                        <div class="controls">
                                            <input id="postal-code" name="postal-code" type="text" placeholder="zip or postal code"
                                                class="input-xlarge" />
                                            <p class="help-block"></p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <MyFooter />
            </div >
        )
    }
}

export default Login
