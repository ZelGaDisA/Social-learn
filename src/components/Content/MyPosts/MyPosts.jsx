import React from "react";
import ss from '../Post/MyPosts.module.css';


const MyPosts = () => {
    return (
        <div>
            <div>
                <textarea></textarea>
                <button>Add post</button>
                <button>Remove post</button>
            </div>
            <div className={ss.posts}>
                <div className={ss.item}>
                    <img src='https://vjoy.cc/wp-content/uploads/2020/10/krasivye-kartinki-na-avu-dlya-devushek-i-devochek-samye-klassnye-15.jpg' />
                    Post 1
                </div>
                <div className={ss.item}>
                    <img src='https://vjoy.cc/wp-content/uploads/2020/10/krasivye-kartinki-na-avu-dlya-devushek-i-devochek-samye-klassnye-15.jpg' />
                    Post 2
                </div>
                <div className={ss.item}>
                    <img src='https://vjoy.cc/wp-content/uploads/2020/10/krasivye-kartinki-na-avu-dlya-devushek-i-devochek-samye-klassnye-15.jpg' />
                    Post 2
                </div>
            </div>
        </div>
    )
}

export default MyPosts;