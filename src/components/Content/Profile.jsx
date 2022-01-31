import React from "react";
import { Navigate } from "react-router";
import MyPostsContainer from "../Content/MyPosts/MyPostsContainer";
import ProfileInfo from "../Content/Profile/ProfileInfo";




const Profile = (props) => {
    if (!props.isAuth) return <Navigate to="/login" />

    return (
        <div className='profile'>
            <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus} />
            <MyPostsContainer />
        </div>
    )
}

export default Profile;