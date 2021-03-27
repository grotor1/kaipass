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
    useEffect(()=>{
        const dataFromServer = async () =>{
            const {data} = await request(`api/fetch/usersInfGet/${auth._id_userInf}`, 'GET')
            const currentCourses = data.courses
            const currentLessons = []
            for (let i = 0; i < currentCourses.length; i++) {
                const element = currentCourses[i]
                const {data} = await request(`api/fetch/coursesGet/${element._id_courses}`)
                const _id_lesson = data.lessons[element.currentValue]._id_lesson
                const a = await request(`api/fetch/lessonsGet/${_id_lesson}`)
                currentLessons.push(a.data)
            }
            setLesson(currentLessons)
        }
        dataFromServer()
    },[request, auth])
    return (
        <PerfectScrollbar>
            {lesson.map(element=>{
                return (
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
                                    <p>{element.name}<br/><span>{element.desc}</span></p>
                                </div>
                                <div
                                    className="mainpage-wrapper__right-section__your-tasks__content__top-section__tasks-container__item__arrow">
                                    <img src={arrow} alt=""/>
                                </div>
                            </a>
                        </div>
                    </div>
                )
            })}
        </PerfectScrollbar>
    )
}

export default TasksScrollbar