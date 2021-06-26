import React, { Component } from 'react'
import product from "../../Images/NextProduct/product.jpg"
import MyCountdown from '../Countdown/Countdown'

export class NextProduct extends Component {

    render() {
        return (
            <div class="banner-section section pb-40 pb-sm-30 pb-xs-0" id="next-product" >
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="single-banner-item pt-100 pt-md-80 pt-sm-70 pt-xs-50 pb-120 pb-md-100 pb-sm-90 pb-xs-50 mb-30 bg-image"
                                style={{ backgroundImage: "url(" + product + ")" }}>
                                <div class="sp-banner-content" style={{ textAlign: "center" }} >
                                    <span class="normat-text">DISCOUNTED UP TO 50%</span>
                                    <h2 class="title">UBON WU660 6 IN 1 CABLE</h2>
                                    <span class="normat-text">NEXT WEEK'S PRODUCT</span>
                                    <MyCountdown/>
                                    <a href="/display/Products/2" className="btn" >VIEW</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default NextProduct
