import React, { Component } from 'react'
import "./MyList.css"
import { ButtonBase } from '@material-ui/core'
import Carousel, { consts } from 'react-elastic-carousel'
import ArrowBackIosRoundedIcon from '@material-ui/icons/ArrowBackIosRounded';
import ArrowForwardIosRoundedIcon from '@material-ui/icons/ArrowForwardIosRounded';
import getCollection from '../Database/getCollection';

export class MyList extends Component {

    state = {
        data: null,
        nomore: null
    }

    componentDidMount() {
        getCollection("Products").then(snap => {
            this.setState({ data: snap })
        })
    }

    myArrow({ type, onClick, isEdge }) {
        const pointer = type === consts.PREV ? <ArrowBackIosRoundedIcon style={{ fontSize: "15px" }} /> : <ArrowForwardIosRoundedIcon style={{ fontSize: "15px" }} />
        return (
            <div className="wrap" style={{ width: "auto" }} >
                <ButtonBase onClick={onClick} disabled={isEdge} style={{
                    marginRight: "20px",
                    backgroundColor: "white",
                    padding: "10px",
                    boxShadow: "0px 5px 10px rgba(0,0,0,0.6)",
                    borderRadius: "50%",
                    width: "40px",
                    height: "40px",
                    cursor:"pointer"
                }}>
                    <div className="wrap" >
                        {pointer}
                    </div>
                </ButtonBase>
            </div>
        )
    }

    render() {
        return (
            <div>
                {
                    this.state.data ? (
                        <div>
                            <Carousel
                                renderPagination={({ pages, activePage, onClick }) => { return (<div></div>) }}
                                itemsToShow={4} itemsToScroll={4}
                                className="list-container"
                                renderArrow={this.myArrow}
                            >
                                {
                                    this.state.data.map((item, index) => {
                                        return (
                                            <div>
                                                <ButtonBase className="w3-animate-opacity" style={{ height: "100%", marginRight: "20px" }}>
                                                    <a href="/product"
                                                        style={{ height: "100%" }}  >
                                                        <div className="list-item" >
                                                            <div className="center-image" >
                                                                <img src={item.image} width="70%" />
                                                            </div>
                                                            <div>
                                                                <div className="item-name" >
                                                                    {item.name}
                                                                </div>
                                                                <div className="mrp" >
                                                                    Online:<strike>&#8377;{item.mrp}</strike>
                                                                </div>
                                                                <div className="sp" style={{fontSize:"17px"}} >
                                                                    &#8377;{item.sp}
                                                                </div>
                                                                <div className="save" style={{width:"fit-content", color:"#48c479"}} >
                                                                    Save:&#8377;{parseInt(item.mrp.replace(/\,/g, '')) - parseInt(item.sp.replace(/\,/g, ''))}
                                                                </div>
                                                                <div style={{textAlign:"left", color:"grey"}} >
                                                                    #WEEK {index+1} (2/6/20)
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </ButtonBase>
                                            </div>
                                        )
                                    })
                                }
                            </Carousel>
                        </div>
                    ) : (
                        <div>

                        </div>
                    )
                }
            </div>
        )
    }
}

export default MyList
