import React from "react";
import {updateNewPostTextActionCreator} from '../../../redux/content-reduser';
import {addPostActionCreator} from '../../../redux/content-reduser';
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {
    let state = props.store.getState();

    let addPost = () => {
        props.store.dispatch(addPostActionCreator());
    }

    let onPostChange = (text) => {
        props.store.dispatch(updateNewPostTextActionCreator(text));
    }


    return (<MyPosts updateNewPostText={onPostChange}
        addPost={addPost}
        posts={state.contentPage.posts}
        newPostText={state.contentPage.newPostText}/>)
}

export default MyPostsContainer;