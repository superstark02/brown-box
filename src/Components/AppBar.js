import React, { Component } from 'react'
import logo from "../Images/bblogo.jfif"
import firebase from 'firebase'
import login from '../Database/Login'

export class AppBar extends Component {

    state = {
        login_btn: true,
        image: null,
        show_appbar: { visibility: "hidden", height: "0px" }
    }

    componentDidMount() {
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                this.setState({ image: user.photoURL })
                this.setState({ login_btn: false })
            } else {
                this.setState({ login_btn: true })
            }
        });
    }

    sign_in = async () => {
        login();
    }

    render() {
        return (
            <div>
                <header class="header header-transparent header-sticky  d-lg-block d-none">
                    <div class="header-deafult-area">
                        <div class="container">
                            <div class="row align-items-center">
                                <div class="col-xl-3 col-lg-2 col-md-4 col-12">
                                    {/*Logo Area Start*/}
                                    <a class="font-a" href="/" >
                                        brownbox.
                                    </a>
                                    {/*Logo Area End*/}
                                </div>
                                <div class="col-xl-6 col-lg-6 col-md-4 d-none d-lg-block col-12">
                                    {/*Header Menu Area Start*/}
                                    <div class="header-menu-area text-center">
                                        <nav class="main-menu">
                                            <ul>
                                                <li><a href="/">Home</a>
                                                    {/*<ul class="sub-menu">
                                                        <li><a href="/display/Products/1pow">Product Of The Week</a></li>
                                                        <li><a href="#upcoming-products">Upcoming Products</a></li>
                                                        <li><a href="#next-product">Next Week's Product</a></li>
        </ul>*/}
                                                </li>
                                                <li><a >About Us</a>
                                                    <ul class="mega-menu four-column left-0">
                                                        <li><a href="/about" class="item-link">About Us</a>
                                                            <ul>
                                                                <li><a href="/about">About Us</a></li>
                                                                <li><a href="/faq">FAQs</a></li>
                                                            </ul>
                                                        </li>
                                                        <li><a href="#" class="item-link">How We Work</a>
                                                            <ul>
                                                                <li><a href="/how-we-work">How We Work</a></li>
                                                                <li><a href="/how-we-work/#warranty">Warranty/Garauntee</a></li>
                                                                <li><a href="/how-we-work/#cancellation">Cancellation</a></li>
                                                                <li><a href="/how-we-work/#shipping">Shipping</a></li>
                                                                <li><a href="/how-we-work/#refunds">Refunds</a></li>
                                                                <li><a href="/how-we-work/#retun">Returns</a></li>
                                                            </ul>
                                                        </li>
                                                        <li><a href="#" class="item-link">How Such Low Rates?</a>
                                                            <ul>
                                                                <li><a href="/basically-the-idea">Know Here</a></li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li><a href="/contact">Contact</a>
                                                    <ul class="sub-menu">
                                                        <li><a href="/contact">Cancel Order</a></li>
                                                        <li><a href="/contact">Support</a></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                    {/*Header Menu Area End*/}
                                </div>
                                <div class="col-xl-3 col-lg-4 col-md-5 col-12">
                                    {/*Header Search And Mini Cart Area Start*/}
                                    <div class="header-search-cart-area">
                                        <ul>
                                            {
                                                !this.state.login_btn ? (
                                                    <a href="/account" >
                                                        <img style={{ borderRadius: "50%", width: '50px' }} src={this.state.image} />
                                                    </a>
                                                ) : (
                                                    <div className="btn" onClick={this.sign_in} >Login</div>
                                                )
                                            }
                                        </ul>
                                    </div>
                                    {/*Header Search And Mini Cart Area End*/}
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

                {/*Header section end*/}

                {/*Header Mobile section start*/}
                <header class="header-mobile d-block d-lg-none">
                    <div class="header-bottom menu-right">
                        <div class="container">
                            <div class="row">
                                <div class="col-12">
                                    <div class="header-mobile-navigation d-block d-lg-none">
                                        <div class="row align-items-center">
                                            <div class="col-6 col-md-6">
                                                <div class="header-logo">
                                                    <a class="font-a" href="/" >
                                                        brownbox.
                                                    </a>
                                                </div>
                                            </div>
                                            <div class="col-6 col-md-6">
                                                <div class="mobile-navigation text-right">
                                                    <div class="header-icon-wrapper">
                                                        <div onClick={() => {
                                                            if (this.state.show_appbar.visibility === "hidden") {
                                                                this.setState({ show_appbar: { visibility: "visible" } })
                                                            } else {
                                                                this.setState({ show_appbar: { visibility: "hidden", height: "0px" } })
                                                            }
                                                        }} class="mobile-menu-icon" id="mobile-menu-trigger"><i class="fa fa-bars"></i></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/*Mobile Menu start*/}
                            <div class="row">
                                <div class="col-12 d-flex d-lg-none">
                                    <div class="mobile-menu"></div>
                                </div>
                            </div>
                            {/*Mobile Menu end*/}

                        </div>
                    </div>
                </header>
                {/*Header Mobile section end*/}

                {/* Offcanvas Menu Start */}
                <div class="d-block" style={this.state.show_appbar} >

                    <div class="offcanvas-wrapper">

                        <div class="offcanvas-inner-content">
                            <nav class="offcanvas-navigation">
                                <ul>
                                    <li class="menu-item-has-children"><a href="#">Home</a>
                                        {/*<ul class="submenu2">
                                            <li><a href="/display/Products/1pow">Product Of The Week</a></li>
                                            <li><a href="#upcoming-products">Upcoming Products</a></li>
                                            <li><a href="#next-product">Next Week's Product</a></li>
                                                    </ul>*/}
                                    </li>
                                    <li class="menu-item-has-children"><a href="#">Brown Box</a>
                                        <ul class="submenu2">
                                            <li class="menu-item-has-children"><a href="#">Pages</a>
                                                <ul class="submenu2">
                                                    <li><a href="/about">About Us</a></li>
                                                    <li><a href="/faq">FAQs</a></li>
                                                </ul>
                                            </li>
                                            <li class="menu-item-has-children"><a href="#">How We Work</a>
                                                <ul class="submenu2">
                                                    <li><a href="/how-we-work">How We Work</a></li>
                                                    <li><a href="/how-we-work/#warranty">Warranty/Garauntee</a></li>
                                                    <li><a href="/how-we-work/#cancellation">Cancellation</a></li>
                                                    <li><a href="/how-we-work/#shipping">Shipping</a></li>
                                                    <li><a href="/how-we-work/#refunds">Refunds</a></li>
                                                    <li><a href="/how-we-work/#retun">Returns</a></li>
                                                </ul>
                                            </li>
                                            <li class="menu-item-has-children"><a href="#">How Such Low Rates?</a>
                                                <ul class="submenu2">
                                                    <li><a href="/basically-the-idea">Know Here</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="menu-item-has-children"><a href="#">Contact</a>
                                        <ul class="submenu2">
                                            <li><a href="/contact">Cancel Order</a></li>
                                            <li><a href="/contact">Support</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>

                </div>
                {/* Offcanvas Menu End */}

                {/* main-search start */}
                <div class="main-search-active">
                    <div class="sidebar-search-icon">
                        <button class="search-close"><i class="fa fa-times"></i></button>
                    </div>
                    <div class="sidebar-search-input">
                        <form action="#">
                            <div class="form-search">
                                <input id="search" class="input-text" value="" placeholder="" type="search" />
                                <button>
                                    <i class="fa fa-search"></i>
                                </button>
                            </div>
                        </form>
                        <p class="form-description">Hit enter to search or ESC to close</p>
                    </div>
                </div>
                {/* main-search start */}


            </div>
        )
    }
}

export default AppBar


