import React, { Component } from 'react'
import "./MyList.css"
import { ButtonBase } from '@material-ui/core'
import { Link } from 'react-router-dom'
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
        getCollection("Products").then(snap=>{
            this.setState({data:snap})
        })
    }

    myArrow({ type, onClick, isEdge }) {
        const pointer = type === consts.PREV ? <ArrowBackIosRoundedIcon style={{fontSize:"15px"}} /> : <ArrowForwardIosRoundedIcon style={{fontSize:"15px"}}  />
        return (
            <div className="wrap" style={{width:"auto"}} >
                <ButtonBase onClick={onClick} disabled={isEdge} style={{
                    marginRight: "20px",
                    backgroundColor: "grey",
                    padding: "10px",
                    boxShadow: "0px 5px 10px rgba(0,0,0,0.6)",
                    borderRadius: "50%",
                    width: "40px",
                    height: "40px",
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
                                    this.state.data.map(item => {
                                        return (
                                            <div style={{ display: "inline-block" }} >
                                                <ButtonBase className="w3-animate-opacity" style={{ height: "100%", marginRight: "20px" }}>
                                                    <Link to={"/display/"}
                                                        style={{ height: "100%" }}  >
                                                        <div className="list-item" style={{ backgroundImage: "url(" + item.image + ")" }} >
                                                            
                                                        </div>
                                                        <div>
                                                            {item.name}
                                                        </div>
                                                    </Link>
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
