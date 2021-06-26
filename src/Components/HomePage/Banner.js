import React, { Component } from 'react'

export class Banner extends Component {
    render() {
        return (
            <div class="banner-section section pt-30">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6 col-md-6 col-sm-12">
                            {/* Single Banner Start */}
                            <div class="single-banner-item mb-30">
                                <div class="banner-image">
                                    <a href="/display/Games/1gow">
                                        <img height="360px" src="https://wallpaperaccess.com/full/4021309.png" alt="" />
                                    </a>
                                </div>
                                <div class="banner-content">
                                    <h3 class="title" style={{color:"white"}} >Resident Evil <br /> Village ( XBOX - PS4/5 )</h3>
                                    <a href="/display/Games/1gow" style={{color:"white"}} >GAME OF THE WEEK</a>
                                </div>
                            </div>
                            {/* Single Banner End */}
                        </div>
                        <div class="col-lg-6 col-md-6 col-sm-12">
                            {/* Single Banner Start */}
                            <div class="single-banner-item mb-30">
                                <div class="banner-image">
                                    <a href="/display/Products/1pow">
                                        <img height="360px" src="https://coolthemestores.com/wp-content/uploads/2021/01/pubg_featured.jpg" alt="" />
                                    </a>
                                </div>
                                <div class="banner-content">
                                    <h3 class="title"style={{color:"white"}}>MOBILE TRIGGER<br />PUBG-BGMI-CODM</h3>
                                    <a href="/display/Products/1pow"style={{color:"white"}}>PRODUCT OF THE WEEK</a>
                                </div>
                            </div>
                            {/* Single Banner End */}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Banner
