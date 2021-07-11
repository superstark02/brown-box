import React, { Component } from 'react'
import AppBar from "../Components/AppBar"
import { MyFooter } from "../Components/Footer"
import getDoc from '../Database/getDoc'
import Slider from '../Components/Products/Slider'
import Loading from '../Components/Loading'
import axios from 'axios'
import firebase from 'firebase'
import Avatars from '../Components/Avatars'
import xplain from "../Videos/Xplain2.mp4"

const shipping = 45;

export class ProductDetails extends Component {

    state = {
        data: null,
        pincode: null,
        status: "",

        href: "/login"
    }

    componentDidMount() {
        firebase.auth().onAuthStateChanged(user => {
            getDoc(this.props.match.params.doc, this.props.match.params.id).then(snap => {
                this.setState({ data: snap })
            })
            if (user) {
                this.setState({ href: "/login" })
            } else {
                this.setState({ href: "/cart/" + this.props.match.params.doc + "/1pow" })
            }
        });
    }

    checkService = (e) => {
        e.preventDefault();
        this.setState({ status: "Please Wait" })

        axios.post('https://us-central1-pine-valley-7820d.cloudfunctions.net/checkService', { pincode: this.state.pincode }).then(res => {
            if (res.data.status.toString() === "200") {
                this.setState({ status: "Delivery Available" })
            }
            else {
                this.setState({ status: "Sorry, delivery not available in your area" })
            }
        });
    }

    render() {
        if (!this.state.data) {
            return <div className="wrap" style={{ height: "100vh" }} ><Loading /></div>
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
                                                <Slider images={[
                                                    {
                                                        original: this.state.data.image,
                                                        thumbnail: this.state.data.image
                                                    },
                                                    {
                                                        original: this.state.data.image1,
                                                        thumbnail: this.state.data.image1
                                                    },
                                                    {
                                                        original: this.state.data.image2,
                                                        thumbnail: this.state.data.image2
                                                    },
                                                    {
                                                        original: this.state.data.image3,
                                                        thumbnail: this.state.data.image3
                                                    },
                                                ]} />
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

                                                    {
                                                        this.state.data.id === "1pow" || this.state.data.id === "1gow" ? (
                                                            <span style={{ fontSize: "15px" }} >Shipping (ALL INDIA): &#8377;{shipping}</span>
                                                        ) : (
                                                            <span style={{ fontSize: "15px" }} >Shipping (ALL INDIA): Will be revealed after the launch of the product </span>
                                                        )
                                                    }
                                                </div>
                                                <div className="single-product-sharing">
                                                    <h3>COMPARE PRICE: </h3>
                                                    <ul>
                                                        <li><a href={this.state.data.amazon}><img src={"https://www.pngarea.com/pngm/6/5103627_amazon-logo-png-icon-amazon-logo-png-transparent.png"} width="40px" /></a></li>
                                                        <li><a href={this.state.data.flipkart}><img src={"http://www.mountaincolours.in/uploads/clients/1551518604.jpg"} width="40px" /></a></li>
                                                    </ul>
                                                </div>
                                                <div className="product-description">
                                                    <p>
                                                        {this.state.data.highlights}
                                                    </p>
                                                </div>
                                                <div>
                                                    {
                                                        this.state.data.id === "1pow" || this.state.data.id === "1gow" ? (
                                                            <Avatars />
                                                        ) : (
                                                            <div></div>
                                                        )
                                                    }
                                                </div>
                                                <div style={{ marginTop: "30px" }} >
                                                    <form onSubmit={this.checkService} >
                                                        <label style={{ color: "grey", fontSize: "10px" }} >Check Delivery Service Avaialbility</label>
                                                        <div>
                                                            <input required placeholder="Pincode" onChange={(e) => { this.setState({ pincode: e.target.value }) }} />
                                                            <input type="submit" style={{ backgroundColor: "black", color: "white" }} />
                                                        </div>
                                                        <p style={{ fontSize: "12px", color: "green", outline: "none" }} >
                                                            {this.state.status}
                                                        </p>
                                                    </form>

                                                </div>
                                                <div className="single-product-quantity">
                                                    {
                                                        this.state.data.id === "1pow" || this.state.data.id === "1gow" ? (
                                                            <a href={"/cart/" + this.props.match.params.doc + "/1pow"} className="add-to-link">
                                                                <button className="btn" style={{ padding: "10px 30px" }} ><i className="fa fa-shopping-bag"></i>buy</button>
                                                            </a>
                                                        ) : (
                                                            <button className="btn" style={{ padding: "10px 30px" }} ><i className="fa fa-shopping-bag"></i>Avaialble From {this.state.data.from}</button>
                                                        )
                                                    }
                                                </div>
                                                <p style={{ color: "grey" }} >
                                                    This product will be shipped on the last day of the week - {this.state.data.to}<br />
                                                    for all buyers. To know the process go <a href="/how-we-work" ><b>here</b></a>.
                                                </p>
                                                <div className="product-meta">
                                                    <span className="posted-in">
                                                        Category: {this.state.data.category}
                                                    </span>
                                                </div>

                                            </div>
                                            {/*Product Details Content End*/}
                                        </div>

                                        {/*Product Description Review Section Start*/}
                                        <div class="product-description-review-section section">
                                            <div class="container">
                                                <div class="row">
                                                    <div class="col-md-12">
                                                        <div class="product-review-tab section">
                                                            {/*Review And Description Tab Menu Start*/}
                                                            <ul class="nav dec-and-review-menu">
                                                                <li>
                                                                    <a class="active" data-toggle="tab" href="#description">Description</a>
                                                                </li>
                                                            </ul>
                                                            {/*Review And Description Tab Menu End*/}
                                                            {/*Review And Description Tab Content Start*/}
                                                            <div class="tab-content product-review-content-tab" id="myTabContent-4">

                                                                <div class="tab-pane fade active show" id="description">
                                                                    <div class="single-product-description">
                                                                        {this.state.data.description}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            {/*Review And Description Tab Content End*/}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="product-description-review-section section">
                                            <div class="container">
                                                <div class="row">
                                                    <div class="col-md-12">
                                                        <div class="product-review-tab section">
                                                            {/*Review And Description Tab Menu Start*/}
                                                            <ul class="nav dec-and-review-menu">
                                                                <li>
                                                                    <a class="active" data-toggle="tab" href="#reviews">Product Review</a>
                                                                </li>
                                                            </ul>
                                                            {/*Review And Description Tab Menu End*/}
                                                            {/*Review And Description Tab Content Start*/}
                                                            <div class="tab-content product-review-content-tab" id="myTabContent-4">

                                                                <div class="tab-pane fade active show" id="description">
                                                                    <div class="single-product-description">
                                                                        <iframe
                                                                            width="100%"
                                                                            height="500"
                                                                            src={this.state.data.video}
                                                                            title="YouTube video player"
                                                                            frameborder="0"
                                                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                                            allowfullscreen>
                                                                        </iframe>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            {/*Review And Description Tab Content End*/}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/*Product Description Review Section Start*/}

                                        <div class="product-description-review-section section">
                                            <div class="container">
                                                <div class="row">
                                                    <div class="col-md-12">
                                                        <div class="product-review-tab section">
                                                            {/*Review And Description Tab Menu Start*/}
                                                            <ul class="nav dec-and-review-menu">
                                                                <li>
                                                                    <a class="active" data-toggle="tab" href="#reviews">How It Works</a>
                                                                </li>
                                                            </ul>
                                                            {/*Review And Description Tab Menu End*/}
                                                            {/*Review And Description Tab Content Start*/}
                                                            <div class="tab-content product-review-content-tab" id="myTabContent-4">

                                                                <div class="tab-pane fade active show" id="description">
                                                                    <div class="single-product-description">
                                                                        {/*<video width="100%" controls  >
                                                                            <source src={xplain} />
                                                                        </video>*/}
                                                                        <div>
                                                                            <div class="features-section section pt-30 pt-lg-15 pt-md-0 pt-sm-0 pt-xs-15">
                                                                                <div class="container">
                                                                                    <div class="row">

                                                                                        <div class="col-lg-4 col-md-6">
                                                                                            <div class="single-feature mb-30">
                                                                                                <div class="feature-image">
                                                                                                    <img src="https://img.icons8.com/ios/50/000000/controller.png" class="img-fluid" alt="" />
                                                                                                </div>
                                                                                                <div class="feature-content">
                                                                                                    <h4 class="title">One Product Per Week</h4>
                                                                                                    <p class="short-desc">We post one <b>product</b> per week. Interested users buy that product.</p>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div class="col-lg-4 col-md-6">
                                                                                            <div class="single-feature mb-30">
                                                                                                <div class="feature-image">
                                                                                                    <img src="https://img.icons8.com/ios/50/000000/discount--v1.png" class="img-fluid" alt="" />
                                                                                                </div>
                                                                                                <div class="feature-content">
                                                                                                    <h4 class="title">Buyers</h4>
                                                                                                    <p class="short-desc">When we receive atleast 30 orders by the end of the week (Sunday). Our partnered companies deliver the product to you.</p>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div class="col-lg-4 col-md-6">
                                                                                            <div class="single-feature mb-30">
                                                                                                <div class="feature-image">
                                                                                                    <img src="https://demo.hasthemes.com/nelson-preview/nelson/assets/images/icons/feature-3.png" class="img-fluid" alt="" />
                                                                                                </div>
                                                                                                <div class="feature-content">
                                                                                                    <h4 class="title">No Worries</h4>
                                                                                                    <p class="short-desc">
                                                                                                        If orders are less than 30, we do not deliver the product and refund your money instantly.
                                                                                                    </p>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>

                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div>
                                                                            In case of any confusion, feel free to contact through <a href="https://wa.me/919319977851?text=Hi" ><b>WhatsApp</b></a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            {/*Review And Description Tab Content End*/}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/*Product Description Review Section Start*/}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Single Product Section End */}

                <MyFooter />
            </div>
        )
    }
}

export default ProductDetails
