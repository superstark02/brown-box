import React, { Component } from 'react'

export class ProductDisplay extends Component {
    render() {
        return (
            <div>
                <section class="u-align-center u-clearfix u-section-1" id="carousel_a386">
                    <div class="u-clearfix u-sheet u-valign-middle u-sheet-1">
                        <div class="u-container-style u-expanded-width u-product u-product-1">
                            <div
                                class="u-container-layout u-valign-middle-lg u-valign-middle-xl u-valign-top-sm u-valign-top-xs u-container-layout-1">
                                <img alt=""
                                    class="u-expanded-width-sm u-expanded-width-xs u-image u-image-default u-product-control u-image-1"
                                    src="images/35144535-8aaf-1bf7-89eb-153e47df0227.jpg" />
                                <div
                                    class="u-align-center-sm u-align-center-xs u-align-left-lg u-align-left-md u-align-left-xl u-container-style u-expanded-width-sm u-expanded-width-xs u-group u-shape-rectangle u-group-1">
                                    <div class="u-container-layout u-valign-middle u-container-layout-2">
                                        <div class="u-border-3 u-border-custom-color-1 u-line u-line-horizontal u-line-1"></div>

                                        <h2 class="u-custom-font u-font-merriweather u-product-control u-text u-text-1">
                                            <a class="u-product-title-link" href="#">
                                                Sample Product
                                            </a>
                                        </h2>
                                        <div class="u-custom-font u-font-merriweather u-product-control u-product-price u-product-price-1">
                                            <div class="u-price-wrapper u-spacing-10">
                                                <div class="u-hide-price u-old-price" style={{textDecoration: "line-through !important"}}
                                                    wfd-invisible="true">$12
                                                </div>
                                                <div class="u-price u-text-custom-color-1" style={{fontSize: "1.5rem", fontWeight: "700"}}>
                                                    $9.95
                                                </div>
                                            </div>
                                        </div>
                                        <div class="u-product-control u-product-desc u-text u-text-2">
                                            <p>Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis
                                                suscipit ultrices.
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
