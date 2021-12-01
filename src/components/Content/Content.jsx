import React from "react";
import ss from './Content.module.css';
import MyPosts from "./MyPosts/MyPosts";
import Profile from "./Profile/Profile";



const Content = (props) => {
    return (
        <div>
            <div>
                <Profile />
                <MyPosts  posts={props.contentPage.posts}
                newPostText={props.contentPage.newPostText}
                dispatch={props.dispatch} />
            </div>
        </div>
    )
}

export default Content;