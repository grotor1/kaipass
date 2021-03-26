import React, {useContext, useEffect, useState} from 'react'
import './RegPage.css'
import right_svg from './media/vector1.svg'
import left_svg from './media/vector2.svg'
import right_arrow_login from "./media/right-arrow-login.svg";
import {Link, Redirect, withRouter, useHistory} from "react-router-dom";
import {useHttp} from "../../hooks/http.hook";
import {useMessage} from "../../hooks/message.hook";
import {AuthContext} from "../../context/AuthContext";


const RegPage = () => {
    const history = useHistory();
    const message = useMessage();
    const {loading, request, error, clearError} = useHttp()
    const [form, setForm] = useState({
        login: "",
        email: "",
        password: "",
        passwordRep: ""
    })
    const changeHandler = event => {
        if (event.target.value) {
            document.getElementById(event.target.name + "Label").innerText = ""
        } else {
            if (event.target.name === "login") {
                document.getElementById(event.target.name + "Label").innerText = "Логин"
            }
            if(event.target.name === "password"){
                document.getElementById(event.target.name + "Label").innerText = "Пароль"
            }
            if(event.target.name === "email"){
                document.getElementById(event.target.name + "Label").innerText = "Почта"
            }
            if(event.target.name === "passwordRep"){
                document.getElementById(event.target.name + "Label").innerText = "Повторите пароль"
            }
        }
        setForm({...form, [event.target.name]: event.target.value})
    }
    useEffect(() => {
        message(error)
        clearError()
    }, [error, message, clearError])
    const registerHandler = async () => {
        try {
            const data = await request("api/auth/reg", "POST", {...form})
            message(data.message)
            console.log(data)
            if (data.message === "Новый пользователь создан") {
                history.push("/login")
            }
        } catch (e) {
        }
    }
    return (
        <div className="registration-wrapper">
            <div className="registration-wrapper__content">
                <div className="registration-wrapper__content__left-section">
                    <img className='left-svg' src={right_svg} alt=""/>
                    <div className="registration-wrapper__content__left-section__login-content">
                        <div className="registration-wrapper__content__left-section__login-content__title">
                            <p>Войти</p>
                        </div>
                        <div className="registration-wrapper__content__left-section__login-content__under-title">
                            <p>Уже зарегистрировали аккаунт в <span>Kai</span>Pass</p>
                        </div>
                        <Link to="/login">
                            <div
                                className="registration-wrapper__content__left-section__login-content__button hvr-forward ">
                                <p>Войти</p>
                                <img src={right_arrow_login} alt=""/>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="registration-wrapper__content__right-section">
                    <img className='right-svg' src={left_svg} alt=""/>
                    <div className="registration-wrapper__content__right-section__registration-content">
                        <div className="registration-wrapper__content__right-section__registration-content__title">
                            <p>Регистрация</p>
                        </div>
                        <div
                            className="registration-wrapper__content__right-section__registration-content__under-title">
                            <p>Создайте свой <span>Kai</span>Pass</p>
                        </div>
                        <div className="input-container">
                            <input
                                type="text"
                                id="login"
                                name="login"
                                onChange={changeHandler}
                            />
                            <label id="loginLabel">Логин</label>
                        </div>
                        <div className="input-container another-margin">
                            <input
                                type="text"
                                id="email"
                                name="email"
                                onChange={changeHandler}
                            />
                            <label id="emailLabel">Почта</label>
                        </div>
                        <div className="input-container">
                            <input
                                type="password"
                                id="password"
                                name="password"
                                onChange={changeHandler}
                            />
                            <label id="passwordLabel">Пароль</label>
                        </div>
                        <div className="input-container another-margin">
                            <input
                                type="password"
                                id="passwordRep"
                                name="passwordRep"
                                onChange={changeHandler}
                            />
                            <label id="passwordRepLabel">Повторите пароль</label>
                        </div>
                        <div
                            className="login-wrapper__content__right-section__registration-content__button hvr-grow-shadow"
                            onClick={registerHandler}>
                            <p>Создать</p>
                            <img src={right_arrow_login} alt=""/>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default withRouter(RegPage)