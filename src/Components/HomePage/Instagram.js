import React, { Component } from 'react'
import logo from "../../Images/bb-logo-grey.png"
import axios from 'axios'

const secret = "5j7gx4mhm4wykiv3msm1qvbwy8ii5g"
const id = "bqn55qlf2g0eeczt8xevw52clydw5z"

const google = "906f69ea6da5466498519417d6aee54b"

export default class Instagram extends Component {

    state = {
        news: null
    }

    componentDidMount() {
        axios.get("https://newsapi.org/v2/everything?q=gaming&apiKey=906f69ea6da5466498519417d6aee54b")
            .then(res => {

                console.log(res.data)

                this.setState({ news: res.data })

            }).catch(err => {
                console.log(err)
            })
    }

    render() {
        if (this.state.news) {
            return (
                <div>
                    <div class="blog-section section pt-65 pt-lg-45 pt-md-35 pt-sm-20 pt-xs-15 pb-65 pb-lg-45 pb-md-35 pb-sm-25 pb-xs-15">
                        <div class="container">

                            <div class="row mb-50 mb-xs-20">
                                <div class="col">
                                    <div class="section-title text-center">
                                        <h2>Tech News</h2>
                                        <span>BLOG POST</span>
                                    </div>
                                </div>
                            </div>

                            <div class="row">
                                <div class="blog col-lg-4 col-md-6">
                                    <div class="blog-inner mb-30">
                                        <div class="blog-media">
                                            <a href={this.state.news.articles[0].url} class="image">
                                                <img src={this.state.news.articles[0].urlToImage} alt="" />
                                            </a>
                                        </div>
                                        <div class="content">
                                            <ul class="meta">
                                                <li>{this.state.news.articles[0].source.name}</li>
                                            </ul>
                                            <h3 class="title">
                                                <a href={this.state.news.articles[0].url} style={{ textOverflow: "ellipsis" }} >
                                                    {this.state.news.articles[0].description}
                                                </a>
                                            </h3>
                                            <a class="read-more" href={this.state.news.articles[0].url}>Read more</a>
                                        </div>
                                    </div>
                                </div>

                                <div class="blog col-lg-4 col-md-6">
                                    <div class="blog-inner mb-30">
                                        <div class="blog-media">
                                            <a href={this.state.news.articles[1].url} class="image">
                                                <img src={this.state.news.articles[1].urlToImage} alt="" />
                                            </a>
                                        </div>
                                        <div class="content">
                                            <ul class="meta">
                                                <li>{this.state.news.articles[1].source.name}</li>
                                            </ul>
                                            <h3 class="title">
                                                <a href={this.state.news.articles[1].url} style={{ textOverflow: "ellipsis" }} >
                                                    {this.state.news.articles[1].description}
                                                </a>
                                            </h3>
                                            <a class="read-more" href={this.state.news.articles[1].url}>Read more</a>
                                        </div>
                                    </div>
                                </div>

                                <div class="blog col-lg-4 col-md-6">
                                    <div class="blog-inner mb-30">
                                        <div class="blog-media">
                                            <a href={this.state.news.articles[2].url} class="image">
                                                <img src={this.state.news.articles[2].urlToImage} alt="" />
                                            </a>
                                        </div>
                                        <div class="content">
                                            <ul class="meta">
                                                <li>{this.state.news.articles[2].source.name}</li>
                                            </ul>
                                            <h3 class="title">
                                                <a href={this.state.news.articles[2].url} style={{ textOverflow: "ellipsis" }} >
                                                    {this.state.news.articles[2].description}
                                                </a>
                                            </h3>
                                            <a class="read-more" href={this.state.news.articles[2].url}>Read more</a>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>

                    <div class="testimonial-section section pb-80 pb-lg-60 pb-md-50 pb-sm-40 pb-xs-40">
                        <div class="container">
                            <div class="row">
                                <div class="col-12">
                                    <div class="testimonial-wrap  pt-45 pb-30" style={{ backgroundColor: 'rgba(255,255,255,1)' }} >
                                        <div class="row justify-content-center">
                                            <div class="col-lg-12">
                                                <div class="testimonial-wrapper section-space--inner" >
                                                    <div class="testimonial-slider-content">

                                                        <div class="item">
                                                            <div class="row align-items-center">
                                                                <div class="col-md-5">
                                                                    <div >
                                                                        <img src={logo} alt="" />
                                                                    </div>
                                                                </div>
                                                                <div class="col-md-7">
                                                                    <div class="testimonial testimonial-style-2 gutter-item">
                                                                        <div class="testimonial-inner">
                                                                            <div class="testimonial-author">
                                                                                <div class="author-thumb">
                                                                                    <img src="https://www.edigitalagency.com.au/wp-content/uploads/instagram-logo-svg-vector-for-print.svg" alt="" />
                                                                                </div>
                                                                                <div class="author-info">
                                                                                    <h4>Join Us</h4>
                                                                                    <span>Instagram</span>
                                                                                </div>
                                                                            </div>
                                                                            <div class="testimonial-description">
                                                                                <blockquote class="testimonials-text">
                                                                                    <p>Follow us on Instagram to get new products every week. Lowest rates guaranteed</p>
                                                                                </blockquote>
                                                                                <div>
                                                                                    <a href="https://www.instagram.com/brownbox_india/" >
                                                                                        <button className="btn" >
                                                                                            Join
                                                                                        </button>
                                                                                    </a>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
        else {
            return (<div></div>)
        }
    }
}