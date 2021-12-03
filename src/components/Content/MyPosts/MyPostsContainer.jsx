import React from "react";
import { updateNewPostTextActionCreator } from '../../../redux/content-reduser';
import { addPostActionCreator } from '../../../redux/content-reduser';
import StoreContext from "../../../StoreContext";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {
    //let state = props.store.getState();

    

    return (
        <StoreContext.Consumer> 
            { (store) => {
                let state = store.getState();
                let addPost = () => {
                    store.dispatch(addPostActionCreator());
                }
            
                let onPostChange = (text) => {
                    store.dispatch(updateNewPostTextActionCreator(text));
                }
            
                return <MyPosts updateNewPostText={onPostChange}
                    addPost={addPost}
                    posts={state.contentPage.posts}
                    newPostText={state.contentPage.newPostText} />}
        }
        </StoreContext.Consumer>
    )
}

export default MyPostsContainer;