import React, { Component } from 'react'
import AnimatedText from '../Components/AnimatedText'
import AppBar from '../Components/AppBar'
import Footer from '../Components/Footer'
import "./Home.css"
import club from '../Images/club.png'
import mclub from "../Images/clubm.png"
import List from '../Components/List'
import Brands from '../Components/Brands'

export class Home extends Component {
    render() {
        return (
            <div>
                <AppBar />
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
                            <a href="https://chat.whatsapp.com/Ky0jpeWgviDJ4YkY2WsJHr" >
                                <button className="std-btn" >
                                    Products
                                </button>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="wrap" >
                    <div className="desktop-ctn" >
                        <div className="std-ctn" style={{ alignItems: "center" }} >
                            <div>
                                <h1 className="h1" >
                                    How We Work
                                </h1>
                                <div>
                                    <p>
                                        We launch a product every week. When at least 20 customers are ready to buy a product. We contact our trusted network of
                                        retailers and deliver it.
                                    </p>
                                </div>
                                <p className="wrap" >
                                    <img alt="i" className="m-club" src={mclub} />
                                </p>
                                <p>
                                    <img alt="i" className="club" src={club} />
                                </p>
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
                                <div>
                                    <List />
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
