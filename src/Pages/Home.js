import React, { Component } from 'react'
import AnimatedText from '../Components/AnimatedText'
import AppBar from '../Components/AppBar'
import Footer from '../Components/Footer'
import "./Home.css"
import bose from '../Images/bose.jpg'
import ad from '../Images/advertise.jpg'
import wh from '../Images/warehouse.jpg'
import club from '../Images/club.png'
import mclub from "../Images/clubm.png"

export class Home extends Component {
    render() {
        return (
            <div>
                <AppBar />
                <div className="wallpaper" ></div>
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
                        <p>
                            We are an e-commerce website which provides you 
                            products in wholesale rates. The products are always new, genuine <br />
                            and contains no defects.
                            <br />
                            <br />
                            How it happens? Is explained below.
                        </p>
                    </div>
                </div>

                <div className="wrap" >
                    <div className="desktop-ctn" >
                        <h1 className="h1" >
                            How We Work?
                        </h1>
                        <div className="std-ctn" >
                            <div>
                                <p className="std-para" >
                                    For any product ( camera, earbuds, shoes etc.). The wholesale rate only implies when
                                    it is ordered in bulk.
                                </p>
                            </div>
                            <div>
                                <img alt="i" className="image" src={bose} />
                            </div>
                        </div>

                        <div className="std-ctn" >
                            <div>
                                <p className="std-para" >
                                    So, we choose a product everyday. Advertise it in our groups, social media
                                    and other communities.
                                </p>
                            </div>
                            <div>
                                <img alt="i" className="image" src={ad} />
                            </div>
                        </div>

                        <div className="std-ctn" >
                            <div>
                                <p className="std-para" >
                                    If we are able to find atleast 20 customers to buy, we order it through our network of
                                    trusted retailers, suppliers and warehouses.
                                </p>

                                <p className="std-para" >
                                    Then it is delivered directly from factory/warehouse to you.
                                </p>
                            </div>
                            <div>
                                <img alt="i" className="image" src={wh} />
                            </div>
                        </div>






                        <div className="std-ctn" style={{ alignItems: "center" }} >
                            <div>
                                <h1 className="h1" >
                                    Simply
                                </h1>
                                <p className="wrap" >
                                    <img alt="i" className="m-club" src={mclub} />
                                </p>
                                <p>
                                    <img alt="i" className="club" src={club} />
                                </p>
                                <div>
                                    <p>
                                        So, we are FRAUD or products are not FAKE at all. All products are from genuine
                                        retailer, these are the same retailers who are present on other e-commerce websites
                                        (like amazon, flipkart etc.).
                                    </p>
                                    <p>
                                        All the products are genuine, orignal and of best quality.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div>
                                <div>
                                    <h1 className="h1" className="wrap" style={{ width: "fit-content" }} >
                                        Join Us
                                        <img src="https://img.icons8.com/carbon-copy/50/000000/whatsapp.png" />
                                    </h1>
                                </div>
                                <div style={{ width: "100%" }} >
                                    <p >
                                        Join us on our WhatsApp group. We bring you new products every week.
                                    </p>
                                    <div className="wrap"  >
                                        <button className="std-btn" >
                                            Join
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>



                    </div>
                </div>

                <Footer />
            </div>
        )
    }
}

export default Home
