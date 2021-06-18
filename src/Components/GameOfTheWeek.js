import React, { Component } from 'react'
import GameDisplay from './GameDisplay'
import "./GameOfTheWeek.css"
import "./MyList.css"
import { ButtonBase } from '@material-ui/core'

export class GameOfTheWeek extends Component {
    render() {
        return (
            <div>
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
                    <GameDisplay />


                </div>

                <div className="wrap" >
                    <div className="desktop-ctn" >
                        <h2>
                            Upcoming Game
                        </h2>
                        <ButtonBase style={{ width: "300px", padding: "10px" }}>
                            <div className="list-item" style={{height:"auto"}} >
                                <div className="wrap" style={{ height: "100%" }} >
                                    <div className="center-image" >
                                        <img src={"https://images-na.ssl-images-amazon.com/images/I/91lmTAVXgHL.jpg"} width="70%" />
                                    </div>
                                </div>
                                <div>
                                    <div className="item-name" >
                                        Assassin's Creed: Valhalla
                                    </div>
                                    <div className="mrp" >
                                        Online:<strike>&#8377;3,999</strike>
                                    </div>
                                    <div className="sp" style={{ fontSize: "17px" }} >
                                        &#8377;3,200
                                    </div>
                                    <div className="save" style={{ width: "fit-content", color: "#48c479" }} >
                                        Save:&#8377 800
                                    </div>
                                    <div style={{ textAlign: "left", color: "grey" }} >
                                        #WEEK {1 + 1} (2/6/20)
                                    </div>
                                </div>
                            </div>
                        </ButtonBase>
                    </div>
                </div>
            </div>
        )
    }
}

export default GameOfTheWeek
