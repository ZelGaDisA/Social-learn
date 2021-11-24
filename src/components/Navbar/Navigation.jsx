import React from "react";
import ss from './Navbar.module.css';


const Navigation = () => {
    return (
            <div>
                <nav className={ss.nav}>
                    <div className={ss.item}>
                        <a href="/content">Profile</a>
                    </div>
                    <div className={ss.item}>
                        <a href="/dialogs">Messages</a>
                    </div>
                    <div className='item'>
                        <a>News</a>
                    </div>
                    <div className='item'>
                        <a>Muzik</a>
                    </div>
                    <div className='item'>
                        <a>Settings</a>
                    </div>
                </nav>
            </div>
    )
}

export default Navigation;