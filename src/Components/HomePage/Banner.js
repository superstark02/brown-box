import React, { Component } from 'react'
import  bg from "../../Images/pubgbg1.jpg"

export class Banner extends Component {
    render() {
        return (
            <div class="banner-section section pb-40 pb-sm-30 pb-xs-0" style={{ backgroundColor: "transparent", marginTop:"100px" }} >
                <div class="container" style={{ backgroundColor: "transparent" }}  >
                    <div class="row" style={{ backgroundColor: "transparent" }}  >
                        <div class="col-lg-12" style={{ backgroundColor: "transparent" }}  >
                            <div class="single-banner-item pt-100 pt-md-80 pt-sm-70 pt-xs-50 pb-120 pb-md-100 pb-sm-90 pb-xs-50 mb-30 bg-image"
                                style={{
                                    backgroundImage: "url("+bg+")",
                                }}>
                                <div class="sp-banner-content" style={{ background: "transparent" }} >
                                    <span class="normat-text" style={{ color: "white" }} >IMPROVE YOUR GAME</span>
                                    <h2 class="title" style={{ color: "white" }} >MOBILE TRIGGER</h2>
                                    <span class="normat-text" style={{ color: "white" }} >PUBG-BGMI-CODM-FREE FIRE</span>
                                    <a href="/display/Products/1pow" style={{ color: "white" }} ><div style={{ color: "white" }} >VIEW PRODUCT</div></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Banner
