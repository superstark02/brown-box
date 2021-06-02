import React, { Component } from 'react'
import "./AppBar.css"
import logo from "../Images/bblogo.jfif"
import "../NicePage/Products/Home.css"
import "../NicePage/Products/nicepage.css"
import "../NicePage/Products/Post-Template.css"
import { FaBeer, FaUserCircle } from 'react-icons/fa';
import { ShoppingCart } from '@material-ui/icons'
import { Link } from 'react-router-dom'

export class AppBar extends Component {
    render() {
        return (
            <div>
                <div className="app-bar" >
                    <Link to="/" style={{ color: "inherit" }} >
                        <div className="wrap logo" >
                            <img alt="logo" src={logo} width="70px" /> <div style={{ fontFamily: "inherit" }} >brown box.</div>
                        </div>
                    </Link>
                    <div style={{ display: "flex", alignItems: "center" }} >
                        <button class="app-std-btn">
                            Login
                        </button>
                        <div className="wrap" >
                            {/*<a href="/cart">
                                <div class="total">
                                    <ShoppingCart />
                                (<span id="simpleCart_quantity" class="simpleCart_quantity"></span>)
                                </div>
                            </a>*/}
                            <a href="/account" style={{ color: "#f4bc57", fontSize: "40px" }} >
                                <div>
                                    <FaUserCircle />
                                </div>
                            </a>
                            <div class="clearfix"> </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AppBar


