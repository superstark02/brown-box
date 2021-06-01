import React, { Component } from 'react'
import "./Home.css"
import "./Dashboard.css"
import axios from 'axios'
import { uploadData } from '../Database/uploadData'

export class Dashboard extends Component {

    state = {
        data: null,
    }

    componentDidMount() {
        axios.get("https://sheet.best/api/sheets/ac64ce8a-6b8e-457b-91db-421051becea4")
            .then(res => {
                console.log(res.data)
                this.setState({data:res.data})
            })


        /*Tabletop.init({
            key: "2PACX-1vSS5FAOql2jW1wbT5trXZsrQxyeIoUdoAV53AiZHQEbNTP0JCKLMqXo4JcOV2dJ1D5rYDUvR79v1X5A",
            simpleSheet: true
        })
            .then((data) => { console.log(data) })
            .catch((err) => console.warn(err));*/
    }

    submit = () => {
        if(this.state.data){
            uploadData(this.state.data)
        }
    }

    render() {
        return (
            <div style={{backgroundColor:"#282828", height:"100vh"}} >
                <div className="wrap" >
                    <button className="std-btn" onClick={this.submit} >
                        UPDATE
                    </button>
                </div>
            </div>
        )
    }
}

export default Dashboard
