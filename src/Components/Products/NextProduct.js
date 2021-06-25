import React, { Component } from 'react'

export class NextProduct extends Component {
    render() {
        return (
            <div class="banner-section section pb-40 pb-sm-30 pb-xs-0">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="single-banner-item pt-100 pt-md-80 pt-sm-70 pt-xs-50 pb-120 pb-md-100 pb-sm-90 pb-xs-50 mb-30 bg-image" style={{backgroundImage:"url(https://demo.hasthemes.com/nelson-preview/nelson/assets/images/banner/banner3.jpg)"}}>
                                <div class="sp-banner-content">
                                    <span class="normat-text">DISCOUNTED UP TO 50%</span>
                                    <h2 class="title">Zigzag King Chair</h2>
                                    <span class="normat-text">LIMITED TIME OFEER</span>
                                    <div class="countdown-area">
                                        <div class="product-countdown" data-countdown="2019/06/01"></div>
                                    </div>
                                    <a href="shop.html">SHOP NOW</a>
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
