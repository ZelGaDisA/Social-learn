import React from "react";
import ss from '../Post/MyPosts.module.css';


const MyPosts = () => {
    return (
        <div>
            <div>
                My posts
            </div>
            <div className={ss.posts}>
                <div className={ss.item}>
                    Post 1
                </div>
                <div className={ss.item}>
                    Post 2
                </div>
            </div>
        </div>
    )
}

export default MyPosts;