import React from "react";
import ss from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = (props) => {

    let postsData = [
        { id: 1, message: 'Hi Jack', likesCount: 12 },
        { id: 2, message: 'Bye Jack', likesCount: 14  },
        { id: 3, message: 'Hello Jack', likesCount: 22 },
        { id: 4, message: 'Fuck Jack', likesCount: 42 },
        { id: 5, message: 'Me Jack', likesCount: 17 },
        { id: 6, message: 'your jack', likesCount: 11 }
    ]



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
                <Post message={postsData[0].message} likesCount={postsData[0].likesCount} />
                <Post message={postsData[1].message} likesCount={postsData[1].likesCount} />
            </div>
        </div>
    )
}

export default MyPosts;