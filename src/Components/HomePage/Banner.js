import React, { Component } from 'react'
import bg from "../../Images/banner.jpg"
import Pow from './Pow'

export class Banner extends Component {
    render() {
        return (
            <div class="banner-section section pb-40 pb-sm-30 pb-xs-0" style={{ backgroundColor: "transparent", margin:"50px 0px", marginTop:"100px"}} >
                <div class="container" style={{ backgroundColor: "transparent", boxShadow:"0px 0px 30px rgba(255,218,17, 0.5)",padding:"0", paddingBottom:"10px"  }}  >
                    <div class="row" style={{ backgroundColor: "transparent" }}  >
                        <div class="col-lg-12" style={{ backgroundColor: "transparent" }}  >
                            <div class="single-banner-item pt-100 pt-md-80 pt-sm-70 pt-xs-50 pb-120 pb-md-100 pb-sm-90 pb-xs-50 mb-30 bg-image"
                                style={{
                                    backgroundImage: "url("+bg+")",
                                }}>
                                <div class="sp-banner-content" style={{ background: "transparent" }} >
                                    <span class="normat-text" style={{ color: "black" }} >3 OTG & USB TYPES</span>
                                    <h2 class="title" style={{ color: "black" }} >6 IN 1 UBON CABLE</h2>
                                    <span class="normat-text" style={{ color: "black" }} >PERFECT FOR MOBILE GAMERS</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Pow/>
                </div>
            </div>
        )
    }
}

export default Banner
