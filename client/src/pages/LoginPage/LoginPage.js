import React, {useContext, useEffect, useState} from 'react'
import './LoginPage.css'
import right_svg from './media/vector1.svg'
import left_svg from './media/vector2.svg'
import right_arrow_login from './media/right-arrow-login.svg'
import './hover.css'
import {Link, withRouter} from "react-router-dom";
import {useHttp} from "../../hooks/http.hook";
import {useMessage} from "../../hooks/message.hook";
import {AuthContext} from "../../context/AuthContext";

export const LoginPage = () => {
    const auth = useContext(AuthContext)
    const message = useMessage()
    const {loading, request, error, clearError} = useHttp()
    const [form, setForm] = useState({
        login: "",
        password: ""
    })
    const changeHandler = event => {
        if(event.target.value){
            document.getElementById(event.target.name + "Label").innerText = ""
        }
        else{
            if(event.target.name === "login"){
                document.getElementById(event.target.name + "Label").innerText = "Логин"
            }
            if(event.target.name === "password"){
                document.getElementById(event.target.name + "Label").innerText = "Пароль"
            }
        }
        setForm({...form, [event.target.name]: event.target.value})
    }
    useEffect(() => {
        message(error)
        clearError()
    }, [error, message, clearError])
    const loginHandler = async () => {
        try {
            const data = await request("api/auth/login", "POST", {...form})
            auth.login(data.token, data._id_userInf)
        } catch (e) {
        }
    }
    return (
        <div className="login-wrapper">
            <div className="login-wrapper__content">
                <div className="login-wrapper__content__left-section">
                    <img className='left-svg' src={left_svg} alt=""/>
                    <div className="login-wrapper__content__right-section__login-content">
                        <p className="login-wrapper__content__right-section__login-content__title">Войти</p>
                        <p className="login-wrapper__content__right-section__login-content__under-title">Чтобы
                            использовать <span>Kai</span>Pass <br/> необходимо войти</p>
                        <div className="input-container">
                            <input
                                id="login"
                                type="text"
                                name="login"
                                onChange={changeHandler}
                            />
                            <label id="loginLabel">Логин</label>
                        </div>
                        <div className="input-container another-margin">
                            <input
                                id="password"
                                type="password"
                                name="password"
                                onChange={changeHandler}
                            />
                            <label id="passwordLabel">Пароль</label>
                        </div>
                            <div
                                className="login-wrapper__content__right-section__login-content__button hvr-grow-shadow" onClick={loginHandler}>
                                <p>Войти</p>
                                <img src={right_arrow_login} alt=""/>
                            </div>

                    </div>
                </div>
                <div className="login-wrapper__content__right-section">
                    <img className="right-svg" src={right_svg} alt=""/>
                    <div className="login-wrapper__content__left-section__content">
                        <div className="login-wrapper__content__left-section__content__title">
                            <p>Регистрация</p>
                        </div>
                        <div className="login-wrapper__content__left-section__content__under-title">
                            <p>Чтобы присоединиться <br/>
                                к <span>Kai</span>Pass необходимо <br/> создать аккаунт</p>
                        </div>
                        <Link to="/registration">
                            <div className="login-wrapper__content__left-section__content__button hvr-forward ">
                                <p>Создать</p>
                                <img src={right_arrow_login} alt=""/>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default withRouter(LoginPage);