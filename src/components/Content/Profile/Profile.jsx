import React from "react";
import ss from './Profile.module.css';


const Profile = () => {
    return (
        <div>
                <div>
                    <img src='https://i.pinimg.com/736x/f5/27/41/f52741fb62bf1d821948a49204406bdc.jpg' />
                </div>
                <div className={ss.descriptionBlock}>
                    ava + description
                </div>
        </div>
    )
}

export default Profile;