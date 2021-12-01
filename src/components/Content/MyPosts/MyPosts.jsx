import React from "react";
import ss from './MyPosts.module.css';
import Post from './Post/Post';
import updateNewPostTextActionCreator from '../../../redux/state';
import addPostActionCreator from '../../../redux/state';

const MyPosts = (props) => {

    let postsElements = props.posts.map( p => <Post message={p.message} likesCount={p.likesCount} /> )

    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch(addPostActionCreator());
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        let action = updateNewPostTextActionCreator(text);
        props.dispatch(action);
    }


    return (
        <div>
            <div className={ss.postsBlock} >
                <h3>My Posts</h3>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} />
                </div>
                <div>
                    <button onClick={ addPost }>Add post</button>
                </div>
            </div>
            <div className={ss.posts}>
                { postsElements }
            </div>
        </div>
    )
}

export default MyPosts;