import React from 'react'
import AppBar from '../Components/AppBar'
import '../App.css'
import './Single.css'
import MyList from '../Components/MyList'
import MobileList from '../Components/MobileList'
import Slider from '../Components/Slider'
import { MyFooter } from '../Components/Footer'
import { FaCheckCircle, FaExchangeAlt, FaShippingFast, FaUndo } from 'react-icons/fa'
import firebase from 'firebase'
import { useHistory } from 'react-router'
import login from '../Database/Login'
import Avatars from '../Components/Avatars'
import Loading from '../Components/Loading'
import getDoc from '../Database/getDoc'


export function GamePage(props) {

    const history = useHistory();

    const handleOnSubmit = () => {
        history.push(`/cart/` + platform);
    };

    const check_user = () => {
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                return handleOnSubmit()
            } else {
                login().then(res => {
                    return handleOnSubmit()
                });
            }
        });
    }

    const [data, setData] = React.useState(null)
    const [platform, setPlatform] = React.useState("XBox One")

    React.useEffect(() => {
        getDoc("Games", "1").then(snap => {
            setData(snap)
        })
    })

    if (data) {
        return (
            <div>
                <AppBar />

                <form onSubmit={check_user} >
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
                                        <h4 style={{ color: "#ffb300", margin: "20px 0px" }} >
                                            ₹{data.sp}
                                        </h4>
                                        <div style={{ margin: "5px 0px", color: "grey" }} >
                                            MRP : ₹{data.mrp}
                                        </div>
                                        <div style={{ margin: "5px 0px", color: "grey" }} >
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

                                            <li className="qty">
                                                <select required defaultValue="Xbox One" onChange={(e)=>{setPlatform(e.target.value)}} className="form-control qnty-chrt">
                                                    <option value="Xbox One" >Xbox One</option>
                                                    <option value="PlayStation 5" >PlayStation 5</option>
                                                    <option value="Xbox Series X" >Xbox Series X</option>
                                                    <option value="PlayStation 4" >PlayStation 4</option>
                                                    <option value="Xbox Series S" >Xbox Series S</option>
                                                </select>
                                            </li>
                                        </ul>
                                        <div className="clearfix"></div>
                                    </div>
                                </div>

                                <div style={{ marginTop: "30px" }} >
                                    <div>
                                        <Avatars />
                                    </div>
                                </div>

                                {/*<div style={{margin:"20px 0px"}} >
                                <ProgressBar variant='success' now={(45/50)*100} />
                                    </div>*/}

                                <ul>
                                    <input type="submit" value="Buy Together" className="std-btn-1"/>
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
                </form>

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
                                <li role="presentation" className="">
                                    <a aria-controls="home" role="tab" data-toggle="tab">
                                        Product Details
                                    </a>
                                </li>
                            </ul>
                            <div className="tab-content">
                                <div className="tab-pane active" id="home">
                                    <p>
                                        {data.description}
                                    </p>
                                </div>
                            </div>


                            <ul className="nav nav-pills tab-nike" role="tablist">
                                <li role="presentation" style={{ margin: "30px 0px" }}>
                                    <a aria-controls="home" role="tab" data-toggle="tab">
                                        Product Review
                                    </a>
                                </li>
                            </ul>
                            <div className="wrap" >
                                <iframe
                                    width="956"
                                    height="538"
                                    src={data.video}
                                    title="YouTube video player" frameborder="0"
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

    else {
        return <Loading />
    }
}

export default GamePage
