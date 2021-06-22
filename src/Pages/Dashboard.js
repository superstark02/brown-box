import React, { Component } from 'react'
import "./Home.css"
import "./Dashboard.css"
import axios from 'axios'
import { uploadGames, uploadProducts } from '../Database/uploadData'

export class Dashboard extends Component {

    state = {
        data: null,
        games: null
    }

    componentDidMount() {
        axios.get("https://sheet.best/api/sheets/ac64ce8a-6b8e-457b-91db-421051becea4")
            .then(res => {
                this.setState({data:res.data})
            })

        
        axios.get("https://sheet.best/api/sheets/2594f52a-9f20-48f0-8864-06c215fa2be4")
        .then(res => {
            this.setState({games:res.data})
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
            uploadProducts(this.state.data)
        }
    }

    submit_games = () => {
        if(this.state.games){
            uploadGames(this.state.games)
        }
    }

    render() {
        return (
            <div style={{backgroundColor:"#282828", height:"100vh"}} >
                <div className="wrap" >
                    <button className="std-btn" onClick={this.submit} >
                        UPDATE PRODUCTS
                    </button>
                </div>
                <div className="wrap" >
                    <button className="std-btn" onClick={this.submit_games} >
                        UPDATE GAMES
                    </button>
                </div>
            </div>
        )
    }
}

export default Dashboard
