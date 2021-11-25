import React from "react";
import ss from './Content.module.css';
import MyPosts from "./MyPosts/MyPosts";
import Profile from "./Profile/Profile";


const Content = () => {
    return (
        <div>
            <div>
                <Profile />
                <MyPosts />
            </div>
        </div>
    )
}

export default Content;