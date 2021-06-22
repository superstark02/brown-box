import React, { Component } from 'react'
import "./About.css"
import AppBar from '../Components/AppBar'
import howwework from "../Images/howwework.png"
import whatwedo from "../Images/WhatIsBrownBox.png"
import { MyFooter } from '../Components/Footer'

const tag = <a href="https://wa.me/919319977851?text=Hi">here</a>

const faqs = [
    {
        q: "When my product will be shipped?",
        a: "As soon as the given product has 20 buyers (i.e. when more than 20 users buy the product), then the product will be shipped and reach you within maximum 5 days",
    },
    {
        q: "What if product has less than 20 buyers even after a week?",
        a: "In that case, your money will be refunded to your bank account instantly",
    },
    {
        q: "How to track my order?",
        a: "You can track your order by clicking on the link provided in your email",
    },
    {
        q: "How to cancel an order?",
        a: "Once shipping is started, it cannot be cancelled. Before shipping you can cancel your orderby messaging ",
        tag: tag
    },
    {
        q: "How to return an order?",
        a: "You can return order only in cases of defect or wrong product. You can return order by messaging ",
        tag: tag
    },
    {
        q: "My issue is not listed here",
        a: "If you have more queries: mail at mail@pidgin.online, or contact +91 99101 97196"
    }

]



export class About extends Component {
    render() {
        return (
            <div>
                <AppBar />
                <div style={{ position: 'relative' }} >
                    <div className="wallpaper-about" >
                    </div>
                    <div className="overlay wrap" style={{ height: "50vh" }} >
                        <div className="content" >
                            <div>
                                <div style={{ fontSize: "6vw" }} className="font-a" >
                                    about us
                                </div>
                            </div>
                            <p className="intro" >
                                Know about our service
                            </p>
                        </div>
                    </div>
                </div>

                <div className="wrap" >
                    <div className="desktop-ctn" >
                        <div>
                            <h1 className="h1" style={{ width: "fit-content" }} >
                                What We Do?
                            </h1>
                        </div>
                        <div className="std-ctn" style={{ alignItems: "center" }} >
                            <div style={{ width: "100%", fontSize: "20px" }} >
                                We provide products at very low rates. Wether it is latest phone or new game.<br /><br />
                                Our products are genuine and new. We introduce the concept of team buying.<br /><br />
                                <li>
                                    We launch a product every week, when we recieve more than 30 orders of that product we ship it<br />
                                </li>
                                <br />
                                <li>
                                    In case the number of orders received is less than 20 we instantly refund your paid amount<br />
                                </li>
                                <br />
                                <li>
                                    Shipment is done within 2-3 days. In worst case senarios (COVID19) it may take maximum 6 days<br />
                                </li>
                            </div>
                            <div className="wrap" >
                                <img src={whatwedo} alt="i" width="100%" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="wrap" >
                    <div className="desktop-ctn" >
                        <div>
                            <h1 className="h1" style={{ width: "fit-content" }} >
                                How We Work?
                            </h1>
                        </div>
                        <div className="std-ctn" style={{ alignItems: "center" }} >
                            <div style={{ width: "100%", fontSize: "20px" }} >
                                <li>
                                    When we receive more than 30 orders for a product, we place place the bulk order for that product to
                                    our partnered companies/retailers.
                                </li>
                                <br />
                                <li>
                                    Because of bulk orders, our partner retailers provide products at wholesale rates
                                </li>
                                <br />
                                <li>
                                    The orders are shipped directly from company, hence low shipping cost
                                </li>
                                <br />
                                <li>
                                    Which in turn leads to your saving and convenience
                                </li>
                            </div>
                            <div className="wrap" >
                                <img src={howwework} alt="i" width="100%" />
                            </div>
                        </div>
                    </div>
                </div>


                <div className="wrap" >
                    <div className="desktop-ctn" >
                        <div>
                            <h1 className="h1" style={{ width: "fit-content" }} >
                                FAQs
                            </h1>
                        </div>
                        <div className="std-ctn" style={{ alignItems: "center", fontSize: "20px"  }} >
                            <div>
                            {
                                faqs.map((item, index) => {
                                    return (
                                        <p key={index} >
                                            <p>
                                                <strong>
                                                   Q.{index+1} {item.q}
                                                </strong>
                                            </p>
                                            <p>
                                                A. {item.a} {item.tag}
                                            </p>
                                            <br/><br/>
                                        </p>
                                    )
                                })
                            }
                            </div>
                        </div>
                    </div>
                </div>

                <MyFooter/>
            </div >
        )
    }
}

export default About
