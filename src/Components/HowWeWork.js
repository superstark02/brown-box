import React, { Component } from 'react'
import "../Pages/Home.css"
import bose from '../Images/bose.jpg'
import ad from '../Images/advertise.jpg'
import wh from '../Images/warehouse.jpg'

export class HowWeWork extends Component {
    render() {
        return (
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
                </div>
            </div>
        )
    }
}

export default HowWeWork
