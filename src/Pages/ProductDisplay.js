import React from 'react'
import AppBar from '../Components/AppBar'
import '../App.css'
import './Single.css'
import "../CSS/bootstrap.min.css"
import "../CSS/flexslider.css"
import "../CSS/form.css"
import "../CSS/jquery-ui.css"
import "../CSS/style.css"
import MyList from '../Components/MyList'
import MobileList from '../Components/MobileList'
import Slider from '../Components/Slider'
import { MyFooter } from '../Components/Footer'
import { FaCheckCircle, FaExchangeAlt, FaShippingFast, FaUndo } from 'react-icons/fa'
import getDoc from '../Database/getDoc'


export default function ProductDisplay(props) {

    const [data, setData] = React.useState(null)

    React.useEffect(() => {
        console.log(props.match.params.id)
        getDoc("Products", props.match.params.id).then(snap => {
            setData(snap)
        })
    })

    if (data) {
        return (
            <div>
                <AppBar />

                <div className="showcase-grid">
                    <div className="container">
                        <div className="col-md-8 showcase">
                            <Slider images={[
                                {
                                    original: data.image,
                                    thumbnail: data.image
                                },
                                {
                                    original: data.image1,
                                    thumbnail: data.image1
                                },
                                {
                                    original: data.image2,
                                    thumbnail: data.image2
                                },
                                {
                                    original: data.image3,
                                    thumbnail: data.image3
                                },
                            ]} />
                        </div>
                        <div className="col-md-4 showcase">
                            <div className="showcase-rt-top">
                                <div className="pull-left shoe-name">
                                    <h3>{data.name}</h3>
                                    <p>{data.category}</p>
                                    <h4 style={{ color: "#ffb300" }} >₹1,002.00</h4>
                                    <div style={{ margin: "10px 0px", color: "grey" }} >
                                        Online : ₹{data.mrp}
                                    </div>
                                    <div style={{ margin: "10px 0px", color: "grey" }} >
                                        Save {data.discount}
                                    </div>
                                </div>
                                <div className="clearfix"></div>
                            </div>
                            <hr className="featurette-divider" />
                            <div className="shocase-rt-bot">
                                <div className="view-cnt" >
                                    <div className="view" >
                                        View Price On
                                            <div>
                                            <a href={data.amazon} >
                                                <img src={"http://www.mountaincolours.in/uploads/clients/1551518604.jpg"} width="50px" />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="view" >
                                        View Price On
                                            <div>
                                            <a href={data.flipkart} >
                                                <img src={"https://www.pngarea.com/pngm/6/5103627_amazon-logo-png-icon-amazon-logo-png-transparent.png"} width="50px" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="float-qty-chart">
                                    <ul>
                                        {/*
                                                <li className="qty">
                                                    <h3>Size Chart</h3>
                                                    <select className="form-control siz-chrt">
                                                        <option>6 US</option>
                                                        <option>7 US</option>
                                                        <option>8 US</option>
                                                        <option>9 US</option>
                                                        <option>10 US</option>
                                                        <option>11 US</option>
                                                    </select>
                                                </li>
                                            */}

                                        {/*<li className="qty">
                                            <h4>QTY</h4>
                                            <select className="form-control qnty-chrt">
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>
                                                <option>6</option>
                                                <option>7</option>
                                            </select>
                                        </li>*/}
                                    </ul>
                                    <div className="clearfix"></div>
                                </div>
                            </div>

                            <ul>
                                <button className="std-btn-1">
                                    Available from {data.from}
                                </button>
                            </ul>

                            <div className="showcase-last">
                                <h3>Description</h3>
                                <ul>
                                    {data.highlights}
                                </ul>
                            </div>

                        </div>
                        <div className="clearfix"></div>
                    </div>
                </div>

                <div className="specifications">
                    <div className="container">
                        <h3>Item Details</h3>
                        <div className="detai-tabs">

                            <div className="tab-content">
                                <div className="tab-pane active features" style={{ display: "flex", justifyContent: "space-evenly" }} >
                                    <div>
                                        <div className="feature-icons" >
                                            <FaExchangeAlt />
                                        </div>
                                        <div className="feature-text" >
                                            Easy Returns
                                            </div>
                                    </div>

                                    <div>
                                        <div className="feature-icons" >
                                            <FaUndo />
                                        </div>
                                        <div className="feature-text" >
                                            Easy Refunds
                                            </div>
                                    </div>

                                    <div>
                                        <div className="feature-icons" >
                                            <FaShippingFast />
                                        </div>
                                        <div className="feature-text" >
                                            Ship in 48 hours
                                            </div>
                                    </div>

                                    <div>
                                        <div className="feature-icons" >
                                            <FaCheckCircle />
                                        </div>
                                        <div className="feature-text" >
                                            Genuine Product
                                            </div>
                                    </div>
                                </div>
                            </div>

                            {/* Home */}

                            {/* Desc */}
                            <ul className="nav nav-pills tab-nike" role="tablist">
                                <li role="presentation" className=""><a aria-controls="home" role="tab" data-toggle="tab">Product Details</a></li>
                            </ul>
                            <div className="tab-content">
                                <div className="tab-pane active" id="home">
                                    <p>
                                        {data.description}
                                    </p>
                                </div>
                            </div>

                            <div className="wrap" >
                                <iframe 
                                    width="956" 
                                    height="538" 
                                    src="https://www.youtube.com/embed/hhWeyq4gArI" 
                                    title="YouTube video player" 
                                    frameborder="0" 
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                    allowfullscreen>
                                </iframe>
                            </div>

                            {/*  */}
                        </div>
                    </div>
                </div>

                <div className="you-might-like">
                    <div className="container">
                        <h3 className="you-might">Upcoming</h3>
                        <div className="clearfix"></div>
                    </div>
                </div>

                <div className="desktop" >
                    <MyList />
                </div>
                <div className="mobile" >
                    <MobileList />
                </div>
                <MyFooter />
            </div>
        )
    }
    else{
        return(
            <div>
                Please Wait
            </div>
        )
    }
}

