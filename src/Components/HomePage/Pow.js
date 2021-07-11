import React, { Component } from 'react';
import getDoc from '../../Database/getDoc';
import logo from "../../Images/bb-logo-grey.png"

class Pow extends Component {

    state = {
        product: null
    }

    componentDidMount() {
        getDoc("Products", "1pow").then(snap => {
            this.setState({ product: snap })
        })
    }

    render() {
        if (this.state.product) {
            return (
                <div style={{marginTop:'50px', marginBottom:"50px"}} >
                    <div class="container">
                        <div class="my-wrap">
                            <div className="my-wrap">
                                <div>
                                    <img className="floating" src={this.state.product.image} alt="" />
                                </div>
                            </div>
                            <div  className="my-wrap">
                                <div class="testimonial testimonial-style-2 gutter-item">
                                    <div class="testimonial-inner">
                                        <div class="testimonial-author">
                                            <div class="author-info">
                                                <h2>Product For This Week</h2>
                                                <h4>{this.state.product.name}</h4>
                                                <span>&#8377;{this.state.product.sp}/-</span>
                                            </div>
                                        </div>
                                        <div class="testimonial-description">
                                            <blockquote class="testimonials-text">
                                                <p>{this.state.product.highlights}</p>
                                            </blockquote>
                                            <div>
                                                <a href="/display/Products/1pow" >
                                                    <button className="btn" >
                                                        VIEW
                                                    </button>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
            );
        } else {
            return (<div></div>)
        }
    }
}

export default Pow;