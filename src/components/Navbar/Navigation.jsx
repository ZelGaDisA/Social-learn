import React from "react";
import { NavLink } from "react-router-dom";
import ss from './Navbar.module.css';


const Navigation = () => {
    return (
            <div>
                <nav className={ss.nav}>
                    <div className={ss.item}>
                        <NavLink to="/content" activeClassName={ss.activeLink}>Profile</NavLink>
                    </div>
                    <div className={ss.item}>
                        <NavLink to="/dialogs" activeClassName={ss.activeLink}>Messages</NavLink>
                    </div>
                    <div className={ss.item}>
                        <a>News</a>
                    </div>
                    <div className={ss.item}>
                        <a>Users</a>
                    </div>
                    <div className={ss.item}>
                        <a>Muzik</a>
                    </div>
                    <div className={ss.item}>
                        <a>Settings</a>
                    </div>
                </nav>
            </div>
    )
}

export default Navigation;