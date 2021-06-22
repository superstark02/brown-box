import React, { Component } from 'react'
import { MyFooter } from '../Components/Footer'
import AppBar from '../Components/AppBar'
import { privacy } from '../Terms/PrivacyPolicy'
import { conditions } from '../Terms/Conditions'
import { refunds } from '../Terms/Refunds'

export class TnC extends Component {
    render() {
        return (
            <div>
                <AppBar />
                <div className="wrap" >
                    <div className="desktop-ctn" >
                        <br/>
                        <p id="privacy" >
                            {privacy}
                        </p>
                    </div>
                </div>

                <div className="wrap" >
                    <div className="desktop-ctn" >
                        <br/>
                        <p id="conditions" >
                            {conditions}
                        </p>
                    </div>
                </div>

                <div className="wrap" >
                    <div className="desktop-ctn" >
                        <br/>
                        <p id="refunds" >
                            {refunds}
                        </p>
                    </div>
                </div>

                <MyFooter />

            </div>
        )
    }
}

export default TnC
