import React from "react";
import ss from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = () => {
    return (
        <div>
            <div className={ss.postsBlock} >
                <h3>My Posts</h3>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={ss.posts}>
                <Post message='fk you' likesCount='15' />
                <Post message='fk you too' likesCount='23' />
            </div>
        </div>
    )
}

export default MyPosts;