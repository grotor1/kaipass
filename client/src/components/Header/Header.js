import './Header.css'
import React, {useContext} from 'react'
import {AuthContext} from "../../context/AuthContext";


const Header = () => {
    const auth = useContext(AuthContext)
    return (
        <div className="header">
            <div className='header__search-block'/>
            <div className="header__notifications-button" onClick={auth.logout}/>
        </div>
    )
}

export default Header