import React, { Component } from 'react'

export class Banner extends Component {
    render() {
        return (
            <div class="banner-section section pt-30">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6 col-md-6 col-sm-12">
                            {/* Single Banner Start */}
                            <div class="single-banner-item mb-30">
                                <div class="banner-image">
                                    <a href="shop.html">
                                        <img src="https://demo.hasthemes.com/nelson-preview/nelson/assets/images/banner/banner1.jpg" alt="" />
                                    </a>
                                </div>
                                <div class="banner-content">
                                    <h3 class="title">OFFICE <br /> FURNITURE</h3>
                                    <a href="shop.html">SHOP NOW</a>
                                </div>
                            </div>
                            {/* Single Banner End */}
                        </div>
                        <div class="col-lg-6 col-md-6 col-sm-12">
                            {/* Single Banner Start */}
                            <div class="single-banner-item mb-30">
                                <div class="banner-image">
                                    <a href="shop-left-sidebar.html">
                                        <img src="https://demo.hasthemes.com/nelson-preview/nelson/assets/images/banner/banner2.jpg" alt="" />
                                    </a>
                                </div>
                                <div class="banner-content tr-right">
                                    <h3 class="title">HOME <br /> FURNITURE</h3>
                                    <a href="shop.html">SHOP NOW</a>
                                </div>
                            </div>
                            {/* Single Banner End */}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Banner
