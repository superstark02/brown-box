import React, { Component } from 'react'

export class Feedback extends Component {
    render() {
        return (
            <div class="newsletter-section section bg-gray-two pt-100 pt-lg-80 pt-md-70 pt-sm-60 pt-xs-50 pb-95 pb-lg-75 pb-md-65 pb-sm-60 pb-xs-50">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-lg-6">
                            <div class="newsletter-content">
                                <h2>Subscribe Our Newsletter</h2>
                                <p>Subscribe Today for free and save 10% on your first purchase.</p>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="newsletter-wrap">
                                <div class="newsletter-form">
                                    <form id="mc-form" class="mc-form">
                                        <input type="email" placeholder="Enter Your Email Address Here..." required />
                                        <button type="submit" value="submit">SUBSCRIBE!</button>
                                    </form>

                                </div>
                                {/*mailchimp-alerts Start */}
                                <div class="mailchimp-alerts">
                                    <div class="mailchimp-submitting"></div>{/*mailchimp-submitting end */}
                                    <div class="mailchimp-success"></div>{/*mailchimp-success end */}
                                    <div class="mailchimp-error"></div>{/*mailchimp-error end */}
                                </div>
                                {/*mailchimp-alerts end */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Feedback
