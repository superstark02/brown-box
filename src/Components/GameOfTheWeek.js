import React, { Component } from 'react'
import GameDisplay from './GameDisplay'
import "./GameOfTheWeek.css"
import ProductDisplay from './ProductDisplay'

export class GameOfTheWeek extends Component {
    render() {
        return (
            <div className="game-ctn" >
                {/*<div className="game-details" >
                    <h1>
                        Resident Evil: Village
                    </h1>
                    By Capcom
                    <h3 style={{ marginTop: "20px" }} >
                        Rs. 3,200
                    </h3>
                    <div style={{ margin: "20px 0px" }} >
                        X BOX - PS5 - PS4
                    </div>
                    <p>
                        Released 07/05/2021
                    </p>
                    <p style={{margin:'10px 0px'}} >
                        <img style={{marginRight:"10px"}} width="40px" src={"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Xbox_one_logo.svg/1200px-Xbox_one_logo.svg.png"} />
                        <img width="50px" src="https://www.freepnglogos.com/uploads/playstation-4-png-logo/playstation-4-movies-png-logo-20.png" />
                    </p>
                    <div>
                        <button className="std-btn" >
                            View
                        </button>
                    </div>
                </div>*/}
                <GameDisplay/>
            </div>
        )
    }
}

export default GameOfTheWeek
