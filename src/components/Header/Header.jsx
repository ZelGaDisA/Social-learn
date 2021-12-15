import React from "react";
import ss from './Header.module.css';
import {NavLink} from 'react-router-dom'


const Header = (props) => {
    return (
        <header className={ss.header}>
            <img src='https://steamcdn-a.akamaihd.net/steamcommunity/public/images/items/598550/58adad45d89c9bbd22a1164d7ad32d93f9b397c5.jpg' />

            <div className={ss.loginBlock}>
                { props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink> }
            </div>
        </header>
    )
}

export default Header;