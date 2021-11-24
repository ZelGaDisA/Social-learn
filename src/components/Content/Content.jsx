import React from "react";
import ss from './Content.module.css';
import MyPosts from "./MyPosts/MyPosts";


const Content = () => {
    return (
        <div>
            <div>
                <div>
                    <img src='https://i.pinimg.com/736x/f5/27/41/f52741fb62bf1d821948a49204406bdc.jpg' />
                </div>
                <div>
                    ava + description
                </div>
                <MyPosts />
            </div>
        </div>
    )
}

export default Content;