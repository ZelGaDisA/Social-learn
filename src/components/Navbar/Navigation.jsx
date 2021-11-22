import React from "react";
import ss from './Navbar.module.css';

// let ss = {
//     'nav' : 'Navbar_nav_3ou9Q',
//     'item' : 'Navbar_item_3qaF3'
// };


const Navigation = () => {
    return (
            <div>
                <nav className={ss.nav}>
                    <div className={ss.item}>
                        <a>Profile</a>
                    </div>
                    <div className={ss.item}>
                        <a>News</a>
                    </div>
                    <div className='item'>
                        <a>Messages</a>
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