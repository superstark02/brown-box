import React, { Component } from 'react'
import AppBar from "../Components/AppBar"
import { MyFooter } from "../Components/Footer"
import { conditions } from '../Terms/Conditions'
import { privacy } from '../Terms/PrivacyPolicy'
import { refunds } from '../Terms/Refunds'

export default class TnC extends React.Component{
    render(){
        return(
            <div>
                <AppBar />
                    <div className="container" >
                        <div id="privacy" >
                            {privacy}
                        </div>

                        <div id="refunds" >
                            {refunds}
                        </div>

                        <div id="conditions" >
                            {conditions}
                        </div>
                    </div>
                <MyFooter />
            </div>
        )
    }
}