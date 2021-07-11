import React, { Component } from 'react'
import Countdown from 'react-countdown';

export class MyCountdown extends Component {

    renderer = ({ days, hours, minutes, seconds, completed }) => {
        if (completed) {
        } else {
            // Render a countdown
            return <div className="wrap" >
                <div className="countdown">
                    <div>{days}</div>
                    <div className="sub-text" >Days</div> 
                </div>
                <div className="countdown">
                    <div>{hours}</div>
                    <div className="sub-text" >Hours</div> 
                </div>
                <div className="countdown">
                    <div>{minutes}</div>
                    <div className="sub-text" >Minutes</div> 
                </div>
            </div>;
        }
    };

    render() {
        return (
            <div>
                <Countdown date="07-19-2021" renderer={this.renderer} />
            </div>
        )
    }
}

export default MyCountdown
