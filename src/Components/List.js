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
                                    Online:<strike>&#8377;{item.mrp}</strike>
                                </div>
                                <div className="save" >
                                    Save:&#8377;{parseInt(item.mrp.replace(/\,/g,''))-parseInt(item.sp.replace(/\,/g,''))}
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
