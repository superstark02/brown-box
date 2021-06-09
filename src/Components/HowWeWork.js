import React, { Component } from 'react'
import "./HowWeWork.css"
import warehouse from '../Images/HowWeWork/warehouse.png'
import retailer from '../Images/HowWeWork/wholeseller.png'
import shop from '../Images/HowWeWork/shop.png'
import customer from '../Images/HowWeWork/customer.png'

export class HowWeWork extends Component {
    render() {
        return (
            <div className="wrap" >
                <div className="desktop-ctn" >
                    <h1 className="h1" >
                        How We Work?
                    </h1>

                    <div>
                        <p>
                            We launch a product every week. When at least 20 customers are ready to buy a product. We ship products from the company directly.
                        </p>
                    </div>

                    <div className="how-we-work-cnt" >
                        <div className="how-we-work-child" >
                            <div className="wrap" >
                                <img src={warehouse} alt="i" width="80%" />
                            </div>
                            <div>
                                Warehouse
                            </div>
                        </div>

                        <div>
                            <img className="chev" src="https://img.icons8.com/fluent/48/000000/chevron-right.png" />
                        </div>

                        <div className="how-we-work-child" >
                            <div className="wrap" >
                                <img src={retailer} alt="i" width="80%" />
                            </div>
                            <div>
                                Retailer
                            </div>
                            <div className="skip" >
                                <i class="fa fa-ban skip"></i>
                            </div>
                        </div>

                        <div>
                            <img className="chev" src="https://img.icons8.com/fluent/48/000000/chevron-right.png"/>
                        </div>

                        <div className="how-we-work-child" >
                            <div className="wrap" >
                                <img src={shop} alt="i" width="80%" />
                            </div>
                            <div>
                                Showroom
                            </div>
                            <div className="skip" >
                                <i class="fa fa-ban skip"></i>
                            </div>
                        </div>

                        <div>
                            <img className="chev" src="https://img.icons8.com/fluent/48/000000/chevron-right.png" />
                        </div>

                        <div className="how-we-work-child" >
                            <div className="wrap" style={{height:"100%"}} >
                                <img src={customer} alt="i" width="80%" />
                            </div>
                            <div>
                                To You
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default HowWeWork

