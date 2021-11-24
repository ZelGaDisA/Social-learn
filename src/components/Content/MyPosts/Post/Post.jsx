import React from "react";
import ss from '../Post/Post.module.css';


const Post = (props) => {
    return (
        <div className={ss.posts}>
            <div className={ss.item}>
                <img src='https://vjoy.cc/wp-content/uploads/2020/10/krasivye-kartinki-na-avu-dlya-devushek-i-devochek-samye-klassnye-15.jpg' />
                { props.message }
                <div>
                    <span>like</span> { props.likesCount }
                </div>
            </div>
        </div>
    )
}

export default Post;