import React, { Component } from 'react'

export class Features extends Component {
    render() {
        return (
            <div class="features-section section pt-30 pt-lg-15 pt-md-0 pt-sm-0 pt-xs-15">
                <div class="container">
                    <div class="row">

                        <div class="col-lg-4 col-md-6">
                            <div class="single-feature mb-30">
                                <div class="feature-image">
                                    <img src="https://demo.hasthemes.com/nelson-preview/nelson/assets/images/icons/feature-1.png" class="img-fluid" alt="" />
                                </div>
                                <div class="feature-content">
                                    <h4 class="title">Quick Shpping</h4>
                                    <p class="short-desc">All India shpping. Shipped within 3-4 days</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6">
                            <div class="single-feature mb-30">
                                <div class="feature-image">
                                    <img src="https://demo.hasthemes.com/nelson-preview/nelson/assets/images/icons/feature-2.png" class="img-fluid" alt="" />
                                </div>
                                <div class="feature-content">
                                    <h4 class="title">Quality Products</h4>
                                    <p class="short-desc">We ensure the product quality that is our main goal </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6">
                            <div class="single-feature mb-30">
                                <div class="feature-image">
                                    <img src="https://demo.hasthemes.com/nelson-preview/nelson/assets/images/icons/feature-3.png" class="img-fluid" alt="" />
                                </div>
                                <div class="feature-content">
                                    <h4 class="title">3 Days Return</h4>
                                    <p class="short-desc">Provide free home delivery for the all product over $100 </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Features
