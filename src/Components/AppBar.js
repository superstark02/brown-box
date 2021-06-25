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
                
            </header>
        )
    }
}

export default AppBar


