import React from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import RegPage from "./pages/RegPage/RegPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import MainPage from "./components/MainPage/MainPage";
import MyCourses from "./components/MyCourses/MyCourses";
import LessonsPage from "./components/LessonsPage/LessonsPage";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import footer from "./media/Footer_Frame.svg";

export const useRoutes = isAuth => {
    if(isAuth){
        return (
            <div className="App-Wrapper">
                <Navbar/>
                <div className="left-section">
                    <Header/>
                    <Switch>
                        <Route path="/main">
                            <MainPage/>
                        </Route>
                        <Route path="/courses" exact>
                            <MyCourses/>
                        </Route>
                        <Route path="/lessons">
                            <LessonsPage/>
                        </Route>
                        <Redirect to="/main"/>
                    </Switch>
                    <div className="left-section__footer">
                        <img src={footer}/>
                    </div>
                </div>
            </div>
        )
    }
    return (
        <Switch>
            <Route path="/reg" exact>
                <RegPage/>
            </Route>
            <Route path="/login">
                <LoginPage/>
            </Route>
            <Redirect to="/reg"/>
        </Switch>
    )
}