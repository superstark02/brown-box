import React, { Component } from 'react'
import Avatars from './Avatars'
import './ProductDisplay.css'

export class GameDisplay extends Component {

    render() {
        return (
            <div className="game-details" style={{ height: "100vh" }} >
                <h1 className="h1" style={{ textAlign: "center", marginBottom: "-100px" }} >
                    Game Of The Week
                </h1>
                <section class="u-align-center u-clearfix u-section-1" id="carousel_a386">
                    <div class="u-clearfix u-sheet u-valign-middle u-sheet-1">
                        <div class="u-container-style u-expanded-width u-product u-product-1">
                            <div style={{ marginTop: "40px" }} class="u-container-layout u-valign-middle-lg u-valign-middle-xl u-valign-top-sm u-valign-top-xs u-container-layout-1">
                                <div className="mobile-wrap" >
                                    <img alt="" style={{ width: "35%" }}
                                        src="https://exotique.com.mt/wp-content/uploads/2021/01/resident-evil-village-3.jpg" />
                                </div>
                                <div
                                    class="u-align-center-sm u-align-center-xs u-align-left-lg u-align-left-md u-align-left-xl u-container-style u-expanded-width-sm u-expanded-width-xs u-group u-shape-rectangle u-group-1">
                                    <div class="u-container-layout u-valign-middle u-container-layout-2">
                                        <div class="u-border-3 u-border-custom-color-1 u-line u-line-horizontal u-line-1"></div>

                                        <h2>
                                            <h1 className="h1" href="#">
                                                Resident Evil: Village
                                            </h1>
                                            <h5 className='category' >
                                                CAPCOM
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

                                        <div style={{display:"flex"}} >
                                            <div className="box" >
                                                X BOX
                                            </div>
                                            <div className="box" >
                                                PS5
                                            </div>
                                            <div className="box" >
                                                PS4
                                            </div>
                                        </div>

                                        <a href="/game-of-the-week"
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

export default GameDisplay
