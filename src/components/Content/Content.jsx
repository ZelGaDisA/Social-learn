import React from "react";
import ss from './Content.module.css';
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import Profile from "./Profile/Profile";




const Content = (props) => {
    return (
        <div>
            <div>
                <Profile />
                <MyPostsContainer  store={props.store}/>
            </div>
        </div>
    )
}

export default Content;