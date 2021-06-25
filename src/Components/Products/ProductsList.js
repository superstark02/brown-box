import React, { Component } from 'react'
import getCollection from '../../Database/getCollection';

export class ProductsList extends Component {

    state = {
        data: null
    }

    componentDidMount() {
        getCollection("Products").then(snap => {
            this.setState({ data: snap })
        })
    }

    render() {
        if (this.state.data) {
            return (
                <div class="product-section section pt-70 pt-lg-50 pt-md-40 pt-sm-30 pt-xs-20 pb-55 pb-lg-35 pb-md-25 pb-sm-15 pb-xs-5">
                    <div class="container">
                        <div class="row">
                            <div class="col">
                                <div class="section-title text-center mb-15">
                                    <h2>Upcoming Products</h2>
                                </div>
                                <div class="product-tab mb-50 mb-sm-30 mb-xs-20">
                                    <ul class="nav">
                                        <li><a class="active show" data-toggle="tab" href="#home">GAMING</a></li>
                                        <li><a data-toggle="tab" href="#office">ACCESSORIES</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="tab-content">
                            <div id="home" class="tab-pane fade active show">
                                <div class="row">
                                    {
                                        this.state.data.map((item, index) => {
                                            return (
                                                <div class="col-lg-3 col-md-4 col-sm-6">
                                                    {/* Single Grid product Start */}
                                                    <div class="single-grid-product mb-40">
                                                        <div class="product-image" style={{height:"300px"}} >
                                                            <a href={"/product/"+item.id}>
                                                                <img src={item.image} width="50%" alt="" />
                                                            </a>

                                                            {/*<div class="product-action">
                                                                <ul>
                                                                    <li><a href="cart.html"><i class="fa fa-cart-plus"></i></a></li>
                                                                    <li><a href="#quick-view-modal-container" data-toggle="modal" title="Quick View"><i class="fa fa-eye"></i></a></li>
                                                                    <li><a href="wishlit.html"><i class="fa fa-heart-o"></i></a></li>
                                                                </ul>
                                                            </div>*/}
                                                        </div>
                                                        <div class="product-content">
                                                            <h3 class="title"> <a href="single-product.html">{item.name}</a></h3>
                                                            <p class="product-price"><span class="discounted-price">${item.sp}</span> <span class="main-price discounted">${item.mrp}</span></p>
                                                        </div>
                                                    </div>
                                                    {/* Single Grid product End */}
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            )
        }
        else {
            return (
                <div></div>
            )
        }
    }
}

export default ProductsList
