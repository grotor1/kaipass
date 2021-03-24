import React, {useContext, useEffect, useState} from 'react'
import PerfectScrollbar from 'react-perfect-scrollbar'
import 'react-perfect-scrollbar/dist/css/styles.css'
import './TasksScrollbar.css'
import arrow from '../MainPage/media/right-arrow 1.svg'
import {AuthContext} from "../../context/AuthContext";
import {useMessage} from "../../hooks/message.hook";
import {useHttp} from "../../hooks/http.hook";

const container = document.querySelector('container');
const ps = new PerfectScrollbar(container);

const TasksScrollbar = () => {
    const auth = useContext(AuthContext);
    const message = useMessage()
    const [lesson, setLesson] = useState([]);
    const {loading, request, error, clearError} = useHttp();
    useEffect(() => {
        message(error)
        clearError()
    }, [error, message, clearError])
    useEffect(()=>{
        const dataFromServer = async () =>{
            const {data} = await request(`api/fetch/usersInfGet/${auth._id_userInf}`, 'GET')
            const currentCourses = data.courses
            console.log(currentCourses)
            const currentLessons = []
            currentCourses.map(async element => {
                const {data} = await request(`api/fetch/coursesGet/${element._id_courses}`)
                const _id_lesson = data.lessons[element.currentValue]._id_lesson
                console.log(_id_lesson)
                const a = await request(`api/fetch/lessonsGet/${_id_lesson}`)
                currentLessons.push(a.data)
            })
            setLesson(currentLessons)
        }
        dataFromServer()
    },[request, auth])

    return (
        <PerfectScrollbar>

                    <div id="container"
                         className="mainpage-wrapper__right-section__your-tasks__content__top-section__tasks-container scrollbar-primary">
                        <div
                            className="mainpage-wrapper__right-section__your-tasks__content__top-section__tasks-container__item border-color-change">
                            <a href="">
                                <div
                                    className="mainpage-wrapper__right-section__your-tasks__content__top-section__tasks-container__item__theme"></div>
                                <div
                                    className="mainpage-wrapper__right-section__your-tasks__content__top-section__tasks-container__item__preview"></div>
                                <div
                                    className="mainpage-wrapper__right-section__your-tasks__content__top-section__tasks-container__item__text">
                                    <p>Я<br/><span>Хер</span></p>
                                </div>
                                <div
                                    className="mainpage-wrapper__right-section__your-tasks__content__top-section__tasks-container__item__arrow">
                                    <img src={arrow} alt=""/>
                                </div>
                            </a>
                        </div>
                    </div>


            <div id="container"
                 className="mainpage-wrapper__right-section__your-tasks__content__top-section__tasks-container scrollbar-primary">
                <div
                    className="mainpage-wrapper__right-section__your-tasks__content__top-section__tasks-container__item border-color-change">
                    <a href="">
                        <div
                            className="mainpage-wrapper__right-section__your-tasks__content__top-section__tasks-container__item__theme"></div>
                        <div
                            className="mainpage-wrapper__right-section__your-tasks__content__top-section__tasks-container__item__preview"></div>
                        <div
                            className="mainpage-wrapper__right-section__your-tasks__content__top-section__tasks-container__item__text">
                            <p>Я<br/><span>Хер</span></p>
                        </div>
                        <div
                            className="mainpage-wrapper__right-section__your-tasks__content__top-section__tasks-container__item__arrow">
                            <img src={arrow} alt=""/>
                        </div>
                    </a>
                </div>
            </div>
            <div id="container"
                 className="mainpage-wrapper__right-section__your-tasks__content__top-section__tasks-container scrollbar-primary">
                <div
                    className="mainpage-wrapper__right-section__your-tasks__content__top-section__tasks-container__item border-color-change">
                    <a href="">
                        <div
                            className="mainpage-wrapper__right-section__your-tasks__content__top-section__tasks-container__item__theme"></div>
                        <div
                            className="mainpage-wrapper__right-section__your-tasks__content__top-section__tasks-container__item__preview"></div>
                        <div
                            className="mainpage-wrapper__right-section__your-tasks__content__top-section__tasks-container__item__text">
                            <p>Я<br/><span>Хер</span></p>
                        </div>
                        <div
                            className="mainpage-wrapper__right-section__your-tasks__content__top-section__tasks-container__item__arrow">
                            <img src={arrow} alt=""/>
                        </div>
                    </a>
                </div>
            </div>
        </PerfectScrollbar>
    )
}

export default TasksScrollbar