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
                                                <li><a href="index.html">Home</a>
                                                    <ul class="sub-menu">
                                                        <li><a href="/product/1">Product Of The Week</a></li>
                                                        <li><a href="/product/2">Game Of The Week</a></li>
                                                        <li><a href="#upcoming-products">Upcoming Products</a></li>
                                                        <li><a href="#next-product">Next Week's Product</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="shop.html">About Us</a>
                                                    <ul class="mega-menu four-column left-0">
                                                        <li><a href="#" class="item-link">About Us</a>
                                                            <ul>
                                                                <li><a href="about.html">About Products</a></li>
                                                                <li><a href="/faq">FAQs</a></li>
                                                            </ul>
                                                        </li>
                                                        <li><a href="#" class="item-link">How We Work</a>
                                                            <ul>
                                                                <li><a href="/how-we-work">How We Work</a></li>
                                                                <li><a href="/how-we-work/#warranty">Warranty/Garauntee</a></li>
                                                                <li><a href="/how-we-work/#cancelation">Cancelation</a></li>
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
                                                <li><a href="blog.html">Contact</a>
                                                    <ul class="sub-menu">
                                                        <li><a href="blog.html">Cancel Order</a></li>
                                                        <li><a href="blog-two-column.html">Support</a></li>
                                                        <li><a href="blog-left-sidebar.html">Phone</a></li>
                                                        <li><a href="blog-right-sidebar.html">Mail</a></li>
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
                                                        <img style={{borderRadius:"50%", width:'50px'}} src={this.state.image} />
                                                    </a>
                                                ):(
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
                                                        <ul class="icon-list justify-content-end">
                                                            <li>
                                                                <div class="header-cart-icon">
                                                                    <a href="cart.html"><i class="flaticon-shopping-cart"></i></a>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <a href="javascript:void(0)" class="mobile-menu-icon" id="mobile-menu-trigger"><i class="fa fa-bars"></i></a>
                                                            </li>
                                                        </ul>
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
                <div class="offcanvas-mobile-menu d-block d-lg-none" id="offcanvas-mobile-menu">
                    <a href="javascript:void(0)" class="offcanvas-menu-close" id="offcanvas-menu-close-trigger">
                        <i class="fa fa-times"></i>
                    </a>

                    <div class="offcanvas-wrapper">

                        <div class="offcanvas-inner-content">
                            <div class="offcanvas-mobile-search-area">
                                <form action="#">
                                    <input type="search" placeholder="Search ..." />
                                    <button type="submit"><i class="fa fa-search"></i></button>
                                </form>
                            </div>
                            <nav class="offcanvas-navigation">
                                <ul>
                                    <li class="menu-item-has-children"><a href="#">Home</a>
                                        <ul class="submenu2">
                                            <li><a href="index.html">Home 01</a></li>
                                            <li><a href="index-2.html">Home 02</a></li>
                                        </ul>
                                    </li>
                                    <li class="menu-item-has-children"><a href="#">Shop</a>
                                        <ul class="submenu2">
                                            <li class="menu-item-has-children"><a href="#">Pages</a>
                                                <ul class="submenu2">
                                                    <li><a href="about.html">About</a></li>
                                                    <li><a href="compare.html">Compare</a></li>
                                                    <li><a href="cart.html">Shopping Cart</a></li>
                                                    <li><a href="checkout.html">Checkout</a></li>
                                                    <li><a href="wishlist.html">Wishlist</a></li>
                                                    <li><a href="my-account.html">My Account</a></li>
                                                    <li><a href="login-register.html">Login Register</a></li>
                                                    <li><a href="faq.html">Frequently Questions</a></li>
                                                    <li><a href="404.html">Error 404</a></li>
                                                </ul>
                                            </li>
                                            <li class="menu-item-has-children"><a href="#">Shop Layout</a>
                                                <ul class="submenu2">
                                                    <li><a href="shop.html">Shop</a></li>
                                                    <li><a href="shop-three-column.html">Shop Three Column</a></li>
                                                    <li><a href="shop-four-column.html">Shop Four Column</a></li>
                                                    <li><a href="shop-right-sidebar.html">Shop Right Sidebar</a></li>
                                                    <li><a href="shop-list-nosidebar.html">Shop List No Sidebar</a></li>
                                                    <li><a href="shop-list-left-sidebar.html">Shop List Left Sidebar</a>
                                                    </li>
                                                    <li><a href="shop-list-right-sidebar.html">Shop List Right
                                                        Sidebar</a></li>
                                                </ul>
                                            </li>
                                            <li class="menu-item-has-children"><a href="#">Product Details</a>
                                                <ul class="submenu2">
                                                    <li><a href="single-product.html">Single Product</a></li>
                                                    <li><a href="single-product-variable.html">Variable Product</a></li>
                                                    <li><a href="single-product-affiliate.html">Affiliate Product</a>
                                                    </li>
                                                    <li><a href="single-product-group.html">Group Product</a></li>
                                                    <li><a href="single-product-tabstyle-2.html">Product Left Tab</a>
                                                    </li>
                                                    <li><a href="single-product-tabstyle-3.html">Product Right Tab</a>
                                                    </li>
                                                    <li><a href="single-product-gallery-left.html">Product Gallery
                                                        Left</a></li>
                                                    <li><a href="single-product-gallery-right.html">Product Gallery
                                                        Right</a></li>
                                                </ul>
                                            </li>
                                            <li class="menu-item-has-children"><a href="#">Product Details</a>
                                                <ul class="submenu2">
                                                    <li><a href="single-product-sticky-left.html">Product Sticky
                                                        Left</a></li>
                                                    <li><a href="single-product-sticky-right.html">Product Sticky
                                                        Right</a></li>
                                                    <li><a href="single-product-slider-box.html">Product Box Slider</a>
                                                    </li>
                                                </ul>
                                            </li>

                                        </ul>
                                    </li>
                                    <li><a href="shop.html">New Arrivals</a></li>
                                    <li class="menu-item-has-children"><a href="#">Pages</a>
                                        <ul class="submenu2">
                                            <li><a href="blog.html">Blog</a></li>
                                            <li><a href="blog-two-column.html">Blog Two Column</a></li>
                                            <li><a href="blog-left-sidebar.html">Blog Left Sidebar</a></li>
                                            <li><a href="blog-right-sidebar.html">Blog Right Sidebar</a></li>
                                            <li><a href="blog-details.html">Blog Details</a></li>
                                            <li><a href="blog-details-gallery.html">Blog Details Gallery</a></li>
                                            <li><a href="blog-details-audio.html">Blog Details Audio</a></li>
                                            <li><a href="blog-details-video.html">Blog Details Video</a></li>
                                        </ul>
                                    </li>
                                    <li class="menu-item-has-children"><a href="contact.html">Contact</a>
                                    </li>

                                </ul>
                            </nav>

                            <div class="offcanvas-settings">
                                <nav class="offcanvas-navigation">
                                    <ul>
                                        <li class="menu-item-has-children"><a href="#">MY ACCOUNT </a>
                                            <ul class="submenu2">
                                                <li><a href="login-register.html">Login</a></li>
                                                <li><a href="checkout.html">Checkout</a></li>
                                                <li><a href="my-account.html">My account</a></li>
                                                <li><a href="cart.html">Cart</a></li>
                                                <li><a href="wishlist.html">Wishlist</a></li>
                                            </ul>
                                        </li>
                                        <li class="menu-item-has-children"><a href="#">CURRENCY: USD </a>
                                            <ul class="submenu2">
                                                <li><a href="javascript:void(0)">€ Euro</a></li>
                                                <li><a href="javascript:void(0)">$ US Dollar</a></li>
                                            </ul>
                                        </li>
                                        <li class="menu-item-has-children"><a href="#">LANGUAGE: EN-GB </a>
                                            <ul class="submenu2">
                                                <li><a href="javascript:void(0)"><img src="./https://demo.hasthemes.com/nelson-preview/nelson/assets/images/icons/en-gb.png" alt="" /> English</a></li>
                                                <li><a href="javascript:void(0)"><img src="./https://demo.hasthemes.com/nelson-preview/nelson/assets/images/icons/de-de.png" alt="" /> Germany</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </nav>
                            </div>

                            <div class="offcanvas-widget-area">
                                <div class="off-canvas-contact-widget">
                                    <div class="header-contact-info">
                                        <ul class="header-contact-info-list">
                                            <li><i class="ion-android-phone-portrait"></i> <a href="tel://12452456012">(1245) 2456 012 </a></li>
                                            <li><i class="ion-android-mail"></i> <a href="mailto:info@yourdomain.com">info@yourdomain.com</a></li>
                                        </ul>
                                    </div>
                                </div>
                                {/*Off Canvas Widget Social Start*/}
                                <div class="off-canvas-widget-social">
                                    <a href="#" title="Facebook"><i class="fa fa-facebook"></i></a>
                                    <a href="#" title="Twitter"><i class="fa fa-twitter"></i></a>
                                    <a href="#" title="LinkedIn"><i class="fa fa-linkedin"></i></a>
                                    <a href="#" title="Youtube"><i class="fa fa-youtube-play"></i></a>
                                    <a href="#" title="Vimeo"><i class="fa fa-vimeo-square"></i></a>
                                </div>
                                {/*Off Canvas Widget Social End*/}
                            </div>
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


