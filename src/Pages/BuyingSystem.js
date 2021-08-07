import React, { Component } from 'react'
import { MyFooter } from '../Components/Footer'
import MyAppBar from "../Components/AppBar"
import xplain from "../Videos/Xplain.mp4"
import pink_headphones from "../Images/HowWeWork/pink-headphones.jpg"
import ship from "../Images/HowWeWork/ship.png"

export class BuyingSystem extends Component {
    render() {
        return (
            <div>
                <MyAppBar />
                <div class="page-banner-section section bg-image" style={{ backgroundImage: "url("+ship+")" }} >
                    <div class="container">
                        <div class="row">
                            <div class="col">

                                <div class="page-banner text-left">
                                    <h2>How It Works</h2>
                                    <ul class="page-breadcrumb">
                                        <li><a href="index.html">Home</a></li>
                                        <li>How It Works</li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <div class="row mb-50 mb-xs-20" style={{maxWidth:"100%"}} >
                    <div class="col"  style={{marginTop:"70px"}} >
                        <div class="section-title text-center">
                            <h2>Explaination Video</h2>
                            <span>WHAT IS BROWN BOX</span>
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

                <div class="blog-section section pt-65 pt-lg-45 pt-md-35 pt-sm-20 pt-xs-15 pb-65 pb-lg-45 pb-md-35 pb-sm-25 pb-xs-15">
                    <div class="container">

                        <div class="row mb-50 mb-xs-20">
                            <div class="col">
                                <div class="section-title text-center">
                                    <h2>Here Are The Steps</h2>
                                    <span>EASY GOING</span>
                                </div>
                            </div>
                        </div>

                        <div class="row">

                            <div class="blog col-lg-4 col-md-6">
                                <div class="blog-inner mb-30">
                                    <div class="blog-media"><div class="image"><img src={pink_headphones} alt="" /></div></div>
                                    <div class="content">
                                        <h3 class="title">
                                            <strong>
                                                #1. Branded and good quality products.
                                            </strong>
                                        </h3>
                                        {/*<a class="read-more" href="blog-details.html">Read more</a>*/}
                                    </div>
                                </div>
                            </div>

                            <div class="blog col-lg-4 col-md-6">
                                <div class="blog-inner mb-30">
                                    <div class="blog-media"><div class="image"><img src="https://images.pexels.com/photos/34577/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" /></div></div>
                                    <div class="content">
                                        <h3 class="title">
                                            <strong>
                                                #2. The product is shipped as soon as 30 orders are received.
                                            </strong>
                                        </h3>
                                    </div>
                                </div>
                            </div>

                            <div class="blog col-lg-4 col-md-6">
                                <div class="blog-inner mb-30">
                                    <div class="blog-media"><div class="image"><img src="https://www.apsfulfillment.com/wp-content/uploads/2017/03/APS_28.jpg" alt="" /></div></div>
                                    <div class="content">
                                        <h3 class="title">
                                            <strong>
                                                #3. If the number of buyers are less than 30.
                                                The product is not shipped and all buyer's money is refunded instantly.
                                            </strong>
                                        </h3>
                                    </div>
                                </div>
                            </div>

                        </div>



                    </div>

                    <div className="wrap" >
                        <a href="/basically-the-idea" >
                            <div className="btn" style={{ color: "white" }} href="/basically-the-idea" >
                                Know About The Idea
                            </div>
                        </a>
                    </div>
                </div>


                <div class="page-section section pt-90 pt-lg-70 pt-md-60 pt-sm-50 pt-xs-40   pb-100 pb-lg-80 pb-md-70 pb-sm-60 pb-xs-50">
                    <div class="container">
                        <div class="row">
                            <div class="col-12">
                                <form action="#">
                                    <div class="compare-table table-responsive">
                                        <table class="table mb-0">
                                            <tbody>
                                                <tr id="warranty" >
                                                    <td class="first-column">Warranty/Garauntee</td>
                                                    <td class="pro-desc">
                                                        <p>
                                                            No warrany/garauntee is compromised. Get full warranty/garauntee on branded products.
                                                        </p>
                                                    </td>
                                                </tr>
                                                <tr id="cancellation" >
                                                    <td class="first-column">Cancellation</td>
                                                    <td class="pro-desc">
                                                        <p>
                                                            Cancel your order before shiping. You cancel your order by contacting <a href="/contact" > here</a>
                                                        </p>
                                                    </td>
                                                </tr>
                                                <tr id="shipping" >
                                                    <td class="first-column">Shipping</td>
                                                    <td class="pro-desc">
                                                        <p>
                                                            The product is delivered to you within 3-4 days.
                                                        </p>
                                                    </td>
                                                </tr>
                                                <tr id="refunds" >
                                                    <td class="first-column">Refunds</td>
                                                    <td class="pro-desc">
                                                        <p>
                                                            <li>
                                                                If there are not sufficient buyers for a product in a week, the refund will be initiated on the last day of the week (Sun).
                                                            </li>
                                                            <li>
                                                                In case of order cancellation. Refund will be initiated instantly.
                                                            </li>
                                                            <li>
                                                                In case of return, the refund will be initiated
                                                                as soon as the product is received back to the brownbox-warehouse.
                                                            </li>
                                                        </p>
                                                    </td>
                                                </tr>
                                                <tr id="returns" >
                                                    <td class="first-column">Returns</td>
                                                    <td class="pro-desc">
                                                        <p>
                                                            The returns are only initiated for branded products. For returning a 
                                                            product extra charges are applied. Unbranded products are not returned. 
                                                            This month we will be focusing on non-branded products.
                                                        </p>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </form>

                            </div>
                        </div>
                    </div>
                </div>

                <MyFooter />
            </div>
        )
    }
}

export default BuyingSystem
