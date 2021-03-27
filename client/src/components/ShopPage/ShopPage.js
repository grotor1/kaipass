import React, {useContext, useEffect, useState} from 'react'
import PerfectScrollbar from 'react-perfect-scrollbar'
import 'react-perfect-scrollbar/dist/css/styles.css'
import './ShopPage.css'
import '../../components/MyCourses/hover.css'
import w_1 from "./wings-1.svg"
import w_2 from "./wings-2.svg"
import snow from "./snow.svg"
import snowflake from "./snowflake.svg"
import rocket from "./rocket.svg"
import martial from "./martial-arts.svg"
import cart from "./cart.svg"
import dr from "./diamond-red.svg"
import moon from "./moon.svg"
import arrow from '../../components/MainPage/media/right-arrow 1.svg'
import {AuthContext} from "../../context/AuthContext";
import {useMessage} from "../../hooks/message.hook";
import {useHttp} from "../../hooks/http.hook";

const ShopPage = () => {
    return(
        <div className="shop-page-wrapper">
            <div className="shop-page-wrapper__left-section">
                <div className="shop-page-wrapper__left-section__top-section">
                    <div className="shop-page-wrapper__left-section__top-section__left">
                        <p className="prem">Премиум <span>Kai</span>Pass</p>
                        <img className="w_1" src={w_1} alt=""/>
                        <div className="shop-page-wrapper__left-section__top-section__left__button hvr-grow">
                            <p>КУПИТЬ</p>
                        </div>
                        <img className="w_2" src={w_2} alt=""/>
                    </div>
                    <div className="shop-page-wrapper__left-section__top-section__right">
                        <p>
                            - Ускоренное повышение уровня<br/>
                            - Скидка на усиления<br/>
                            - Увеличенное количество бесплатных курсов<br/>
                            - Скидка на покупку курсов<br/>
                            </p>
                    </div>
                </div>
                <div className="shop-page-wrapper__left-section__header">
                    <p>Усиления</p>
                </div>

                    <div className="shop-page-wrapper__left-section__bottom-section">
                        <div className="shop-page-wrapper__left-section__bottom-section__item m6p">
                            <img src={snow} alt=""/>
                            <p className="name"><span>Заморозка</span><br/>Сохраняет ударный режим,
                                на случай пропуска одного
                                дня занятий</p>
                            <div className="market">
                                <div className="market-circle">
                                    <img src={cart} alt="" className="cart"/>
                                </div>
                                <img className="diamond-red" src={dr} alt=""/>
                                <p className="price-market">100</p>
                            </div>
                        </div>
                        <div className="shop-page-wrapper__left-section__bottom-section__item">
                            <img src={martial} alt=""/>
                            <p className="name"><span>Рискованная атака</span><br/>При выполнении 10 заданий
                                за день количество полученных XP увеличивается в 2.5 раза</p>
                            <div className="market">
                                <div className="market-circle">
                                    <img src={cart} alt="" className="cart"/>
                                </div>
                                <img className="diamond-red" src={dr} alt=""/>
                                <p className="price-market">350</p>
                            </div>
                        </div>
                        <div className="shop-page-wrapper__left-section__bottom-section__item m20 m6p">
                            <img src={rocket} alt=""/>
                            <p className="name"><span>Марш бросок</span><br/>Ускоряет рост XP на один
                                день в 1.5 раза</p>
                            <div className="market">
                                <div className="market-circle">
                                    <img src={cart} alt="" className="cart"/>
                                </div>
                                <img className="diamond-red" src={dr} alt=""/>
                                <p className="price-market">150</p>
                            </div>
                        </div>
                        <div className="shop-page-wrapper__left-section__bottom-section__item m20">
                            <img src={snowflake} alt=""/>
                            <p className="name"><span>Криореанимация</span><br/>Сохраняет ударный режим,
                                на случай пропуска трех
                                дней</p>
                            <div className="market">
                                <div className="market-circle">
                                    <img src={cart} alt="" className="cart"/>
                                </div>
                                <img className="diamond-red" src={dr} alt=""/>
                                <p className="price-market">250</p>
                            </div>
                        </div>
                    </div>
            </div>
            <div className="shop-page-wrapper__right-section">
                <div className="shop-page-wrapper__right-section__top-section">
                    <div className="shop-page-wrapper__right-section__top-section__header">
                        <p>Внешний вид</p>
                    </div>
                    <div className="shop-page-wrapper__right-section__top-section__item">
                        <img src={moon} alt=""/>
                        <p>Темная тема</p>
                        <div className="buy-button">
                            <p>Купить | 50руб</p>
                        </div>
                    </div>
                </div>
                <div className="shop-page-wrapper__right-section__bottom-section">
                    <p className="header-bottom-r-spw">Купить кайны</p>
                    <div className="bottom-buy-button">
                        <p>20 Руб</p><p className="hgflgh">100</p>
                        <img src={dr} alt=""/>
                    </div>
                    <div className="bottom-buy-button m20">
                        <p>200 Руб</p><p className="hgflgh m50">1000</p>
                        <img src={dr} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShopPage