import React, { Component } from 'react'
import { MyFooter } from '../Components/Footer'
import MyAppBar from "../Components/AppBar"

export class BuyingSystem extends Component {
    render() {
        return (
            <div>
                <MyAppBar />
                <div class="page-banner-section section bg-image" style={{backgroundImage:"url(https://image.freepik.com/free-photo/aerial-view-container-cargo-ship-sea_335224-719.jpg)"}} >
                    <div class="container">
                        <div class="row">
                            <div class="col">

                                <div class="page-banner text-left">
                                    <h2>How It Works</h2>
                                    <ul class="page-breadcrumb">
                                        <li><a href="index.html">Home</a></li>
                                        <li>How It Works</li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <MyFooter/>
            </div>
        )
    }
}

export default BuyingSystem
