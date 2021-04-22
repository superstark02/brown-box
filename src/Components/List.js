import React, { Component } from 'react'
import getCollection from '../Database/getCollection';
import "./List.css"

export class List extends Component {

    state = {
        data: null
    }

    componentDidMount(){
        getCollection("Products").then(snap=>{
            this.setState({data:snap})
        })
    }

    render() {
        return (
            <div className="list-prt" >
                {
                    this.state.data&&
                    this.state.data.map(item=>{
                        return(
                            <div className="list-ctn" >
                                <div className="list-ctn wrap" >
                                    <img alt="prd" src={item.image} className="item-img" />
                                </div>
                                <div className="item-name" >
                                    {item.name}
                                </div>
                                <div className="sp" >
                                    &#8377;{item.sp}
                                </div>
                                <div className="mrp" >
                                    MRP:<strike>&#8377;{item.mrp}</strike>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default List
