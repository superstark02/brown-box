import React, { Component } from 'react'
import AnimatedText from '../Components/AnimatedText'
import AppBar from '../Components/AppBar'
import { MyFooter } from '../Components/Footer'
import "./Home.css"
import Brands from '../Components/Brands'
import HowWeWork from '../Components/HowWeWork'
import ProductDisplay from '../Components/ProductDisplay'
import MyList from '../Components/MyList'
import MobileList from '../Components/MobileList'
import { FaInstagram } from 'react-icons/fa'
import GameOfTheWeek from "../Components/GameOfTheWeek"
import xplain from "../Videos/Xplain.mp4"

export class Home extends Component {
    render() {
        return (
            <div>
                <AppBar />
                <div style={{ position: 'relative' }} >
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
                                We are an e-commerce startup that provides you products at wholesale rates. <br />The products are always the latest, new and genuine.
                                <br />
                                <br />
                                How we work? How such low rates? It's explained below.
                            </p>
                            <div>
                                <a href="#pow" >
                                    <button className="std-btn" >
                                        Product Of The Week
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
                                    <br />
                                    <p>
                                        To buy/explore join our <a href="https://www.instagram.com/brownbox_india/" >community</a>
                                    </p>
                                </div>
                                
                                <div className="wrap" >
                                    <video width="100%" controls  >
                                        <source src={xplain} type="video/mp4" />
                                    </video>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div>
                                <div>
                                    <h1 className="h1" style={{ width: "fit-content" }} >
                                        Upcoming
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
                                <div id="pow" >
                                    <ProductDisplay />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <GameOfTheWeek />

                <div className="wrap" >
                    <div className="desktop-ctn" >
                        <div>
                            <div>
                                <div>
                                    <h1 className="h1" style={{ width: "fit-content" }} >
                                        Join Us
                                    </h1>
                                </div>
                                <div style={{ width: "100%" }} >
                                    <p >
                                        Join our community. We bring you new products every week.
                                    </p>
                                    <div className="wrap"  >
                                        <a href="https://www.instagram.com/brownbox_india/" style={{ textDecoration: "null" }} >
                                            <button className="std-btn wrap" >
                                                Join Us
                                                <FaInstagram style={{ fontSize: "30px", margin: "0px 5px" }} />
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

                <MyFooter />
            </div>
        )
    }
}

export default Home
