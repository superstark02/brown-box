import React, { Component } from 'react'
import AppBar from "../Components/AppBar"
import { MyFooter } from "../Components/Footer"
import getDoc from '../Database/getDoc'

const shipping = 45;

export class ProductDetails extends Component {

    state = {
        data: null
    }

    componentDidMount() {
        getDoc("Products", this.props.match.params.id).then(snap => {
            this.setState({ data: snap })
        })
    }

    render() {
        if (!this.state.data) {
            return <div>Please Wait</div>
        }
        return (
            <div>
                <AppBar />
                <div className="single-product-section section pt-60 pt-lg-40 pt-md-30 pt-sm-20 pt-xs-25 pb-100 pb-lg-80 pb-md-70 pb-sm-30 pb-xs-20">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="shop-area">
                                    <div className="row">
                                        <div className="col-md-6 pr-35 pr-lg-15 pr-md-15 pr-sm-15 pr-xs-15">
                                            {/* Product Details Left */}
                                            <div className="product-details-left">

                                            </div>
                                            {/*Product Details Left */}
                                        </div>
                                        <div className="col-md-6">
                                            {/*Product Details Content Start*/}
                                            <div className="product-details-content">
                                                <h2>{this.state.data.name}</h2>
                                                <div className="single-product-reviews">
                                                    <i className="fa fa-star active"></i>
                                                    <i className="fa fa-star active"></i>
                                                    <i className="fa fa-star active"></i>
                                                    <i className="fa fa-star active"></i>
                                                    <i className="fa fa-star-o"></i>
                                                    <a className="review-link" href="#">(Amazon's Best Seller)</a>
                                                </div>
                                                <div className="single-product-price">
                                                    <span className="price new-price">&#8377;{this.state.data.sp}</span><br />
                                                    <span className="regular-price" style={{ fontSize: "15px" }} >&#8377;{this.state.data.mrp}</span> <br></br>
                                                    <span style={{ fontSize: "15px" }} >Shipping (ALL INDIA): &#8377;{shipping}</span>
                                                </div>
                                                <div className="single-product-sharing">
                                                    <h3>COMPARE PRICE: </h3>
                                                    <ul>
                                                        <li><a href="#"><i className="fa fa-amazon"></i></a></li>
                                                        <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                                    </ul>
                                                </div>
                                                <div className="product-description">
                                                    <p>
                                                        {this.state.data.highlights}
                                                    </p>
                                                </div>
                                                <div className="product-countdown-two" data-countdown2="2020/06/01"></div>
                                                <div className="single-product-quantity">
                                                    <a href="/cart" className="add-to-link">
                                                        <button className="btn" style={{ padding: "10px 30px" }} ><i className="fa fa-shopping-bag"></i>buy</button>
                                                    </a>
                                                </div>
                                                <div className="product-meta">
                                                    <span className="posted-in">
                                                        Category: {this.state.data.category}
                                                    </span>
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

                <div className="product-section section pt-100 pt-lg-80 pt-md-70 pt-sm-60 pt-xs-50 pb-60 pb-lg-40 pb-md-30 pb-sm-20 pb-xs-15">
                    <div className="container">

                        <div className="row">
                            <div className="col">
                                <div className="section-title text-center mb-50 mb-xs-20">
                                    <h2>Related Products</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row product-slider">
                            <div className="col">
                                <div className="single-grid-product mb-40">
                                    <div className="product-image">
                                        <div className="product-label">
                                            <span>-20%</span>
                                        </div>
                                        <a href="single-product.html">
                                            <img src="https://demo.hasthemes.com/nelson-preview/nelson/assets/images/product/product-1.jpg" className="img-fluid" alt="" />
                                            <img src="https://demo.hasthemes.com/nelson-preview/nelson/assets/images/product/product-2.jpg" className="img-fluid" alt="" />
                                        </a>

                                        <div className="product-action">
                                            <ul>
                                                <li><a href="cart.html"><i className="fa fa-cart-plus"></i></a></li>
                                                <li><a href="#quick-view-modal-container" data-toggle="modal" title="Quick View"><i className="fa fa-eye"></i></a></li>
                                                <li><a href="wishlit.html"><i className="fa fa-heart-o"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="product-content">
                                        <h3 className="title"> <a href="single-product.html">Stylish Design Chair</a></h3>
                                        <p className="product-price"><span className="discounted-price">$190.00</span> <span className="main-price discounted">$230.00</span></p>
                                    </div>
                                </div>
                            </div>

                            <div className="col">
                                <div className="single-grid-product mb-40">
                                    <div className="product-image">
                                        <div className="product-label">
                                            <span>-20%</span>
                                        </div>
                                        <a href="single-product.html">
                                            <img src="https://demo.hasthemes.com/nelson-preview/nelson/assets/images/product/product-1.jpg" className="img-fluid" alt="" />
                                            <img src="https://demo.hasthemes.com/nelson-preview/nelson/assets/images/product/product-2.jpg" className="img-fluid" alt="" />
                                        </a>

                                        <div className="product-action">
                                            <ul>
                                                <li><a href="cart.html"><i className="fa fa-cart-plus"></i></a></li>
                                                <li><a href="#quick-view-modal-container" data-toggle="modal" title="Quick View"><i className="fa fa-eye"></i></a></li>
                                                <li><a href="wishlit.html"><i className="fa fa-heart-o"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="product-content">
                                        <h3 className="title"> <a href="single-product.html">Stylish Design Chair</a></h3>
                                        <p className="product-price"><span className="discounted-price">$190.00</span> <span className="main-price discounted">$230.00</span></p>
                                    </div>
                                </div>
                            </div>

                            <div className="col">
                                <div className="single-grid-product mb-40">
                                    <div className="product-image">
                                        <div className="product-label">
                                            <span>-20%</span>
                                        </div>
                                        <a href="single-product.html">
                                            <img src="https://demo.hasthemes.com/nelson-preview/nelson/assets/images/product/product-1.jpg" className="img-fluid" alt="" />
                                            <img src="https://demo.hasthemes.com/nelson-preview/nelson/assets/images/product/product-2.jpg" className="img-fluid" alt="" />
                                        </a>

                                        <div className="product-action">
                                            <ul>
                                                <li><a href="cart.html"><i className="fa fa-cart-plus"></i></a></li>
                                                <li><a href="#quick-view-modal-container" data-toggle="modal" title="Quick View"><i className="fa fa-eye"></i></a></li>
                                                <li><a href="wishlit.html"><i className="fa fa-heart-o"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="product-content">
                                        <h3 className="title"> <a href="single-product.html">Stylish Design Chair</a></h3>
                                        <p className="product-price"><span className="discounted-price">$190.00</span> <span className="main-price discounted">$230.00</span></p>
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
