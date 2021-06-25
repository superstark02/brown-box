import React, { Component } from 'react'

export class Procedure extends Component {
    render() {
        return (
            <div>
                <div class="features-section section pt-30 pt-lg-15 pt-md-0 pt-sm-0 pt-xs-15">
                    <div class="container">
                        <div class="row">

                            <div class="col-lg-4 col-md-6">
                                <div class="single-feature mb-30">
                                    <div class="feature-image">
                                        <img src="https://img.icons8.com/ios/50/000000/controller.png" class="img-fluid" alt="" />
                                    </div>
                                    <div class="feature-content">
                                        <h4 class="title">New Product Every Week</h4>
                                        <p class="short-desc">We post a <b>product</b> and a <b>game</b> for a week. Several buyers buy it every week.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6">
                                <div class="single-feature mb-30">
                                    <div class="feature-image">
                                        <img src="https://img.icons8.com/ios/50/000000/discount--v1.png" class="img-fluid" alt="" />
                                    </div>
                                    <div class="feature-content">
                                        <h4 class="title">Heavy Discounts</h4>
                                        <p class="short-desc">Since 100+ users buy a product together. You get the product in wholesale rates</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6">
                                <div class="single-feature mb-30">
                                    <div class="feature-image">
                                        <img src="https://demo.hasthemes.com/nelson-preview/nelson/assets/images/icons/feature-3.png" class="img-fluid" alt="" />
                                    </div>
                                    <div class="feature-content">
                                        <h4 class="title">Quick Shipping</h4>
                                        <p class="short-desc">
                                            If buyers are less than 30, we do not ship the product and refund your money instantly.
                                        </p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Procedure
