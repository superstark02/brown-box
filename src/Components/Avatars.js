import React, { Component } from 'react'
import Avatar from '@material-ui/core/Avatar';
import AvatarGroup from '@material-ui/lab/AvatarGroup';
import axios from 'axios'

export class Avatars extends Component {

    state = {
        data: null
    }

    componentDidMount() {
        axios.get("https://sheet.best/api/sheets/8469573a-bf05-40b5-9d7f-4c1dcbdad8b1")
            .then(res => {
                this.setState({ data: res.data })
            })
    }

    render() {
        if (this.state.data) {
            return (
                <div>
                    <div>
                        <AvatarGroup max={4}>
                            {
                                this.state.data &&
                                this.state.data.map(item => {
                                    return (
                                        <Avatar alt={item.name} src={item.photo} />
                                    )
                                })
                            }
                        </AvatarGroup>
                    </div>

                    <div>
                        {this.state.data.length}+ orders received. 
                    </div>
                </div>
            )
        }
        else{
            return(
                <div></div>
            )
        }
    }
}

export default Avatars
