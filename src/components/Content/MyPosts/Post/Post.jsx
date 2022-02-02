import React from "react";
import ss from './Post.module.css';


const Post = (props) => {

    return (
        <div className={ss.postCommon}>
            <div className={ss.postHead}>
                <div  className={ss.postHead}>
                    <div className={ss.miniAva}>
                        mini-ava
                        <img href="" alt="" />
                    </div>
                    <div>
                        <a className={ss.postLink} href='http://localhost:3000/'>Profile Name</a>
                        <p className={ss.weakText}>post date</p>
                    </div>
                </div>
                <div>
                    post options
                </div>
            </div>
            <div className={ss.postMain}>
                <div>{props.text}</div>
                <div className={ss.postImg}>
                    image added to post
                    <img src="" alt="" />
                </div>
            </div>
            <div className={ss.postFoot}>
                <div className={ss.postFootItem}>
                    <div>
                        like
                    </div>
                    <p className={ss.weakText}>
                        {props.likesCount}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Post