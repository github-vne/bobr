import React, {Component} from 'react';
import NewsItem from "../Home/NewsItem";
import arrowImg from "../../Static/img/stats/arrow.png";
import favoriteImg from "../../Static/img/stats/favorite.png";
import eyeImg from "../../Static/img/stats/eye.png";
import commentsImg from "../../Static/img/stats/comments.png";

export default class Post extends Component {
    render() {
        return (
            <section className="main_left">
                <div className="top_news">
                    <div className="user_icon">
                        <img src="https://storage.googleapis.com/vasenking/user_icon/user_0.jpg" alt=""/>
                    </div>
                    <p className="user_name">User Name</p>
                    <p className="news_time">вчера в 16:00</p>
                </div>
                <h1 className="title_news">
                    Название новости
                </h1>
                <div className="heading_news">
                    <p>DIY или Сделай сам</p>
                    <p>Машинное обучение</p>
                    <p>Работа с видео</p>
                </div>
                <div className="text_news">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Aperiam aut, autem consectetur dolore doloribus, dolorum
                    earum est et eum facilis ipsam ipsum minima nam natus nisi
                    quisquam temporibus ullam velit.<br/><br/>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Aperiam aut, autem consectetur dolore doloribus, dolorum
                    earum est et eum facilis ipsam ipsum minima nam natus nisi
                    quisquam temporibus ullam velit.<br/><br/>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Aperiam aut, autem consectetur dolore doloribus, dolorum
                    earum est et eum facilis ipsam ipsum minima nam natus nisi
                    quisquam temporibus ullam velit.<br/><br/>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Aperiam aut, autem consectetur dolore doloribus, dolorum
                    earum est et eum facilis ipsam ipsum minima nam natus nisi
                    quisquam temporibus ullam velit.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Aperiam aut, autem consectetur dolore doloribus, dolorum
                    earum est et eum facilis ipsam ipsum minima nam natus nisi
                    quisquam temporibus ullam velit.<br/><br/>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Aperiam aut, autem consectetur dolore doloribus, dolorum
                    earum est et eum facilis ipsam ipsum minima nam natus nisi
                    quisquam temporibus ullam velit.<br/><br/>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Aperiam aut, autem consectetur dolore doloribus, dolorum
                    earum est et eum facilis ipsam ipsum minima nam natus nisi
                    quisquam temporibus ullam velit.<br/><br/>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Aperiam aut, autem consectetur dolore doloribus, dolorum
                    earum est et eum facilis ipsam ipsum minima nam natus nisi
                    quisquam temporibus ullam velit.
                </div>
                <div className="news_stats">
                    <div className="news_vote">
                        <img src={arrowImg} alt="arrowUp"/>
                        <i>+22</i>
                        <img src={arrowImg} alt="arrowDown" className="stats_arrow_down"/>
                    </div>
                    <div className="news_favorite">
                        <img src={favoriteImg} alt="favorite"/>
                        <i>32</i>
                    </div>
                    <div className="news_views">
                        <img src={eyeImg} alt="eye"/>
                        <i>11,5k</i>
                    </div>

                    <div className="news_comments">
                        <img src={commentsImg} alt="comments"/>
                        <i>90</i>
                    </div>
                </div>
            </section>
        )
    }
}