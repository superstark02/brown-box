import React, { Component } from 'react'
import "./MobileList.css"
import { ButtonBase } from '@material-ui/core'
import { Link } from 'react-router-dom'
import ArrowForwardRoundedIcon from '@material-ui/icons/ArrowForwardRounded';
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

    render() {
        return (
            <div>
                {
                    this.state.data ? (
                        <div>
                            <div className="h7" >
                                {this.props.title}
                            </div>

                            <div className="list-container-m" >
                                {
                                    this.state.data.map(item => {
                                        return (
                                            <div style={{ display: "inline-block" }} >
                                                <ButtonBase className="w3-animate-opacity" style={{ height: "100%", marginRight: "20px" }}>
                                                    <Link to={"/display/"}>
                                                        <div className="list-item-m" >
                                                            <div className="center-image" >
                                                                <img src={item.image} width="80%" />
                                                            </div>
                                                            <div style={{width:"100%"}} >
                                                                <div className="item-name" >
                                                                    {item.name}
                                                                </div>
                                                                <div className="mrp" >
                                                                    Online:<strike>&#8377;{item.mrp}</strike>
                                                                </div>
                                                                <div className="save" >
                                                                    Save:&#8377;{parseInt(item.mrp.replace(/\,/g, '')) - parseInt(item.sp.replace(/\,/g, ''))}
                                                                </div>
                                                                <div className="sp" style={{fontSize:"17px"}} >
                                                                    &#8377;{item.sp}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                </ButtonBase>
                                            </div>
                                        )
                                    })
                                }
                                {
                                    !this.state.nomore ? (
                                        <div style={{ display: "flex", alignItems:"center" }} >
                                            <ButtonBase className="w3-animate-opacity" onClick={this.loadMore} style={{
                                                marginRight: "20px",
                                                backgroundColor: "white",
                                                padding: "10px",
                                                boxShadow: "0px 5px 10px rgba(0,0,0,0.6)",
                                                borderRadius: "50%"
                                            }}>
                                                <div className="wrap" >
                                                    <ArrowForwardRoundedIcon />
                                                </div>
                                            </ButtonBase>
                                        </div>
                                    ) : (
                                        <div></div>
                                    )
                                }
                            </div>
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
