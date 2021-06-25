import React, { Component } from 'react'
import AppBar from '../Components/AppBar'
import { MyFooter } from '../Components/Footer'

export class Home extends Component {
    render() {
        return (
            <div>
                <AppBar />   

                <MyFooter />
            </div>
        )
    }
}

export default Home
