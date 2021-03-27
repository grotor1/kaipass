import React from "react";
import {useRoutes} from "./routes";
import {BrowserRouter as Router} from "react-router-dom";
import {useAuth} from "./hooks/auth.hook";
import {AuthContext} from "./context/AuthContext";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";

function App() {
    const {token, login, logout, userInfId} = useAuth()
    const isAuthenticated = !!token
    const routes = useRoutes(isAuthenticated);
    return (
        <AuthContext.Provider value={{
            token, login, logout, _id_userInf: userInfId, isAuthenticated
        }}>
            <Router>
                <div className="App">
                        {routes}
                </div>
                <div className="left-section__footer__patch"></div>
            </Router>
        </AuthContext.Provider>
    );
}

export default App;
