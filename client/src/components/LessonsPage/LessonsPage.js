import arrow_course from "../MyCourses/media/right-arrow.svg";
import React from 'react'
import wings from './media/level-wings.svg'
import achievment from './media/rectangle.svg'
import PerfectScrollbar from "react-perfect-scrollbar";
import './LessonsPage.css'

const LessonsPage = () => {
    return (
        <div className="lesson-page-wrapper">
            <div className="my-courses-wrapper__left-section">
                <div className="my-courses-wrapper__left-section__title">
                    <p>ReactJS для новичков: <span>nnn Уроков</span></p>
                </div>
                <div className="my-courses-wrapper__left-section__content white-background">
                    <PerfectScrollbar>
                        <div id="container"
                             className="my-courses-wrapper__left-section__content__courses-list scrollbar-primary">
                            <div className="lesson-page-wrapper__left-section__content__courses-list__item first-item">
                                <div className="lesson-page-wrapper__left-section__content__courses-list__item-lesson">
                                    <div
                                        className="lesson-page-wrapper__left-section__content__courses-list__item-lesson__circle">
                                        <div
                                            className="lesson-page-wrapper__left-section__content__courses-list__item-lesson__circle-pointer">
                                            <p>1</p>
                                        </div>
                                    </div>
                                    <p>Введение в React</p>

                                </div>
                            </div>
                            <div className="lesson-page-wrapper__left-section__content__courses-list__item first-item">
                                <div className="lesson-page-wrapper__left-section__content__courses-list__item-lesson">
                                    <div
                                        className="lesson-page-wrapper__left-section__content__courses-list__item-lesson__circle">
                                        <div
                                            className="lesson-page-wrapper__left-section__content__courses-list__item-lesson__circle-pointer">
                                            <p>2</p>
                                        </div>
                                    </div>

                                    <p>Философия React</p>

                                </div>
                                <div className="lesson-page-wrapper__left-section__content__courses-list__item-lesson">
                                    <div
                                        className="lesson-page-wrapper__left-section__content__courses-list__item-lesson__circle">
                                        <div
                                            className="lesson-page-wrapper__left-section__content__courses-list__item-lesson__circle-pointer">
                                            <p>3</p>
                                        </div>
                                    </div>
                                    <p>Синтаксис ES6</p>

                                </div>
                            </div>
                            <div className="lesson-page-wrapper__left-section__content__courses-list__item first-item">
                                <div className="lesson-page-wrapper__left-section__content__courses-list__item-lesson">
                                    <div
                                        className="lesson-page-wrapper__left-section__content__courses-list__item-lesson__circle">
                                        <div
                                            className="lesson-page-wrapper__left-section__content__courses-list__item-lesson__circle-pointer">
                                            <p>4</p>
                                        </div>
                                    </div>
                                    <p>Рендер компонентов</p>

                                </div>
                            </div>
                            <div className="lesson-page-wrapper__left-section__content__courses-list__item first-item">
                                <div className="lesson-page-wrapper__left-section__content__courses-list__item-lesson">
                                    <div
                                        className="lesson-page-wrapper__left-section__content__courses-list__item-lesson__circle">
                                        <div
                                            className="lesson-page-wrapper__left-section__content__courses-list__item-lesson__circle-pointer">
                                            <p>5</p>
                                        </div>
                                    </div>

                                    <p>Состояние объектов</p>

                                </div>
                                <div className="lesson-page-wrapper__left-section__content__courses-list__item-lesson">
                                    <div
                                        className="lesson-page-wrapper__left-section__content__courses-list__item-lesson__circle">
                                        <div
                                            className="lesson-page-wrapper__left-section__content__courses-list__item-lesson__circle-pointer">
                                            <p>6</p>
                                        </div>
                                    </div>
                                    <p>Жизненый цикл объекта</p>

                                </div>
                            </div>
                            <div className="lesson-page-wrapper__left-section__content__courses-list__item first-item">
                                <div className="lesson-page-wrapper__left-section__content__courses-list__item-lesson">
                                    <div
                                        className="lesson-page-wrapper__left-section__content__courses-list__item-lesson__circle">
                                        <div
                                            className="lesson-page-wrapper__left-section__content__courses-list__item-lesson__circle-pointer">
                                            <p>7</p>
                                        </div>
                                    </div>
                                    <p>Обработка событий</p>

                                </div>
                            </div>


                        </div>
                    </PerfectScrollbar>

                </div>
            </div>
            <div className="my-courses-wrapper__right-section">
                <div className="my-courses-wrapper__right-section__title">
                    <p>Ваш <span>Kai</span>Pass</p>
                </div>
                <div className="my-courses-wrapper__right-section__content">
                    <div className="my-courses-wrapper__right-section__content-top">
                        <div className="my-courses-wrapper__right-section__content-top__circle">
                            <p>10</p>

                        </div>
                        <div className="my-courses-wrapper__right-section__content-top__circle__level-wings">
                            <img src={wings} alt=""/>
                        </div>
                        <div className="my-courses-wrapper__right-section__content-top__progressbar">
                            <div className="progressbar">
                                <span></span>
                            </div>
                            <p>10/30</p>
                        </div>
                    </div>
                    <div className="my-courses-wrapper__right-section__content-center">
                        <div className="my-courses-wrapper__right-section__content-center__achivment-item">
                            <img src={achievment} alt=""/>
                            <div
                                className="my-courses-wrapper__right-section__content-center__achivment-item__type platinum">
                            </div>
                            <p>Мастер JS</p>
                        </div>
                        <div className="my-courses-wrapper__right-section__content-center__achivment-item">
                            <img src={achievment} alt=""/>
                            <div
                                className="my-courses-wrapper__right-section__content-center__achivment-item__type silver"></div>
                            <p>Прилежный ученик</p>
                        </div>
                        <div className="my-courses-wrapper__right-section__content-center__achivment-item">
                            <img src={achievment} alt=""/>
                            <div
                                className="my-courses-wrapper__right-section__content-center__achivment-item__type bronze"></div>
                            <p>Уже бывалый</p>
                        </div>
                    </div>
                    <a href="">Другие достижения...</a>
                    <div className="my-courses-wrapper__right-section__content-stripe">

                    </div>
                    <div className="my-courses-wrapper__right-section__content-bottom">
                        <div className="my-courses-wrapper__right-section__content-bottom__title">
                            <p>Календарь</p>
                        </div>
                        <div className="my-courses-wrapper__right-section__content-bottom__under">
                            <div className="my-courses-wrapper__right-section__content-bottom__under-left">

                            </div>
                            <div className="my-courses-wrapper__right-section__content-bottom__under-right">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LessonsPage