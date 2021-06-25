import React, { Component } from 'react'
import { MyFooter } from '../Components/Footer'
import MyAppBar from "../Components/AppBar"

export class BuyingSystem extends Component {
    render() {
        return (
            <div>
                <MyAppBar />
                <div class="page-banner-section section bg-image" style={{ backgroundImage: "url(https://image.freepik.com/free-photo/aerial-view-container-cargo-ship-sea_335224-719.jpg)" }} >
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
                                    <div class="blog-media"><div class="image"><img src="https://image.freepik.com/free-photo/pink-headphones-wireless-digital-device_53876-96804.jpg" alt="" /></div></div>
                                    <div class="content">
                                        <h3 class="title">
                                            <strong>
                                                #1. We post a product every week. We are focusing on gaming community right now. So,
                                                most of the products are gaming accessories
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
                                                #2. The product is on website for the whole week (Mon-Sun). At the last day(Sun)
                                                the product is ready to ship.
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
                                                #3. If the number of buyers are less than 30 till the last day (Sun).
                                                The product is not shipped and buyer's money is refunded on the same day.
                                            </strong>
                                        </h3>
                                    </div>
                                </div>
                            </div>

                        </div>

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
                                                            No warrany/garauntee is compromised. You get full warranty/garauntee on branded products.
                                                        </p>
                                                    </td>
                                                </tr>
                                                <tr id="cancelation" >
                                                    <td class="first-column">Cancelation</td>
                                                    <td class="pro-desc">
                                                        <p>
                                                            You can cancel your order before last day (Sun) of the week. You cancel by contacting <a href="/contact" > here</a>
                                                        </p>
                                                    </td>
                                                </tr>
                                                <tr id="shipping" >
                                                    <td class="first-column">Shipping</td>
                                                    <td class="pro-desc">
                                                        <p>
                                                            The product is shipped on the last day of the week (Sun). The product is delivered to you within 3-4 days.
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
                                                            The returns are only initited for branded products. For returning a product extra charges are applied. Unbranded products
                                                            are not returned. This month we will be focusing on non-branded products.
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
