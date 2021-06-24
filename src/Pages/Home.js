import React, { Component } from 'react'
import AppBar from '../Components/AppBar'
import { MyFooter } from '../Components/Footer'

export class Home extends Component {
    render() {
        return (
            <div>
                <AppBar />
                <div class="slider-area" >
                    <div class="slider-active-2 owl-carousel">
                        <div class="single-slider-4 bg-img furits-slider" style={{ backgroundImage: "url(https://demo.hasthemes.com/ezone-preview/ezone-v1/assets/img/banner/46.jpg)" }} >
                            <div class="container">
                                <div class=" fadeinup-animated furits-content text-center">
                                    <img class="animated" src="https://demo.hasthemes.com/ezone-preview/ezone-v1/assets/img/slider/12.png" alt="" />
                                    <p class="animated">Health is not about the weight you lose. But about the life you gain!</p>
                                    <a class="furits-slider-btn btn-hover animated" href="product-details.html">Shop Now</a>
                                    <img class="animated slide-img-position slide-img-position-2" src="https://cdn.shopify.com/s/files/1/0057/8938/4802/products/372481dd-6b42-47e3-b52a-4411398b2dc8_720x.png?v=1623833193" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="slider-social">
                        <span>Follow us on:  </span>
                        <ul>
                            <li><a href="#"><i class="ti-facebook"></i></a></li>
                            <li><a href="#"><i class="ti-twitter-alt"></i></a></li>
                            <li><a href="#"><i class="ti-pinterest"></i></a></li>
                        </ul>
                    </div>
                </div>

                <div class="banner-area pt-90 pb-160 fix">
                    <div class="container">
                        <div>
                            <div class="col-lg-4 col-md-4">
                                <div class="furits-banner-wrapper mb-30 wow fadeInLeft">
                                    <img src="https://demo.hasthemes.com/ezone-preview/ezone-v1/assets/img/banner/40.jpg" alt="" />
                                    <div class="furits-banner-content">
                                        <h4>Super Natural</h4>
                                        <p>Lorem Ipsum is simply dummy text of the printing.</p>
                                        <a class="furits-banner-btn btn-hover" href="#">Shop Now</a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-4">
                                <div class="furits-banner-wrapper mb-30 wow fadeInUp">
                                    <img src="https://demo.hasthemes.com/ezone-preview/ezone-v1/assets/img/banner/41.jpg" alt="" />
                                    <div class="furits-banner-content">
                                        <h4>KIWI Fresh</h4>
                                        <p>Lorem Ipsum is simply dummy text of the printing.</p>
                                        <a class="furits-banner-btn btn-hover" href="#">Shop Now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="fruits-services ptb-200" z>
                    <div class="fruits-services-wrapper">
                        <div class="single-fruits-services">
                            <div class="fruits-services-img">
                                <img src="https://demo.hasthemes.com/ezone-preview/ezone-v1/assets/img/icon-img/53.png" alt="" />
                            </div>
                            <div class="fruits-services-content">
                                <h4>Collect Natural Food</h4>
                                <p>Lorem Ipsum is simply dummy text of the and typesetting industry. Lorem Ipsum is simply industry.</p>
                            </div>
                        </div>
                        <div class="single-fruits-services">
                            <div class="fruits-services-img">
                                <img src="https://demo.hasthemes.com/ezone-preview/ezone-v1/assets/img/icon-img/54.png" alt="" />
                            </div>
                            <div class="fruits-services-content">
                                <h4>Set Your Location.</h4>
                                <p>Lorem Ipsum is simply dummy text of the and typesetting industry. Lorem Ipsum is simply industry.</p>
                            </div>
                        </div>
                        <div class="single-fruits-services">
                            <div class="fruits-services-img">
                                <img src="https://demo.hasthemes.com/ezone-preview/ezone-v1/assets/img/icon-img/55.png" alt="" />
                            </div>
                            <div class="fruits-services-content">
                                <h4>Collect Yor Product</h4>
                                <p>Lorem Ipsum is simply dummy text of the and typesetting industry. Lorem Ipsum is simply industry.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="product-style-area gray-bg-4 pb-105">
                    <div class="container-fluid">
                        <div class="section-title-furits bg-shape text-center mb-80">
                            <img src="https://demo.hasthemes.com/ezone-preview/ezone-v1/assets/img/icon-img/49.png" alt="" />
                            <h2>Upcoming Products</h2>
                        </div>
                        <div class="container">
                            <div class="row">
                                <div class="col-lg-4 col-xl-3 col-md-6">
                                    <div class="product-fruit-wrapper mb-60">
                                        <div class="product-fruit-img">
                                            <img src="https://cdn.shopify.com/s/files/1/0057/8938/4802/products/storm-black_720x.png?v=1623833041" alt="" />
                                            <div class="product-furit-action">
                                                <a class="furit-animate-left" title="Add To Cart" href="#">
                                                    <i class="pe-7s-cart"></i>
                                                </a>
                                                <a class="furit-animate-right" title="Wishlist" href="#">
                                                    <i class="pe-7s-like"></i>
                                                </a>
                                            </div>
                                        </div>
                                        <div class="product-fruit-content text-center">
                                            <h4><a href="product-details.html">Pinapple Freash</a></h4>
                                            <span>$20.99</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="coundown-area bg-img pt-175 pb-220" style={{ backgroundImage: "url(https://demo.hasthemes.com/ezone-preview/ezone-v1/assets/img/banner/46.jpg)" }}>
                    <div class="container">
                        <div class="row">
                            <div class="ml-auto col-xl-5 ml-auto col-lg-7">
                                <div class="coundown-wrapper">
                                    <h2>Best Deal for this <br />Product</h2>
                                    <span>Pineapple Juice</span>
                                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.</p>
                                    <div class="timer">
                                        <div data-countdown="2018/06/01"></div>
                                    </div>
                                    <a class="coundown-btn btn-hover" href="#">shop now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="fruits-choose-area pb-65 bg-img" style={{backgroundImage:"url(https://g.foolcdn.com/image/?url=https%3A%2F%2Fg.foolcdn.com%2Feditorial%2Fimages%2F593627%2Fgettyimages-1185938530.jpg&w=1200&op=resize)"}}>
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-12 col-xl-8 col-12">
                                <div class="fruits-choose-wrapper-all">
                                    <div class="fruits-choose-title">
                                        <h2 style={{color:"white"}} >WHY CHOOSE US ?</h2>
                                    </div>
                                    <div class="fruits-choose-wrapper">
                                        <div class="single-fruits-choose">
                                            <div class="fruits-choose-serial">
                                                <h3>01</h3>
                                            </div>
                                            <div class="fruits-choose-content">
                                                <h4>Lorem Ipsum Dolar Sit.</h4>
                                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                            </div>
                                        </div>
                                        <div class="single-fruits-choose">
                                            <div class="fruits-choose-serial">
                                                <h3>02</h3>
                                            </div>
                                            <div class="fruits-choose-content">
                                                <h4>Lorem Ipsum Dolar Sit.</h4>
                                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                            </div>
                                        </div>
                                        <div class="single-fruits-choose">
                                            <div class="fruits-choose-serial">
                                                <h3>03</h3>
                                            </div>
                                            <div class="fruits-choose-content">
                                                <h4>Lorem Ipsum Dolar Sit.</h4>
                                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="fruits-services ptb-200" >
            <div class="fruits-services-wrapper">
                <div class="single-fruits-services">
                    <div class="fruits-services-img">
                        <img src="https://demo.hasthemes.com/ezone-preview/ezone-v1/assets/img/icon-img/55.png" alt="" />
                    </div>
                    <div class="fruits-services-content">
                        <h4>Shipping</h4>
                        <p>Know more about when your product is shipped</p>
                    </div>
                </div>
                <div class="single-fruits-services">
                    <div class="fruits-services-img">
                        <img src="https://demo.hasthemes.com/ezone-preview/ezone-v1/assets/img/icon-img/55.png" alt="" />
                    </div>
                    <div class="fruits-services-content">
                        <h4>Refunds</h4>
                        <p>What happens when there are not enough buyers</p>
                    </div>
                </div>
                <div class="single-fruits-services">
                    <div class="fruits-services-img">
                        <img src="https://demo.hasthemes.com/ezone-preview/ezone-v1/assets/img/icon-img/55.png" alt="" />
                    </div>
                    <div class="fruits-services-content">
                        <h4>Shipping</h4>
                        <p>Know more about when your product is shipped</p>
                    </div>
                </div>
            </div>
        </div>

                <MyFooter />
            </div>
        )
    }
}

export default Home
