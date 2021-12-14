import React from "react";
import Preloader from "../../common/Preloader/Preloader";
import ss from './Profile.module.css';


const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }


    return (
        <div>
                <div>
                    <img alt='' src='https://i.pinimg.com/736x/f5/27/41/f52741fb62bf1d821948a49204406bdc.jpg' />
                </div>
                <div className={ss.descriptionBlock}>
                    <img alt='' src={props.profile.photos.large} />
                    ava + description
                </div>
        </div>
    )
}

export default ProfileInfo;