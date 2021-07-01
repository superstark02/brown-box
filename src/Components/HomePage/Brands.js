import React, { Component } from 'react'
import Carousel from 'react-elastic-carousel';

const brands = [
    "https://upload.wikimedia.org/wikipedia/commons/9/94/Boat_Logo.webp",
    "https://m.media-amazon.com/images/S/aplus-media/sota/8f86e28b-5469-41b6-ba6e-16502d61316b.__CR0,0,300,300_PT0_SX300_V1___.png",
    "https://1000logos.net/wp-content/uploads/2020/07/Jockey-Logo.png",
    "https://upload.wikimedia.org/wikipedia/commons/b/bc/JBL_logo.svg",
    "https://www.androidguys.com/wp-content/uploads/2015/06/SanDisk-Logo.jpg",
    "https://blog.mi.com/en/wp-content/uploads/2021/03/mi_logo_n3_global-2.jpg",
    "https://1000logos.net/wp-content/uploads/2017/12/Casio-Logo.png",
    "https://1000logos.net/wp-content/uploads/2020/05/Kingston-Logo-640x360.png",
]

export class Brands extends Component {
    render() {
        return (
            <div class="brand-section section pb-100 pb-lg-80 pb-md-70 pb-sm-60 pb-xs-50">
                <div class="container">
                    <Carousel itemsToShow={3} itemsToScroll={3} className=" rec rec-arrow " >
                        {
                            brands.map(item=>{
                                return(
                                    <div className="wrap" >
                                        <img src={item} width="150px" />
                                    </div>
                                )
                            })
                        }
                    </Carousel>
                </div>
            </div>
        )
    }
}

export default Brands
