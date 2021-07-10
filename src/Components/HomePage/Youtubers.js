import React, { Component } from 'react';

const news = [
    {
        image: "https://yt3.ggpht.com/pmNBluM8Pnkt_3fEj5yb3oXtLYlbuUvwRlNnQWU0L8zQjquULJFUvc0_ieJM9qVLuvtJAu9Av1o=s176-c-k-c0x00ffffff-no-rj",
        author: "DEVIL LITE 2.0",
        desc: "Welcome to my YouTube channel. DISCLAIMER: Please don't go out of your way to or hate on anyone I talk about in my videos, this channel is to entertain people and I usually focus on joking about what the people are doing not the individual themselves, please don\'t go spreading hate it\'s all for laughs.",
        link: "https://www.youtube.com/channel/UCi1X19aoZB9wxkK3Z0m6lDA"
    },
    {
        image: "https://yt3.ggpht.com/ytc/AKedOLRH7ahV9I3lhlxZiEga9yOEjBbPsbCKKsgB3lZMIA=s176-c-k-c0x00ffffff-no-rj",
        author: "Vishal Gaming",
        desc: "Welcome to Vishal Gaming ! We upload high quality mobile gameplay videos every day. Please Support Vishal Gaming Channel! DO LIKE IF YOU ENJOYED GAMING. DON'T FORGET TO SUBSCRIBE. KEEP SMILING AND STAY WITH US",
        link: "https://www.youtube.com/channel/UCne-Tfk9T_L-RqILZegqJxw/featured"
    },
    {
        image: "https://yt3.ggpht.com/ytc/AKedOLQuWmabU8bElIjyCI5gzycfIusHYmZR6bAvEmpxVQ=s176-c-k-c0x00ffffff-no-rj",
        author: "LETS GAMING",
        desc: "Hi guys welcome to our channel,first of all thanks for visiting our channel and guys we do regularly live streaming of games and post some interesting videos about games updates and watch one of our video if you like it hit that subscribe button and also the bell icon for to get updated about things on our channel.",
        link: "https://www.youtube.com/c/letsknowtech/featured"
    }
]

class Youtubers extends Component {
    render() {
        return (
            <div>
                <div class="blog-section section pt-65 pt-lg-45 pt-md-35 pt-sm-20 pt-xs-15 pb-65 pb-lg-45 pb-md-35 pb-sm-25 pb-xs-15">
                    <div class="container">

                        <div class="row mb-50 mb-xs-20">
                            <div class="col">
                                <div class="section-title text-center">
                                    <h2>Partnered Youtubers</h2>
                                    <span>GAMING</span>
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
                                                    <a class="read-more" href={item.link}>Subscribe</a>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default Youtubers;