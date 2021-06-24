import React, { Component } from 'react'
import logo from "../Images/bblogo.jfif"
import firebase from 'firebase'
import login from '../Database/Login'

export class AppBar extends Component {

    state = {
        login_btn: true,
        image: null
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
            <header>
                <div class="header-bottom wrapper-padding-2 res-header-sm sticker header-sticky-3 furits-header">
                    <div class="container-fluid">
                        <div class="header-bottom-wrapper">
                            <div class="logo-2 ptb-35">
                                <a href="index.html">
                                    <img width="10%" src={logo} alt="" />
                                </a>
                            </div>
                            <div class="menu-style-2 handicraft-menu menu-hover">
                                <nav>
                                    <ul>
                                        <li><a href="#">home</a>
                                            <ul class="single-dropdown">
                                                <li><a href="index.html">Fashion</a></li>
                                                <li><a href="index-fashion-2.html">Fashion style 2</a></li>
                                                <li><a href="index-fruits.html">fruits</a></li>
                                                <li><a href="index-book.html">book</a></li>
                                                <li><a href="index-electronics.html">electronics</a></li>
                                                <li><a href="index-electronics-2.html">electronics style 2</a></li>
                                                <li><a href="index-food.html">food & drink</a></li>
                                                <li><a href="index-furniture.html">furniture</a></li>
                                                <li><a href="index-handicraft.html">handicraft</a></li>
                                                <li><a target="_blank" href="index-smart-watch.html">smart watch</a></li>
                                                <li><a href="index-sports.html">sports</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="#">about us</a>
                                            <ul class="single-dropdown">
                                                <li><a href="about-us.html">about us</a></li>
                                                <li><a href="menu-list.html">menu list</a></li>
                                                <li><a href="login.html">login</a></li>
                                                <li><a href="register.html">register</a></li>
                                                <li><a href="cart.html">cart page</a></li>
                                                <li><a href="checkout.html">checkout</a></li>
                                                <li><a href="wishlist.html">wishlist</a></li>
                                                <li><a href="contact.html">contact</a></li>
                                            </ul>
                                        </li>
                                        {/*<li><a href="shop.html">shop</a>
                                            <div class="category-menu-dropdown shop-menu">
                                                <div class="category-dropdown-style category-common2 mb-30">
                                                    <h4 class="categories-subtitle"> shop layout</h4>
                                                    <ul>
                                                        <li><a href="shop-grid-2-col.html"> grid 2 column</a></li>
                                                        <li><a href="shop-grid-3-col.html"> grid 3 column</a></li>
                                                        <li><a href="shop.html">grid 4 column</a></li>
                                                        <li><a href="shop-grid-box.html">grid box style</a></li>
                                                        <li><a href="shop-list-1-col.html"> list 1 column</a></li>
                                                        <li><a href="shop-list-2-col.html">list 2 column</a></li>
                                                        <li><a href="shop-list-box.html">list box style</a></li>
                                                        <li><a href="cart.html">shopping cart</a></li>
                                                        <li><a href="wishlist.html">wishlist</a></li>
                                                    </ul>
                                                </div>
                                                <div class="category-dropdown-style category-common2 mb-30">
                                                    <h4 class="categories-subtitle"> product details</h4>
                                                    <ul>
                                                        <li><a href="product-details.html">tab style 1</a></li>
                                                        <li><a href="product-details-2.html">tab style 2</a></li>
                                                        <li><a href="product-details-3.html"> tab style 3</a></li>
                                                        <li><a href="product-details-4.html">sticky style</a></li>
                                                        <li><a href="product-details-5.html">sticky style 2</a></li>
                                                        <li><a href="product-details-6.html">gallery style</a></li>
                                                        <li><a href="product-details-7.html">gallery style 2</a></li>
                                                        <li><a href="product-details-8.html">fixed image style</a></li>
                                                        <li><a href="product-details-9.html">fixed image style 2</a></li>
                                                    </ul>
                                                </div>
                                                <div class="mega-banner-img">
                                                    <a href="single-product.html">
                                                        <img src="https://demo.hasthemes.com/ezone-preview/ezone-v1/assets/img/banner/18.jpg" alt="" />
                                                    </a>
                                                </div>
                                            </div>
                                        </li>*/}
                                        <li><a href="contact.html">contact us</a></li>
                                    </ul>
                                </nav>
                            </div>
                            <div class="furits-login-cart">
                                <div class="furits-login">
                                    <ul>
                                        <li>
                                            <a href="login.html">Login</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </header>
        )
    }
}

export default AppBar


