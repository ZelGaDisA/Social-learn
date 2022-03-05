import React from "react";
import { NavLink } from "react-router-dom";
import ss from './Navbar.module.css';


const Navigation = () => {
    return (
            <div>
                <nav className={ss.nav}>
                    <div className={ss.item}>
                        <NavLink to="/profile" activeClassName={ss.activeLink}>Profile</NavLink>
                    </div>
                    <div className={ss.item}>
                        <NavLink to="/dialogs" activeClassName={ss.activeLink}>Messages</NavLink>
                    </div>
                    <div className={ss.item}>
                    <NavLink to="/muzik" activeClassName={ss.activeLink}>Muzik</NavLink>
                    </div>
                    <div className={ss.item}>
                        <NavLink to="/users" activeClassName={ss.activeLink}>Users</NavLink>
                    </div>
                    <div className={ss.item}>
                    <NavLink to="/news" activeClassName={ss.activeLink}>News</NavLink>
                    </div>
                    <div className={ss.item}>
                    <NavLink to="/Settings" activeClassName={ss.activeLink}>Settings</NavLink>
                    </div>
                </nav>
            </div>
    )
}

export default Navigation;