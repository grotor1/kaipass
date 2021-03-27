import arrow_course from "../MyCourses/media/right-arrow.svg";
import React, {useContext, useEffect, useState} from 'react'
import wings from './media/level-wings.svg'
import achievment from './media/rectangle.svg'
import PerfectScrollbar from "react-perfect-scrollbar";
import './LessonsPage.css'
import {AuthContext} from "../../context/AuthContext";
import {useMessage} from "../../hooks/message.hook";
import {useHttp} from "../../hooks/http.hook";
import {useParams} from "react-router-dom";

const LessonsPage = () => {
    const auth = useContext(AuthContext);
    const message = useMessage()
    const [course, setCourse] = useState({})
    const [lessons, setLessons] = useState([]);
    const {loading, request, error, clearError} = useHttp();
    const {_id} = useParams()
    useEffect(() => {
        const dataFromServer = async () => {
            const {data} = await request(`/api/fetch/coursesGet/${_id}`, 'GET')
            setCourse(data)
            const currentLessons = data.lessons
            const stateLessons = []
            for (let i = 0; i < currentLessons.length; i++) {
                const element = currentLessons[i]
                const {data} = await request(`/api/fetch/lessonsGet/${element._id_lesson}`)
                stateLessons.push(data)
            }
            console.log(stateLessons)
            setLessons(stateLessons)
        }
        dataFromServer()
    }, [request, auth])
    console.log(lessons)
    return (
        <div className="lesson-page-wrapper">
            <div className="my-courses-wrapper__left-section">
                <div className="my-courses-wrapper__left-section__title">
                    <p>{course.name}: <span>{lessons.length} Урока</span></p>
                </div>
                <div className="my-courses-wrapper__left-section__content white-background">
                    <PerfectScrollbar>
                        <div id="container"
                             className="my-courses-wrapper__left-section__content__courses-list scrollbar-primary">
                            {lessons.map((value, index) => {
                                return (
                                    <div
                                        className="lesson-page-wrapper__left-section__content__courses-list__item first-item">
                                        <div
                                            className="lesson-page-wrapper__left-section__content__courses-list__item-lesson">
                                            <div
                                                className="lesson-page-wrapper__left-section__content__courses-list__item-lesson__circle">
                                                <div
                                                    className="lesson-page-wrapper__left-section__content__courses-list__item-lesson__circle-pointer">
                                                    <p>{index + 1}</p>
                                                </div>
                                            </div>
                                            <p>{value.name}</p>
                                        </div>
                                    </div>
                                )
                            })}
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