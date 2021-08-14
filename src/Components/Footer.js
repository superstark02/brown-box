import React, { Component } from 'react'

export class MyFooter extends Component {
    render() {
        return (
            <div>
                <footer class="footer-section section bg-gray">

                    {/*Footer Top start*/}
                    <div class="footer-top section pt-100 pt-lg-80 pt-md-70 pt-sm-60 pt-xs-50 pb-55 pb-lg-35 pb-md-25 pb-sm-15 pb-xs-10">
                        <div class="container">
                            <div class="row">

                                {/*Footer Widget start*/}
                                <div class="footer-widget col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12 mb-40 mb-xs-35">
                                    <h4 class="title"><span class="text">Timings</span></h4>
                                    <p class="mb-15">New Product: Every Monday</p>
                                    <p class="mb-15">Support:8am - 6pm/ 7 </p>
                                    <h4 class="opeaning-title">We Work On All The Holidays</h4>
                                </div>
                                {/*Footer Widget end*/}


                                {/*Footer Widget start*/}
                                <div class="footer-widget col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12 mb-40 mb-xs-35">
                                    <h4 class="title"><span class="text">Quick Link</span></h4>
                                    <ul class="ft-menu">
                                        <li><a href="/account">My account</a></li>
                                        <li><a href="https://www.shiprocket.in/shipment-tracking/">Order Tracking</a></li>
                                        <li><a href="/how-we-work/#refunds">Refunds</a></li>
                                        <li><a href="/how-we-work/#cancellation">cancellation</a></li>
                                        <li><a href="/how-we-work/#shipping">Shipping Information</a></li>
                                    </ul>
                                </div>
                                {/*Footer Widget end*/}

                                {/*Footer Widget start*/}
                                <div class="footer-widget col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12 mb-40 mb-xs-35">
                                    <h4 class="title"><span class="text">Information</span></h4>
                                    <ul class="ft-menu">
                                        <li><a href="/about">About Us</a></li>
                                        <li><a href="/tnc/#privacy">Privacy Policy</a></li>
                                        <li><a href="/tnc/#conditions">Terms Of Use</a></li>
                                        <li><a href="/tnc/#refunds">Refunds</a></li>
                                    </ul>
                                </div>
                                {/*Footer Widget end*/}

                                {/*Footer Widget start*/}
                                <div class="footer-widget text-lg-right text-left col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12 mb-40 mb-xs-35">
                                    <h2 className="font-a" >brownbox.</h2>
                                    <p class="contact-text">mail@brownbox.store</p>
                                    <p class="contact-text">+91 99101 97196</p>
                                    <p class="contact-text">
                                        112, Bazz Shopping Complex <br/>
                                        Pocket 8, Sector 24 <br/>
                                        Rohini, Delhi - 110085
                                    </p>
                                </div>
                                {/*Footer Widget end*/}
                            </div>
                        </div>
                    </div>

                    {/*Footer bottom start*/}
                    <div class="footer-bottom section">
                        <div class="container">
                            <div class="row no-gutters">
                                <div class="col-12 ft-border pt-25 pb-25">
                                    <div class="row justify-content-between align-items-center">
                                        <div class="col-lg-6 col-md-6 col-sm-12">
                                            <div class="copyright text-left">
                                                <p class="copyright">&copy; 2021 <strong>brownbox.store</strong> Made with <i class="fa fa-heart text-danger" aria-hidden="true"></i> by <a href="https://hasthemes.com/"><strong>brownbox</strong></a>.</p>
                                            </div>
                                        </div>
                                        <div class="col-lg-6 col-md-6 col-sm-12">
                                            <div class="payment-getway text-lg-right text-center">
                                                <img src="https://demo.hasthemes.com/nelson-preview/nelson/assets/images/payment.png" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Footer bottom end*/}
                </footer>

                <div class="modal fade quick-view-modal-container" id="quick-view-modal-container" tabindex="-1" role="dialog" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <div class="col-xl-12 col-lg-12">
                                    <div class="row">
                                        <div class="col-lg-4 col-md-6">
                                            {/* Product Details Left */}
                                            <div class="product-details-left">
                                                <div class="product-details-images">
                                                    <div class="lg-image">
                                                        <img src="https://demo.hasthemes.com/nelson-preview/nelson/assets/images/product/large-product/l-product-1.jpg" alt="" />
                                                    </div>
                                                    <div class="lg-image">
                                                        <img src="https://demo.hasthemes.com/nelson-preview/nelson/assets/images/product/large-product/l-product-2.jpg" alt="" />
                                                    </div>
                                                    <div class="lg-image">
                                                        <img src="https://demo.hasthemes.com/nelson-preview/nelson/assets/images/product/large-product/l-product-3.jpg" alt="" />
                                                    </div>
                                                    <div class="lg-image">
                                                        <img src="https://demo.hasthemes.com/nelson-preview/nelson/assets/images/product/large-product/l-product-4.jpg" alt="" />
                                                    </div>
                                                    <div class="lg-image">
                                                        <img src="https://demo.hasthemes.com/nelson-preview/nelson/assets/images/product/large-product/l-product-5.jpg" alt="" />
                                                    </div>
                                                </div>
                                                <div class="product-details-thumbs">
                                                    <div class="sm-image"><img src="https://demo.hasthemes.com/nelson-preview/nelson/assets/images/product/small-product/s-product-1.jpg" alt="product image thumb" /></div>
                                                    <div class="sm-image"><img src="https://demo.hasthemes.com/nelson-preview/nelson/assets/images/product/small-product/s-product-2.jpg" alt="product image thumb" /></div>
                                                    <div class="sm-image"><img src="https://demo.hasthemes.com/nelson-preview/nelson/assets/images/product/small-product/s-product-3.jpg" alt="product image thumb" /></div>
                                                    <div class="sm-image"><img src="https://demo.hasthemes.com/nelson-preview/nelson/assets/images/product/small-product/s-product-4.jpg" alt="product image thumb" /></div>
                                                    <div class="sm-image"><img src="https://demo.hasthemes.com/nelson-preview/nelson/assets/images/product/small-product/s-product-5.jpg" alt="product image thumb" /></div>
                                                </div>
                                            </div>
                                            {/*Product Details Left */}
                                        </div>
                                        <div class="col-lg-8 col-md-6">
                                            {/*Product Details Content Start*/}
                                            <div class="product-details-content">
                                                {/*Product Nav Start*/}
                                                <div class="product-nav">
                                                    <a href="#"><i class="fa fa-angle-left"></i></a>
                                                    <a href="#"><i class="fa fa-angle-right"></i></a>
                                                </div>
                                                {/*Product Nav End*/}
                                                <h2>Aliquam lobortis est turpis mauris egestas eget</h2>
                                                <div class="single-product-reviews">
                                                    <i class="fa fa-star active"></i>
                                                    <i class="fa fa-star active"></i>
                                                    <i class="fa fa-star active"></i>
                                                    <i class="fa fa-star active"></i>
                                                    <i class="fa fa-star-o"></i>
                                                    <a class="review-link" href="#">(1 customer review)</a>
                                                </div>
                                                <div class="single-product-price">
                                                    <span class="price new-price">$66.00</span>
                                                    <span class="regular-price">$77.00</span>
                                                </div>
                                                <div class="product-description">
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco,Proin lectus ipsum, gravida et mattis vulputate, tristique ut lectus</p>
                                                </div>
                                                <div class="single-product-quantity">
                                                    <form class="add-quantity" action="#">
                                                        <div class="product-quantity">
                                                            <input value="1" type="number" />
                                                        </div>
                                                        <div class="add-to-link">
                                                            <button class="btn"><i class="ion-bag"></i>add to cart</button>
                                                        </div>
                                                    </form>
                                                </div>
                                                <div class="wishlist-compare-btn">
                                                    <a href="#" class="wishlist-btn">Add to Wishlist</a>
                                                    <a href="#" class="add-compare">Compare</a>
                                                </div>
                                                <div class="product-meta">
                                                    <span class="posted-in">
                                                        Categories:
                                                        <a href="#">Accessories</a>,
                                                        <a href="#">Electronics</a>
                                                    </span>
                                                </div>
                                                <div class="single-product-sharing">
                                                    <h3>Share this product</h3>
                                                    <ul>
                                                        <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                                                        <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                                                        <li><a href="#"><i class="fa fa-google-plus"></i></a></li>
                                                        <li><a href="#"><i class="fa fa-pinterest"></i></a></li>
                                                        <li><a href="#"><i class="fa fa-instagram"></i></a></li>
                                                        <li><a href="#"><i class="fa fa-vimeo"></i></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            {/*Product Details Content End*/}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                {/* Modal Area End */}
            </div>
        )
    }
}
