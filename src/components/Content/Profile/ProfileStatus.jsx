import React from "react";
import Preloader from "../../common/Preloader/Preloader";
import ss from './Profile.module.css';



const ProfileStatus = (props) => {

    return (
    <div>
        <div>
            <span>{props.status}</span>
        </div>
        <div>
            <input value={props.status}/>
        </div> 
    </div>
    )
}

export default ProfileStatus;