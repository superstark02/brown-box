import React, { Component } from 'react'

export class NextProduct extends Component {
    render() {
        return (
            <div class="banner-section section pb-40 pb-sm-30 pb-xs-0">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="single-banner-item pt-100 pt-md-80 pt-sm-70 pt-xs-50 pb-120 pb-md-100 pb-sm-90 pb-xs-50 mb-30 bg-image" 
                            style={{backgroundImage:"url(https://m.media-amazon.com/images/S/aplus-media/sc/36251114-d35d-4ac8-ba1a-83c9b399fa1f.__CR0,0,970,600_PT0_SX970_V1___.jpg)"}}>
                                <div class="sp-banner-content">
                                    <span class="normat-text">DISCOUNTED UP TO 50%</span>
                                    <h2 class="title">Zigzag King Chair</h2>
                                    <span class="normat-text">LIMITED TIME OFEER</span>
                                    <div class="countdown-area">
                                        <div class="product-countdown" data-countdown="2019/06/01"></div>
                                    </div>
                                    <a href="shop.html">VIEW</a>
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
