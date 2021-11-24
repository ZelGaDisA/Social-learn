import React from "react";
import ss from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = () => {
    return (
        <div>
            <div>
                <textarea></textarea>
                <button>Add post</button>
                <button>Remove post</button>
            </div>
            <Post message='fk you' likesCount='15' />
            <Post message='fk you too' likesCount='23' />
        </div>
    )
}

export default MyPosts;