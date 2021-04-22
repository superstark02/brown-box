import React, { Component } from 'react'
import AppBar from '../Components/AppBar'
import "./Home.css"
import "./Dashboard.css"
import { uploadData } from '../Database/uploadData'

export class Dashboard extends Component {

    state = {
        name: "",
        sp: "",
        mrp:"",
        cat:"",
        image:""
    }

    submit = () => {
        uploadData([{
            name: this.state.name,
            sp: this.state.sp,
            mrp: this.state.mrp,
            cat: this.state.cat,
            image: this.state.image
        }])
    }

    render() {
        return (
            <div>
                <AppBar/>
                <div className="wrap" >
                    <div className="desktop-ctn" >
                        <h2>
                            Enter Data
                        </h2>
                        <h1>
                            Enter Data
                        </h1>
                        <div>
                            <div>
                                Name
                            </div>
                            <div>
                                <input placeholder="Name" value={this.state.name} onChange={(e)=>{this.setState({name:e.target.value})}} />
                            </div>

                            <div>
                                BB Price
                            </div>
                            <div>
                                <input placeholder="Number With Commas" value={this.state.sp} onChange={(e)=>{this.setState({sp:e.target.value})}} />
                            </div>

                            <div>
                                Market Price
                            </div>
                            <div>
                                <input placeholder="Number With Commas" value={this.state.mrp} onChange={(e)=>{this.setState({mrp:e.target.value})}} />
                            </div>

                            <div>
                                Category Of The Product
                            </div>
                            <div>
                                <input placeholder="predefined category only" value={this.state.cat} onChange={(e)=>{this.setState({cat:e.target.value})}} />
                            </div>

                            <div>
                                Image
                            </div>
                            <div>
                                <input placeholder="link" value={this.state.image} onChange={(e)=>{this.setState({image:e.target.value})}} />
                            </div>

                            <div>
                                <button className="std-btn" onClick={this.submit} >
                                    UPLOAD
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Dashboard
