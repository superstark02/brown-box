import React, { Component } from 'react'

const brands = [
    "https://upload.wikimedia.org/wikipedia/commons/9/94/Boat_Logo.webp",
    "https://m.media-amazon.com/images/S/aplus-media/sota/8f86e28b-5469-41b6-ba6e-16502d61316b.__CR0,0,300,300_PT0_SX300_V1___.png",
    "https://static.wikia.nocookie.net/logopedia/images/3/30/Xiaomi_logo_%282010%29.svg/revision/latest/scale-to-width-down/150?cb=20210109233631",
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
            <div style={{marginTop:"100px"}} >
                <div style={{ display: "flex", alignItems: "center", flexWrap: "wrap" }} >
                    {
                        brands.map(item => {
                            return (
                                <div>
                                    <img src={item} alt="i" width="70px" style={{ margin: "20px" }} />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

export default Brands
