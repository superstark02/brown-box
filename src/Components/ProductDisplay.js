import React, { Component } from 'react'
import product from '../Images/sgrtl.png'
import './ProductDisplay.css'

export class ProductDisplay extends Component {
    render() {
        return (
            <div>
                <h1 className="h1" style={{ textAlign: "center", marginBottom:"-100px" }} >
                    Product Of The Week
                </h1>
                <section class="u-align-center u-clearfix u-section-1" id="carousel_a386">
                    <div class="u-clearfix u-sheet u-valign-middle u-sheet-1">
                        <div class="u-container-style u-expanded-width u-product u-product-1">
                            <div
                                class="u-container-layout u-valign-middle-lg u-valign-middle-xl u-valign-top-sm u-valign-top-xs u-container-layout-1">
                                <img alt=""
                                    class="u-expanded-width-sm u-expanded-width-xs u-image u-image-default u-product-control u-image-1"
                                    src={product} />
                                <div
                                    class="u-align-center-sm u-align-center-xs u-align-left-lg u-align-left-md u-align-left-xl u-container-style u-expanded-width-sm u-expanded-width-xs u-group u-shape-rectangle u-group-1">
                                    <div class="u-container-layout u-valign-middle u-container-layout-2">
                                        <div class="u-border-3 u-border-custom-color-1 u-line u-line-horizontal u-line-1"></div>

                                        <h2 class="u-custom-font u-font-merriweather u-product-control u-text u-text-1">
                                            <h1 className="h1" href="#">
                                                Stone Grenade RTL
                                            </h1>
                                            <h5 className='category' >
                                                BLUETOOTH SPEAKERS
                                            </h5>
                                        </h2>
                                        <div>
                                            <p className="display-mrp" >
                                                <strike>&#8377;1,549.00</strike>
                                            </p>
                                            <p class="u-price u-text-custom-color-1" style={{ fontSize: "1.5rem", fontWeight: "700" }}>
                                                &#8377;1,002.00
                                            </p>
                                            <p className="display-mrp" >
                                                Save &#8377;574
                                            </p>
                                        </div>
                                        <div class="u-product-control u-product-desc u-text u-text-2">
                                            <p>
                                                <li>
                                                    Up to 7 hours of Detonation
                                                </li>
                                                <li>
                                                    HD explosive sound
                                                </li>
                                                <li>
                                                    Aligned easy access control
                                                </li>
                                                <li>
                                                    Sharp fabric coated IPX 6 finish
                                                </li>
                                            </p>
                                        </div>
                                        <a href="https://nicepage.com/c/table-website-templates"
                                            class="u-btn u-button-style u-custom-color-1 u-hover-grey-75 u-product-control u-text-white u-btn-1">Add to Cart
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
