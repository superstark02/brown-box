import React, { Component } from 'react'
import "./AppBar.css"
import logo from "../Images/bblogo.png"
export class AppBar extends Component {
    render() {
        return (
            <div>
                <div className="app-bar" >
                    <div className="wrap logo" >
                        <img alt="logo" src={logo} width="70px" /> <div style={{fontFamily:"inherit"}} >brown box.</div>
                    </div>
                    <div >

                    </div>
                </div>
            </div>
        )
    }
}

export default AppBar
