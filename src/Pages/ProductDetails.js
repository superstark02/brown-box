import React, { Component } from 'react'
import AppBar from "../Components/AppBar"
import {MyFooter} from "../Components/Footer"

export class ProductDetails extends Component {
    render() {
        return (
            <div>
                <AppBar />
                <div class="single-product-section section pt-60 pt-lg-40 pt-md-30 pt-sm-20 pt-xs-25 pb-100 pb-lg-80 pb-md-70 pb-sm-30 pb-xs-20">
                    <div class="container">
                        <div class="row">
                            <div class="col-12">
                                <div class="shop-area">
                                    <div class="row">
                                        <div class="col-md-6 pr-35 pr-lg-15 pr-md-15 pr-sm-15 pr-xs-15">
                                            {/* Product Details Left */}
                                            <div class="product-details-left">
                                                <div class="product-details-images">
                                                    <div class="lg-image">
                                                        <img src="https://demo.hasthemes.com/nelson-preview/nelson/assets/images/product/large-product/l-product-1.jpg" alt="" />
                                                        <a href="https://demo.hasthemes.com/nelson-preview/nelson/assets/images/product/large-product/l-product-1.jpg" class="popup-img venobox" data-gall="myGallery"><i class="fa fa-expand"></i></a>
                                                    </div>
                                                    <div class="lg-image">
                                                        <img src="https://demo.hasthemes.com/nelson-preview/nelson/assets/images/product/large-product/l-product-2.jpg" alt="" />
                                                        <a href="https://demo.hasthemes.com/nelson-preview/nelson/assets/images/product/large-product/l-product-2.jpg" class="popup-img venobox" data-gall="myGallery"><i class="fa fa-expand"></i></a>
                                                    </div>
                                                    <div class="lg-image">
                                                        <img src="https://demo.hasthemes.com/nelson-preview/nelson/assets/images/product/large-product/l-product-3.jpg" alt="" />
                                                        <a href="https://demo.hasthemes.com/nelson-preview/nelson/assets/images/product/large-product/l-product-3.jpg" class="popup-img venobox" data-gall="myGallery"><i class="fa fa-expand"></i></a>
                                                    </div>
                                                    <div class="lg-image">
                                                        <img src="https://demo.hasthemes.com/nelson-preview/nelson/assets/images/product/large-product/l-product-4.jpg" alt="" />
                                                        <a href="https://demo.hasthemes.com/nelson-preview/nelson/assets/images/product/large-product/l-product-4.jpg" class="popup-img venobox" data-gall="myGallery"><i class="fa fa-expand"></i></a>
                                                    </div>
                                                    <div class="lg-image">
                                                        <img src="https://demo.hasthemes.com/nelson-preview/nelson/assets/images/product/large-product/l-product-5.jpg" alt="" />
                                                        <a href="https://demo.hasthemes.com/nelson-preview/nelson/assets/images/product/large-product/l-product-5.jpg" class="popup-img venobox" data-gall="myGallery"><i class="fa fa-expand"></i></a>
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
                                        <div class="col-md-6">
                                            {/*Product Details Content Start*/}
                                            <div class="product-details-content">
                                                {/*Product Nav Start*/}
                                                <div class="product-nav">
                                                    <a href="#"><i class="fa fa-angle-left"></i></a>
                                                    <a href="#"><i class="fa fa-angle-right"></i></a>
                                                </div>
                                                {/*Product Nav End*/}
                                                <h2>Classic Chair Wodden</h2>
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
                                                <div class="product-countdown-two" data-countdown2="2020/06/01"></div>
                                                <div class="single-product-quantity">
                                                    <form class="add-quantity" action="#">
                                                        <div class="product-quantity">
                                                            <input value="1" type="number" />
                                                        </div>
                                                        <div class="add-to-link">
                                                            <button class="btn"><i class="fa fa-shopping-bag"></i>add to cart</button>
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
                {/* Single Product Section End */}

                <div class="product-section section pt-100 pt-lg-80 pt-md-70 pt-sm-60 pt-xs-50 pb-60 pb-lg-40 pb-md-30 pb-sm-20 pb-xs-15">
                    <div class="container">

                        <div class="row">
                            <div class="col">
                                <div class="section-title text-center mb-50 mb-xs-20">
                                    <h2>Related Products</h2>
                                </div>
                            </div>
                        </div>
                        <div class="row product-slider">
                            <div class="col">
                                <div class="single-grid-product mb-40">
                                    <div class="product-image">
                                        <div class="product-label">
                                            <span>-20%</span>
                                        </div>
                                        <a href="single-product.html">
                                            <img src="https://demo.hasthemes.com/nelson-preview/nelson/assets/images/product/product-1.jpg" class="img-fluid" alt="" />
                                            <img src="https://demo.hasthemes.com/nelson-preview/nelson/assets/images/product/product-2.jpg" class="img-fluid" alt="" />
                                        </a>

                                        <div class="product-action">
                                            <ul>
                                                <li><a href="cart.html"><i class="fa fa-cart-plus"></i></a></li>
                                                <li><a href="#quick-view-modal-container" data-toggle="modal" title="Quick View"><i class="fa fa-eye"></i></a></li>
                                                <li><a href="wishlit.html"><i class="fa fa-heart-o"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="product-content">
                                        <h3 class="title"> <a href="single-product.html">Stylish Design Chair</a></h3>
                                        <p class="product-price"><span class="discounted-price">$190.00</span> <span class="main-price discounted">$230.00</span></p>
                                    </div>
                                </div>
                            </div>

                            <div class="col">
                                <div class="single-grid-product mb-40">
                                    <div class="product-image">
                                        <div class="product-label">
                                            <span>-20%</span>
                                        </div>
                                        <a href="single-product.html">
                                            <img src="https://demo.hasthemes.com/nelson-preview/nelson/assets/images/product/product-1.jpg" class="img-fluid" alt="" />
                                            <img src="https://demo.hasthemes.com/nelson-preview/nelson/assets/images/product/product-2.jpg" class="img-fluid" alt="" />
                                        </a>

                                        <div class="product-action">
                                            <ul>
                                                <li><a href="cart.html"><i class="fa fa-cart-plus"></i></a></li>
                                                <li><a href="#quick-view-modal-container" data-toggle="modal" title="Quick View"><i class="fa fa-eye"></i></a></li>
                                                <li><a href="wishlit.html"><i class="fa fa-heart-o"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="product-content">
                                        <h3 class="title"> <a href="single-product.html">Stylish Design Chair</a></h3>
                                        <p class="product-price"><span class="discounted-price">$190.00</span> <span class="main-price discounted">$230.00</span></p>
                                    </div>
                                </div>
                            </div>

                            <div class="col">
                                <div class="single-grid-product mb-40">
                                    <div class="product-image">
                                        <div class="product-label">
                                            <span>-20%</span>
                                        </div>
                                        <a href="single-product.html">
                                            <img src="https://demo.hasthemes.com/nelson-preview/nelson/assets/images/product/product-1.jpg" class="img-fluid" alt="" />
                                            <img src="https://demo.hasthemes.com/nelson-preview/nelson/assets/images/product/product-2.jpg" class="img-fluid" alt="" />
                                        </a>

                                        <div class="product-action">
                                            <ul>
                                                <li><a href="cart.html"><i class="fa fa-cart-plus"></i></a></li>
                                                <li><a href="#quick-view-modal-container" data-toggle="modal" title="Quick View"><i class="fa fa-eye"></i></a></li>
                                                <li><a href="wishlit.html"><i class="fa fa-heart-o"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="product-content">
                                        <h3 class="title"> <a href="single-product.html">Stylish Design Chair</a></h3>
                                        <p class="product-price"><span class="discounted-price">$190.00</span> <span class="main-price discounted">$230.00</span></p>
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

export default ProductDetails
