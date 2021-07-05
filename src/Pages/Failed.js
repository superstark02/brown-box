import React, { Component } from 'react';
import "../css/failed.css"

class Failed extends Component {
    render() {
        return (
            <div className="body" >
                <div class="container-f">
                    <div class="ui middle aligned center aligned grid">
                        <div class="ui eight wide column">

                            <form class="ui large form">

                                <div class="ui icon negative message">
                                    <i class="warning icon"></i>
                                    <div class="content">
                                        <div class="header">
                                            Oops! Something went wrong.
                                        </div>
                                        <p className="p" >Payment failed or has been cancelled.</p>
                                    </div>

                                </div>

                                <a href="/display/Products/1pow" >
                                    <span class="ui large teal submit fluid btn">Try again</span>
                                </a>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Failed;