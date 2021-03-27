import React, {useContext, useEffect, useState} from 'react'
import PerfectScrollbar from 'react-perfect-scrollbar'
import 'react-perfect-scrollbar/dist/css/styles.css'
import './AchievementsPage.css'
import trophy from "./trophy.svg"
import arrow from '../MainPage/media/right-arrow 1.svg'
import {AuthContext} from "../../context/AuthContext";
import {useMessage} from "../../hooks/message.hook";
import {useHttp} from "../../hooks/http.hook";

const AchievementsPage = () => {
    const auth = useContext(AuthContext);
    const message = useMessage()
    const [achievements, setAchievements] = useState([]);
    const {loading, request, error, clearError} = useHttp();
    useEffect(() => {
        const dataFromServer = async () => {
            const {data} = await request(`api/fetch/usersInfGet/${auth._id_userInf}`, 'GET')
            const currentAchievements = data.achievements
            const stateAchievements = []
            for (let i = 0; i < currentAchievements.length; i++) {
                const element = currentAchievements[i]
                const achievementsData = await request(`api/fetch/achievementsGet/${element._id_achievements}`, 'GET')
                console.log(achievementsData)
                stateAchievements.push({
                    _id: element._id_achievements,
                    name: achievementsData.data.name,
                    desc: achievementsData.data.desc,
                    maxValue: achievementsData.data.maxValue,
                    currentValue: element.currentValue
                })
            }
            setAchievements(stateAchievements)
        }
        dataFromServer()
    }, [request, auth])
    return (
        <div className="achievements-page-wrapper">
            <div className="achievements-page-wrapper__header">
                <p>Мои достижения</p>
            </div>

            <div className="achievements-page-wrapper__main-section">
                <PerfectScrollbar>
                    <div className="achievements-page-wrapper__main-section__container">
                        {achievements.map(element => {
                            console.log(element.currentValue, element.maxValue)
                            if (element.currentValue === element.maxValue) {
                                return (
                                    <div className="achievements-page-wrapper__main-section__container__item">
                                        <div
                                            className="achievements-page-wrapper__main-section__container__item__score">
                                            <p>5</p>
                                            <img src={trophy} alt=""/>
                                            <div
                                                className="achievements-page-wrapper__main-section__container__item__score-after">

                                            </div>
                                        </div>
                                        <div
                                            className="achievements-page-wrapper__main-section__container__item__name">
                                            <p>{element.name}</p>
                                        </div>
                                        <div
                                            className="achievements-page-wrapper__main-section__container__item__task">
                                            <p>{element.desc}</p>
                                        </div>
                                        <div
                                            className="achievements-page-wrapper__main-section__container__item__progressbar">
                                            <p>{element.currentValue}/{element.maxValue}</p>
                                        </div>
                                    </div>)
                            } else {
                                return (
                                    <div className="achievements-page-wrapper__main-section__container__item faith">
                                        <div
                                            className="achievements-page-wrapper__main-section__container__item__score">
                                            <p>5</p>
                                            <img src={trophy} alt=""/>
                                            <div
                                                className="achievements-page-wrapper__main-section__container__item__score-after">

                                            </div>
                                        </div>
                                        <div
                                            className="achievements-page-wrapper__main-section__container__item__name">
                                            <p>{element.name}</p>
                                        </div>
                                        <div
                                            className="achievements-page-wrapper__main-section__container__item__task">
                                            <p>{element.desc}</p>
                                        </div>
                                        <div
                                            className="achievements-page-wrapper__main-section__container__item__progressbar">
                                            <p>{element.currentValue}/{element.maxValue}</p>
                                        </div>
                                    </div>)
                            }
                        })}
                    </div>
                </PerfectScrollbar>
            </div>
        </div>
    )


}

export default AchievementsPage