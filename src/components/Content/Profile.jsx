import React from "react";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./Profile/ProfileInfo";




const Profile = (props) => {
    return (
        <div>
            <div>
                <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.unpdateStatus} />
                <MyPostsContainer  />
            </div>
        </div>
    )
}

export default Profile;