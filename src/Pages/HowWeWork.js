import React, { Component } from 'react'
import { MyFooter } from '../Components/Footer'
import AppBar from '../Components/AppBar'
import xplain from "../Videos/Xplain.mp4"
import teambuy from "../Images/WhatIsBrownBox.png"
import idea from "../Images/howwework.png"

export class HowWeWork extends Component {
    render() {
        return (
            <div>
                <AppBar />

                <div class="page-banner-section section bg-image" style={{ backgroundImage: "url(https://image.freepik.com/free-photo/blurred-view-corridor-with-plants_1203-1080.jpg)" }} >
                    <div class="container">
                        <div class="row">
                            <div class="col">

                                <div class="page-banner text-left">
                                    <h2>How We Work</h2>
                                    <ul class="page-breadcrumb">
                                        <li><a href="index.html">Home</a></li>
                                        <li>How We Work</li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <div class="about-us-area section pt-90 pt-lg-70 pt-md-60 pt-sm-50 pt-xs-45 pb-70 pb-lg-50 pb-md-60 pb-sm-60 pb-xs-50">
                    <div class="container">
                        <div class="row align-items-center">
                            <div class="col-lg-6 col-12">
                                {/*About Us Image Start*/}
                                <div class="about-us-img-wrapper mb-30 mb-xs-15">
                                    <div class="about-us-image img-full">
                                        <a href="#"><img src={teambuy} alt="" /></a>
                                    </div>
                                </div>
                                {/*About Us Image End*/}
                            </div>
                            <div class="col-lg-6 col-12">
                                {/*About Us Content Start*/}
                                <div class="about-us-content pl-30 pl-md-0 pl-sm-0 pl-xs-0">
                                    <span>Concept</span>
                                    <h2>Team Buying</h2>
                                    <p>When multiple user come together and but a product, it's called <b>team buying</b></p>
                                    <p>We post a product everyweek. Interested buyers can buy together and save upto 90% </p>
                                </div>
                                {/*About Us Content End*/}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Banner section start */}
                <div class="banner-section section pb-40 pb-sm-30 pb-xs-0">
                    <div class="container">
                        <video width="100%" controls  >
                            <source src={xplain} />
                        </video>
                    </div>
                </div>
                {/* Banner section End */}


                <div class="features-section section pt-30 pt-lg-15 pt-md-0 pt-sm-0 pt-xs-15">
                    <div class="container">
                        <div class="row">

                            <div class="col-lg-4 col-md-6">
                                <div class="single-feature mb-30">
                                    <div class="feature-image">
                                        <img src="https://demo.hasthemes.com/nelson-preview/nelson/assets/images/icons/feature-1.png" class="img-fluid" alt="" />
                                    </div>
                                    <div class="feature-content">
                                        <h4 class="title">Warranty And Service</h4>
                                        <p class="short-desc">
                                            No compromises on warranty. Get full warranty/garauntee with bill.
                                        </p>
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
                                        <h4 class="title">Easy Cancelations</h4>
                                        <p class="short-desc">You can cancel your order anytime, before shpping.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="banner-section section pb-40 pb-sm-30 pb-xs-0">
                    <div class="container wrap">
                        <img width="60%" src={idea} ></img>
                    </div>
                </div>

                <MyFooter />
            </div>
        )
    }
}

export default HowWeWork
