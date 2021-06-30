import React, { Component } from 'react'
import { MyFooter } from '../Components/Footer'
import MyAppBar from "../Components/AppBar"
import bg from "../Images/AboutUs/about-us.png"

export class About extends Component {
    render() {
        return (
            <div>
                <MyAppBar />

                <div class="page-banner-section section bg-image" style={{backgroundImage:"url("+bg+")"}} >
                    <div class="container">
                        <div class="row">
                            <div class="col">

                                <div class="page-banner text-left">
                                    <h2>About Us</h2>
                                    <ul class="page-breadcrumb">
                                        <li><a href="index.html">Home</a></li>
                                        <li>About</li>
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
                                        <a href="#"><img src="https://static.digit.in/default/6cf17f8516c5b554860c732e2f07980aaef7aa3b.jpeg" alt="" /></a>
                                    </div>
                                </div>
                                {/*About Us Image End*/}
                            </div>
                            <div class="col-lg-6 col-12">
                                {/*About Us Content Start*/}
                                <div class="about-us-content pl-30 pl-md-0 pl-sm-0 pl-xs-0">
                                    <span>Since 2019</span>
                                    <h2>Provide Best Quality Products In Lowest Rates Possible</h2>
                                    <p>What's our idea? Know it <a href="/basically-the-idea" >here</a></p>
                                    <p>
                                        We enable <a href="/basically-the-idea" >team buying</a>, which eanables heavy discounts for you.
                                    </p>
                                </div>
                                {/*About Us Content End*/}
                            </div>
                        </div>
                    </div>
                </div>
                {/*About Us Area End*/}


                {/* Banner section start */}
                <div class="banner-section section pb-40 pb-sm-30 pb-xs-0">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-12">
                                {/* Single Banner Start */}
                                <div class="single-banner-item pt-100 pt-md-80 pt-sm-70 pt-xs-50 pb-120 pb-md-100 pb-sm-90 pb-xs-50 mb-30 bg-image" data-bg="https://demo.hasthemes.com/nelson-preview/nelson/assets/images/banner/banner3.jpg">
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
                                {/* Single Banner End */}
                            </div>
                        </div>
                    </div>
                </div>
                {/* Banner section End */}

                {/*About Us Team Start*/}
                {/*<div class="about-us-team-area section pt-65 pt-lg-45 pt-md-35 pt-sm-20 pt-xs-15 pb-70 pb-lg-50 pb-md-40 pb-sm-30 pb-xs-20">
                    <div class="container">
                        <div class="row">
                            <div class="col">
                                <div class="section-title text-center mb-40 mb-xs-20">
                                    <h2>Our Team</h2>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-4 col-sm-6">
                                <div class="single-team mb-30">
                                    <div class="team-image img-full">
                                        <a href="#"><img src="https://demo.hasthemes.com/nelson-preview/nelson/assets/images/team/team-1.jpg" alt="" /></a>
                                    </div>
                                    <div class="team-content">
                                        <div class="team-hover-info">
                                            <h2><a href="#">Marcos Alonso</a></h2>
                                            <ul class="team-social">
                                                <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                                                <li><a href="#"><i class="fa fa-instagram"></i></a></li>
                                                <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                                                <li><a href="#"><i class="fa fa-google-plus"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4 col-sm-6">
                                <div class="single-team mb-30">
                                    <div class="team-image img-full">
                                        <a href="#"><img src="https://demo.hasthemes.com/nelson-preview/nelson/assets/images/team/team-2.jpg" alt="" /></a>
                                    </div>
                                    <div class="team-content">
                                        <div class="team-hover-info">
                                            <h2><a href="#">Isaac Newton</a></h2>
                                            <ul class="team-social">
                                                <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                                                <li><a href="#"><i class="fa fa-instagram"></i></a></li>
                                                <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                                                <li><a href="#"><i class="fa fa-google-plus"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4 col-sm-6">
                                <div class="single-team mb-30">
                                    <div class="team-image img-full">
                                        <a href="#"><img src="https://demo.hasthemes.com/nelson-preview/nelson/assets/images/team/team-3.jpg" alt="" /></a>
                                    </div>
                                    <div class="team-content">
                                        <div class="team-hover-info">
                                            <h2><a href="#">Charlotte Taylor</a></h2>
                                            <ul class="team-social">
                                                <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                                                <li><a href="#"><i class="fa fa-instagram"></i></a></li>
                                                <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                                                <li><a href="#"><i class="fa fa-google-plus"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>/*}
                {/*About Us Team End*/}

                <MyFooter />
            </div>
        )
    }
}

export default About
