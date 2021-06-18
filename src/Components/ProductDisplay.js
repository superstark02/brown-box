import React, { Component } from 'react'
import Avatars from './Avatars'
import './ProductDisplay.css'

const product = "https://rukminim1.flixcart.com/image/416/416/kmccosw0/gaming-accessory-kit/pubg-gamepad-trigger/d/v/j/pubg-gamepad-trigger-nehmaps-original-imagf8xjq72ewzw3.jpeg?q=70"

export class ProductDisplay extends Component {

    render() {
        return (
            <div>
                <h1 className="h1" style={{ textAlign: "center", marginBottom: "-100px" }} >
                    Product Of The Week
                </h1>
                <section class="u-align-center u-clearfix u-section-1" id="carousel_a386">
                    <div class="u-clearfix u-sheet u-valign-middle u-sheet-1">
                        <div class="u-container-style u-expanded-width u-product u-product-1">
                            <div
                                class="u-container-layout u-valign-middle-lg u-valign-middle-xl u-valign-top-sm u-valign-top-xs u-container-layout-1">
                                <img alt="" width="50%" className="floating u-expanded-width-sm u-expanded-width-xs  u-image-default u-product-control "
                                    src={product} />
                                <div
                                    class="u-align-center-sm u-align-center-xs u-align-left-lg u-align-left-md u-align-left-xl u-container-style u-expanded-width-sm u-expanded-width-xs u-group u-shape-rectangle u-group-1">
                                    <div class="u-container-layout u-valign-middle u-container-layout-2">
                                        <div class="u-border-3 u-border-custom-color-1 u-line u-line-horizontal u-line-1"></div>

                                        <h2>
                                            <h1 className="h1" href="#">
                                                AirLuk PUBG Mobile Trigger
                                            </h1>
                                            <h5 className='category' >
                                                MOBILE GAMING
                                            </h5>
                                        </h2>
                                        <div style={{ marginTop: "10px" }}  >
                                            <div className="disdivlay-mrp" style={{ marginTop: "10px" }} >
                                                <strike>&#8377;399.00</strike>
                                            </div>
                                            <div class="u-price u-text-custom-color-1" style={{fontWeight: "700", margin:'10px 0px',fontSize:"25px" }}>
                                                &#8377;45.00
                                            </div>
                                            <div className="display-mrp" >
                                                Save &#8377;574
                                            </div>
                                        </div>

                                        <div>
                                            <Avatars />
                                        </div>

                                        <div style={{margin:"20px"}}>
                                            <p>
                                                <li>
                                                    Metal triggers
                                                </li>
                                                <li>
                                                    Transparent body
                                                </li>
                                                <li>
                                                    Consuctive foam
                                                </li>
                                                <li>
                                                    Adjustable clip
                                                </li>
                                            </p>
                                        </div>
                                        <a href="/product"
                                            class="u-btn u-button-style u-custom-color-1 u-hover-grey-75 u-product-control u-text-white u-btn-1">VIEW
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default ProductDisplay
