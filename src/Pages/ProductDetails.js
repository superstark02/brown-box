import React, { Component } from 'react'
import AppBar from "../Components/AppBar"
import { MyFooter } from "../Components/Footer"
import getDoc from '../Database/getDoc'
import Slider from '../Components/Products/Slider'
import Loading from '../Components/Loading'
import checkService from '../Database/checkService'

const shipping = 45;

export class ProductDetails extends Component {

    state = {
        data: null
    }

    componentDidMount() {
        getDoc(this.props.match.params.doc, this.props.match.params.id).then(snap => {
            this.setState({ data: snap })
        })

        checkService();
    }

    render() {
        if (!this.state.data) {
            return <div className="wrap" style={{height:"100vh"}} ><Loading/></div>
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
                                                <div className="product-countdown-two" data-countdown2="2020/06/01"></div>
                                                <div className="single-product-quantity">
                                                    {
                                                        this.state.data.id === "1pow" || this.state.data.id === "1gow" ? (
                                                            <a href={"/cart/"+this.props.match.params.doc+"/"+this.state.data.id} className="add-to-link">
                                                                <button className="btn" style={{ padding: "10px 30px" }} ><i className="fa fa-shopping-bag"></i>buy</button>
                                                            </a>
                                                        ) : (
                                                            <button className="btn" style={{ padding: "10px 30px" }} ><i className="fa fa-shopping-bag"></i>Avaialble From {this.state.data.from}</button>
                                                        )
                                                    }
                                                </div>
                                                <p style={{color:"grey"}} >
                                                    This product will be shipped on the last day of the week - {this.state.data.to}<br/>
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
