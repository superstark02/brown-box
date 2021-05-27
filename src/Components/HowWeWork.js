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
                            <img src="https://img.icons8.com/fluent/48/000000/chevron-right.png" />
                        </div>

                        <div className="how-we-work-child" >
                            <div className="wrap" >
                                <img src={retailer} alt="i" width="80%" />
                            </div>
                            <div>
                                Retailer 
                            </div>
                            <div className="skip" >
                                <img src="https://img.icons8.com/cotton/2x/delete-sign--v2.png" width="30%" />
                            </div>
                        </div>

                        <div>
                            <img src="https://img.icons8.com/fluent/48/000000/chevron-right.png" />
                        </div>

                        <div className="how-we-work-child" >
                            <div className="wrap" >
                                <img src={shop} alt="i" width="80%" />
                            </div>
                            <div>
                                Showroom
                            </div>
                            <div className="skip" >
                                <img src="https://img.icons8.com/cotton/2x/delete-sign--v2.png"  width="35%"  />
                            </div>
                        </div>

                        <div>
                            <img src="https://img.icons8.com/fluent/48/000000/chevron-right.png" />
                        </div>

                        <div className="how-we-work-child" >
                            <div className="wrap" >
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

