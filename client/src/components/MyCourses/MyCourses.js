import React, {useContext, useEffect, useState} from 'react'
import './MyCourses.css'
import wings from './media/level-wings.svg'
import achievment from './media/rectangle.svg'
import PerfectScrollbar from "react-perfect-scrollbar";
import arrow_course from './media/right-arrow.svg'
import './hover.css'
import {AuthContext} from "../../context/AuthContext";
import {useMessage} from "../../hooks/message.hook";
import {useHttp} from "../../hooks/http.hook";
import {withRouter, Link} from "react-router-dom";

const container = document.querySelector('container');
const ps = new PerfectScrollbar(container);


const MyCourses = () => {
    const auth = useContext(AuthContext);
    const message = useMessage()
    const [courses, setCourses] = useState([]);
    const {loading, request, error, clearError} = useHttp();
    useEffect(() => {
        const dataFromServer = async () => {
            const {data} = await request(`api/fetch/usersInfGet/${auth._id_userInf}`, 'GET')
            const currentCourses = data.courses
            const stateLessons = []
            for (let i = 0; i < currentCourses.length; i++) {
                const element = currentCourses[i]
                const {data} = await request(`api/fetch/coursesGet/${element._id_courses}`)
                stateLessons.push(data)
            }
            setCourses(stateLessons)
        }
        dataFromServer()
    }, [request, auth])
    return (
        <div className="my-courses-wrapper">
            <div className="my-courses-wrapper__left-section">
                <div className="my-courses-wrapper__left-section__title">
                    <p>Мои курсы: <span>{courses.length}</span></p>
                </div>
                <div className="my-courses-wrapper__left-section__content white-background">
                    <PerfectScrollbar>
                        {courses.map(element => {
                            return (
                                <div id="container"
                                     className="my-courses-wrapper__left-section__content__courses-list scrollbar-primary">
                                    <div
                                        className="my-courses-wrapper__left-section__content__courses-list__item first-item">
                                        <div
                                            className="my-courses-wrapper__left-section__content__courses-list__item__image">
                                            <img src="" alt=""/>
                                        </div>
                                        <div
                                            className="my-courses-wrapper__left-section__content__courses-list__item__title">
                                            <p>{element.name}<br/>
                                                <span>
                                                Кол-во часов: {element.hours} ч<br/>
                                                Участники: {element.usersCount}<br/>
                                            </span>
                                            </p>
                                        </div>
                                        <Link to={`/lessons/${element._id}`}>
                                            <div
                                                className="my-courses-wrapper__left-section__content__courses-list__item__button hvr-forward">
                                                <p>Продолжить</p>
                                                <img src={arrow_course} alt=""/>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            )
                        })}
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

export default withRouter(MyCourses)