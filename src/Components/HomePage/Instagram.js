import React, { Component } from 'react'
import logo from "../../Images/bb-logo-grey.png"
import axios from 'axios'

const secret = "5j7gx4mhm4wykiv3msm1qvbwy8ii5g"
const id = "bqn55qlf2g0eeczt8xevw52clydw5z"

const google = "906f69ea6da5466498519417d6aee54b"

const news = [
    {
        image: "https://techcrunch.com/wp-content/uploads/2021/06/GettyImages-954558336.jpg?w=599",
        author: "TechCrunch",
        desc: "The global transition to electrification has increased demand for longer-lasting and faster-charging batteries. But battery innovation hasn’t kept pace with society’s ambitions.",
        link: "http://techcrunch.com/2021/06/10/widespread-electrification-requires-us-to-rethink-battery-technology/"
    },
    {
        image: "https://s.yimg.com/uu/api/res/1.2/GvK96rOtt94M4BJTwyQqUQ--~B/Zmk9ZmlsbDtoPTQwMjt3PTY3NTthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/os/creatr-uploaded-images/2021-05/fd12e750-c20d-11eb-85ef-c8d4cf2a6a9b.cf.webp",
        author: "Engadget",
        desc: "Google's QUIC data technology is now an official internet standard, potentially improving connections worldwide..",
        link: "https://www.engadget.com/google-quic-becomes-official-internet-standard-170000970.html"
    },
    {
        image: "https://media.wired.com/photos/60b6bd7684acd39aeb655500/191:100/w_1280,c_limit/Gear-VR-OCD-therapy-668541394.jpg",
        author: "Wired",
        desc: "Obsessive-compulsive disorder is often misunderstood. Here’s what it is, and how you can use technology to help navigate uncertainty.",
        link: "https://www.wired.com/story/apps-vr-help-ocd-obsessive-compulsive-disorder-patients/"
    }
]

export default class Instagram extends Component {

    state = {
        news: null
    }

    componentDidMount() {
        axios.get("https://newsapi.org/v2/everything?q=technology&apiKey=906f69ea6da5466498519417d6aee54b")
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
                                {
                                    news.map(item => {
                                        return (
                                            <div class="blog col-lg-4 col-md-6">
                                                <div class="blog-inner mb-30">
                                                    <div class="blog-media">
                                                        <a href={item.link} class="image">
                                                            <img src={item.image} alt="" />
                                                        </a>
                                                    </div>
                                                    <div class="content">
                                                        <ul class="meta">
                                                            <li>{item.author}</li>
                                                        </ul>
                                                        <h3 class="title">
                                                            <a href={item.link} style={{ textOverflow: "ellipsis" }} >
                                                                {item.desc}
                                                            </a>
                                                        </h3>
                                                        <a class="read-more" href={item.link}>Read more</a>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
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