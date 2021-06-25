import React, { Component } from 'react'
import AppBar from '../Components/AppBar'
import Banner from '../Components/HomePage/Banner'
import Products from "../Components/Products/ProductsList"
import NextProduct from "../Components/Products/NextProduct"
import { MyFooter } from '../Components/Footer'
import Procedure from '../Components/HomePage/Procedure'
import { Brands } from '../Components/HomePage/Brands'
import { Feedback } from '@material-ui/icons'

export class Home extends Component {
    render() {
        return (
            <div id="main-wrapper" >
                <AppBar />

                {/*slider section start*/}
                <div class="hero-section section position-relative">
                    <div class="hero-slider section">

                        {/*Hero Item start*/}
                        <div class="hero-item  bg-image" style={{ backgroundImage: "url(https://demo.hasthemes.com/nelson-preview/nelson/assets/images/hero/hero-1.jpg)" }}>
                            <div class="container">
                                <div class="row">
                                    <div class="col-12">

                                        {/*Hero Content start*/}
                                        <div class="hero-content-2 center">

                                            <h2>Creative Design <br /> Modern & Exclusive Furniture</h2>
                                            <a href="shop.html" class="btn">SHOP NOW</a>

                                        </div>
                                        {/*Hero Content end*/}

                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*Hero Item end*/}

                    </div>
                </div>
                {/*slider section end*/}

                <Banner />

                <Products />

                <NextProduct />

                <Procedure />

                <div class="blog-section section pt-65 pt-lg-45 pt-md-35 pt-sm-20 pt-xs-15 pb-65 pb-lg-45 pb-md-35 pb-sm-25 pb-xs-15">
                    <div class="container">

                        <div class="row mb-50 mb-xs-20">
                            <div class="col">
                                <div class="section-title text-center">
                                    <h2>Latest Post From Blog</h2>
                                    <span>OUR BLOG POST</span>
                                </div>
                            </div>
                        </div>

                        <div class="row">

                            <div class="blog col-lg-4 col-md-6">
                                <div class="blog-inner mb-30">
                                    <div class="blog-media"><a href="blog-details.html" class="image"><img src="https://demo.hasthemes.com/nelson-preview/nelson/assets/images/blog/blog-1.jpg" alt="" /></a></div>
                                    <div class="content">
                                        <ul class="meta">
                                            <li>08 April, 2019</li>
                                            <li><a href="#">25 Likes</a></li>
                                            <li><a href="#">28 Views</a></li>
                                        </ul>
                                        <h3 class="title"><a href="blog-details.html">Latest Fashion Trend for Women
                                            new trens, new fashion</a></h3>
                                        <a class="read-more" href="blog-details.html">Read more</a>
                                    </div>
                                </div>
                            </div>

                            <div class="blog col-lg-4 col-md-6">
                                <div class="blog-inner mb-30">
                                    <div class="blog-media"><a href="blog-details.html" class="image"><img src="https://demo.hasthemes.com/nelson-preview/nelson/assets/images/blog/blog-2.jpg" alt="" /></a></div>
                                    <div class="content">
                                        <ul class="meta">
                                            <li>06 April, 2019</li>
                                            <li><a href="#">42 Likes</a></li>
                                            <li><a href="#">18 Views</a></li>
                                        </ul>
                                        <h3 class="title"><a href="blog-details.html">Latest Fashion Trend for Women
                                            new trens, new fashion</a></h3>
                                        <a class="read-more" href="blog-details.html">Read more</a>
                                    </div>
                                </div>
                            </div>

                            <div class="blog col-lg-4 col-md-6">
                                <div class="blog-inner mb-30">
                                    <div class="blog-media"><a href="blog-details.html" class="image"><img src="https://demo.hasthemes.com/nelson-preview/nelson/assets/images/blog/blog-3.jpg" alt="" /></a></div>
                                    <div class="content">
                                        <ul class="meta">
                                            <li>02 April, 2019</li>
                                            <li><a href="#">20 Likes</a></li>
                                            <li><a href="#">78 Views</a></li>
                                        </ul>
                                        <h3 class="title"><a href="blog-details.html">Latest Fashion Trend for Women
                                            new trens, new fashion</a></h3>
                                        <a class="read-more" href="blog-details.html">Read more</a>
                                    </div>
                                </div>
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
