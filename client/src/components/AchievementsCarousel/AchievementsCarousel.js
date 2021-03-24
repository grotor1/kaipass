import Carousel from 'react-elastic-carousel';
import React, {useContext, useEffect, useState} from 'react'

import item from "./item";
import './AchievementsCarousel.css'
import {AuthContext} from "../../context/AuthContext";
import {useMessage} from "../../hooks/message.hook";
import {useHttp} from "../../hooks/http.hook";

const AchievementsCarousel = () => {
    const auth = useContext(AuthContext);
    const message = useMessage()
    const [achievements, setAchievements] = useState([]);
    const {loading, request, error, clearError} = useHttp();
    useEffect(() => {
        message(error)
        clearError()
    }, [error, message, clearError])
    useEffect(()=>{
        const dataFromServer = async () =>{
            const {data} = await request(`api/fetch/usersInfGet/${auth._id_userInf}`, 'GET')
            const currentAchievements = data.achievements
            const stateAchievements = []
            currentAchievements.map(async element => {
                const achievementsData = await request(`api/fetch/achievementsGet/${element._id_achievements}`, 'GET')
                stateAchievements.push({
                    _id: element._id_achievements,
                    name: achievementsData.data.name,
                    desc: achievementsData.data.desc,
                    maxValue: achievementsData.data.maxValue,
                    currentValue: element.currentValue
                })
            })
            setAchievements(stateAchievements)
        }
        dataFromServer()
    },[request, auth])
    return (
        <Carousel itemsToShow={3} itemsToScroll={1}>
                    <item>
                        <div className="mainpage-wrapper__left-section__achivments-block__content__carousel-achive">
                            <div
                                className="mainpage-wrapper__left-section__achivments-block__content__carousel-achive__border-top">

                            </div>
                            <div
                                className="mainpage-wrapper__left-section__achivments-block__content__carousel-achive__text">

                                <p>я</p>
                                <span><p>хер</p></span>

                            </div>
                            <div
                                className="mainpage-wrapper__left-section__achivments-block__content__carousel-achive__text__progressbar">
                                <div className="progressbar-2">
                                    <span></span>
                                </div>
                                <p>1/10</p>
                            </div>
                        </div>
                    </item>
            <item>
                <div className="mainpage-wrapper__left-section__achivments-block__content__carousel-achive">
                    <div
                        className="mainpage-wrapper__left-section__achivments-block__content__carousel-achive__border-top">

                    </div>
                    <div
                        className="mainpage-wrapper__left-section__achivments-block__content__carousel-achive__text">

                        <p>я</p>
                        <span><p>хер</p></span>

                    </div>
                    <div
                        className="mainpage-wrapper__left-section__achivments-block__content__carousel-achive__text__progressbar">
                        <div className="progressbar-2">
                            <span></span>
                        </div>
                        <p>1/10</p>
                    </div>
                </div>
            </item>
            <item>
                <div className="mainpage-wrapper__left-section__achivments-block__content__carousel-achive">
                    <div
                        className="mainpage-wrapper__left-section__achivments-block__content__carousel-achive__border-top">

                    </div>
                    <div
                        className="mainpage-wrapper__left-section__achivments-block__content__carousel-achive__text">

                        <p>я</p>
                        <span><p>хер</p></span>

                    </div>
                    <div
                        className="mainpage-wrapper__left-section__achivments-block__content__carousel-achive__text__progressbar">
                        <div className="progressbar-2">
                            <span></span>
                        </div>
                        <p>1/10</p>
                    </div>
                </div>
            </item>
        </Carousel>
    )

}

export default AchievementsCarousel