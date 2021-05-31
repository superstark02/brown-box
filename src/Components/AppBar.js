import React, { Component } from 'react'
import "./AppBar.css"
import logo from "../Images/bblogo.jfif"
import "../NicePage/Products/Home.css"
import "../NicePage/Products/nicepage.css"
import "../NicePage/Products/Post-Template.css"
import { FaBeer } from 'react-icons/fa';
import { ShoppingCart } from '@material-ui/icons'
import { Link } from 'react-router-dom'

export class AppBar extends Component {
    render() {
        return (
            <div>
                <div className="app-bar" >
                    <div className="wrap logo" >
                        <img alt="logo" src={logo} width="70px" /> <div style={{ fontFamily: "inherit" }} >brown box.</div>
                    </div>
                    <div style={{ display: "flex", alignItems: "center" }} >
                        <Link to="/login" >
                            <button class="app-std-btn">
                                Login
                            </button>
                        </Link>
                        <div>
                            <a href="/cart">
                                <div class="total">
                                    <ShoppingCart />
                                (<span id="simpleCart_quantity" class="simpleCart_quantity"></span>)
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


export class MyAppBar extends Component {
    render() {
        return (
            <header class="u-clearfix u-header u-header" id="sec-4cce" style={{ backgroundColor: "black" }} >
                <div class="u-clearfix u-sheet u-sheet-1">
                    <a href="https://nicepage.com" class="u-image u-logo u-image-1" data-image-width="1194" data-image-height="1193">
                        <img src={logo} class="u-logo-image u-logo-image-1" data-image-width="90" />
                    </a>
                    <nav class="u-menu u-menu-dropdown u-offcanvas u-menu-1">
                        <div class="menu-collapse" style={{ fontSize: "1 rem", letterSpacing: "0px" }}>
                            <a class="u-button-style u-custom-left-right-menu-spacing u-custom-padding-bottom u-custom-text-active-color u-custom-top-bottom-menu-spacing u-nav-link u-text-active-palette-1-base u-text-custom-color-1 u-text-hover-palette-2-base"
                                href="#">
                                <img src="https://img.icons8.com/cotton/64/000000/menu.png" />
                            </a>
                        </div>
                        <div class="u-nav-container">
                            <ul class="u-nav u-unstyled u-nav-1">
                                <li class="u-nav-item"><a
                                    class="u-button-style u-nav-link u-text-active-custom-color-1 u-text-hover-palette-2-base"
                                    href="Home.html" style={{ padding: "10px 20px" }} >Home</a>
                                </li>
                                <li class="u-nav-item"><a
                                    class="u-button-style u-nav-link u-text-active-custom-color-1 u-text-hover-palette-2-base"
                                    href="About.html" style={{ padding: "10px 20px" }}>About</a>
                                </li>
                                <li class="u-nav-item"><a
                                    class="u-button-style u-nav-link u-text-active-custom-color-1 u-text-hover-palette-2-base"
                                    href="Contact.html" style={{ padding: "10px 20px" }}>Contact</a>
                                </li>
                            </ul>
                        </div>
                        <div class="u-nav-container-collapse">
                            <div class="u-black u-container-style u-inner-container-layout u-opacity u-opacity-95 u-sidenav">
                                <div class="u-sidenav-overflow">
                                    <div class="u-menu-close"></div>
                                    <ul class="u-align-center u-nav u-popupmenu-items u-unstyled u-nav-2">
                                        <li class="u-nav-item"><a class="u-button-style u-nav-link" href="Home.html">Home</a>
                                        </li>
                                        <li class="u-nav-item"><a class="u-button-style u-nav-link" href="About.html">About</a>
                                        </li>
                                        <li class="u-nav-item"><a class="u-button-style u-nav-link" href="Contact.html">Contact</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="u-black u-menu-overlay u-opacity u-opacity-70"></div>
                        </div>
                    </nav>
                </div>
            </header>
        )
    }
}
