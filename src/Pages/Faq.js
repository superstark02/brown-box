import React, { Component } from 'react'
import MyAppBar from "../Components/AppBar"
import { MyFooter } from '../Components/Footer'

const tag = <a href="https://wa.me/919319977851?text=Hi">here</a>

const faqs = [
    {
        q: "When my product will be shipped?",
        a: "As soon as the given product has 20 buyers (i.e. when more than 20 users buy the product), then the product will be shipped and reach you within maximum 5 days",
        heading: "headingOne",
        collapse: "collapseOne"
    },
    {
        q: "What if product has less than 20 buyers even after a week?",
        a: "In that case, your money will be refunded to your bank account instantly",
        heading: "headingTwo",
        collapse: "collapseTwo"
    },
    {
        q: "How to track my order?",
        a: "You can track your order by clicking on the link provided in your email",
        heading: "headingThree",
        collapse: "collapseThree"
    },
    {
        q: "How to cancel an order?",
        a: "Once shipping is started, it cannot be cancelled. Before shipping you can cancel your orderby messaging ",
        heading: "headingFour",
        collapse: "collapseFour",
        tag: tag
    },
    {
        q: "How to return an order?",
        a: "You can return order only in cases of defect or wrong product. You can return order by messaging ",
        tag: tag,
        heading: "headingFive",
        collapse: "collapseFive"
    },
    {
        q: "My issue is not listed here",
        a: "If you have more queries: mail at mail@pidgin.online, or contact +91 99101 97196",
        heading: "headingSix",
        collapse: "collapseSix"
    }

]

export class Faq extends Component {
    render() {
        return (
            <div>
                <MyAppBar />
                <div class="page-banner-section section bg-image" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1580234831315-438a4813685c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=747&q=80)" }}>
                    <div class="container">
                        <div class="row">
                            <div class="col">

                                <div class="page-banner text-left">
                                    <h2>FAQs</h2>
                                    <ul class="page-breadcrumb">
                                        <li><a href="index.html">Home</a></li>
                                        <li>Faq</li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <div class="faq-section section pt-90 pt-lg-70 pt-md-60 pt-sm-50 pt-xs-40  pb-90 pb-lg-70 pb-md-60 pb-sm-50 pb-xs-40">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="faq-content">
                                    <div class="faq-desc">
                                        <h3>Below are frequently asked questions, you may find the answer for yourself</h3>
                                    </div>
                                </div>
                                {/*FAQ Accordin Start*/}
                                <div class="faq-accordion">
                                    <div id="accordion">
                                        {
                                            faqs.map((item,index) => {
                                                return (
                                                    <div>
                                                        <div class="card">
                                                            <div class="card-header" id="headingThree" >
                                                                <h5 class="mb-0">
                                                                    <a class="collapsed" 
                                                                        data-toggle="collapse" 
                                                                        data-target={"#"+item.collapse} 
                                                                        aria-expanded="false" 
                                                                        aria-controls={item.collapse}>
                                                                        {item.q}
                                                                    </a>
                                                                </h5>
                                                            </div>
                                                            <div id={item.collapse}
                                                                class="collapse" 
                                                                aria-labelledby={item.heading}
                                                                data-parent="#accordion">
                                                                <div class="card-body">
                                                                    {item.a}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                                {/*FAQ Accordin Start*/}
                            </div>
                        </div>
                    </div>
                </div>

                <MyFooter />
            </div>
        )
    }
}

export default Faq
