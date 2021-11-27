import React from "react";
import ss from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = (props) => {

    let posts = [
        { id: 1, message: 'Hi Jack', likesCount: 12 },
        { id: 2, message: 'Bye Jack', likesCount: 14  },
        { id: 3, message: 'Hello Jack', likesCount: 22 },
        { id: 4, message: 'Fuck Jack', likesCount: 42 },
        { id: 5, message: 'Me Jack', likesCount: 17 },
        { id: 6, message: 'your jack', likesCount: 11 }
    ]

    let postsElements = posts.map( p => <Post message={p.message} likesCount={p.likesCount} /> )


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
                { postsElements }
            </div>
        </div>
    )
}

export default MyPosts;