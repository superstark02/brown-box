import React, { Component } from 'react'
import "./AppBar.css"
import logo from "../Images/bblogo.jfif"
import "../NicePage/Products/Home.css"
import "../NicePage/Products/nicepage.css"
import "../NicePage/Products/Post-Template.css"
import { FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom'
import firebase from 'firebase'
import { SettingsInputAntennaTwoTone } from '@material-ui/icons'
import login from '../Database/Login'

export class AppBar extends Component {

    state = {
        login_btn: true,
        image: null
    }

    componentDidMount() {
        firebase.auth().onAuthStateChanged(user=>{
            if(user){
                this.setState({image: user.photoURL})
                this.setState({login_btn:false})
            }else{
                this.setState({login_btn:true})
            }
        });
    }

    sign_in = async () => {
        login();
    }

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
                        {
                            this.state.login_btn ? (
                                <button class="app-std-btn" onClick={this.sign_in} >
                                    Login
                                </button>
                            ) : (
                                <div className="wrap" >
                                    {/*<a href="/cart">
                                        <div class="total">
                                    <ShoppingCart />
                                    (<span id="simpleCart_quantity" class="simpleCart_quantity"></span>)
                                    </div>
                                    </a>*/}
                                    <a href="/login" style={{}} >
                                        <div>
                                            <img src={this.state.image} className="profile-photo" />
                                        </div>
                                    </a>
                                    <div class="clearfix"> </div>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default AppBar


