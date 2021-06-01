import React, { Component } from 'react'
import AnimatedText from '../Components/AnimatedText'
import AppBar from '../Components/AppBar'
import Footer from '../Components/Footer'
import "./Home.css"
import Brands from '../Components/Brands'
import HowWeWork from '../Components/HowWeWork'
import ProductDisplay from '../Components/ProductDisplay'
import MyList from '../Components/MyList'
import MobileList from '../Components/MobileList'

export class Home extends Component {
    render() {
        return (
            <div>
                <AppBar />
                <div style={{position:'relative'}} >
                    <div className="wallpaper" >
                    </div>
                    <div className="overlay wrap" >
                        <div className="content" >
                            <div>
                                <div style={{ fontSize: "6vw" }} className="font-a" >
                                    brown box.
                            </div>
                            </div>
                            <div>
                                <AnimatedText />
                            </div>
                            <p className="intro" >
                                We are an e-commerce website that provides you products at wholesale rates. <br />The products are always the latest, new and genuine.
                            <br />
                                <br />
                            How we work? Is explained below.
                        </p>
                            <div>
                                <a href="/product" >
                                    <button className="std-btn" >
                                        Products
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="wrap" >
                    <div className="desktop-ctn" >
                        <div className="std-ctn" style={{ alignItems: "center" }} >
                            <div>
                                <div>
                                    <HowWeWork />
                                </div>
                                <div>
                                    <p>
                                        All products are from genuine
                                        retailer, these are the same retailers who are present on other e-commerce websites
                                        (like amazon, flipkart etc.).
                                    </p>
                                    <p>
                                        To buy/explore join our group.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div>
                                <div>
                                    <h1 className="h1" style={{ width: "fit-content" }} >
                                        Trending
                                    </h1>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="desktop" >
                    <MyList />
                </div>
                <div className="mobile" >
                    <MobileList />
                </div>

                <div className="wrap" >
                    <div className="desktop-ctn" >

                        <div>
                            <div>
                                <div>
                                    <ProductDisplay />
                                </div>
                            </div>
                        </div>

                        <div>
                            <div>
                                <div>
                                    <h1 className="h1" style={{ width: "fit-content" }} >
                                        Join Us
                                        <img src="https://img.icons8.com/carbon-copy/50/000000/whatsapp.png" />
                                    </h1>
                                </div>
                                <div style={{ width: "100%" }} >
                                    <p >
                                        Join us on our WhatsApp group. We bring you new products every week.
                                    </p>
                                    <div className="wrap"  >
                                        <a href="https://chat.whatsapp.com/Ky0jpeWgviDJ4YkY2WsJHr" >
                                            <button className="std-btn" >
                                                Join
                                        </button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <Brands />
                        </div>


                    </div>
                </div>

                <Footer />
            </div>
        )
    }
}

export default Home
