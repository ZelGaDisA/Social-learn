import React from "react";
import ss from './Content.module.css';
import MyPosts from "./MyPosts/MyPosts";
import Profile from "./Profile/Profile";



const Content = (props) => {
    return (
        <div>
            <div>
                <Profile />
                <MyPosts  posts={props.state.posts} />
            </div>
        </div>
    )
}

export default Content;