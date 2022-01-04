import React from "react";
import { reduxForm } from "redux-form";
import ss from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

    let postsElements = props.posts.map(p => <Post message={p.message} key={p.id} likesCount={p.likesCount} />)

    let newPostElement = React.createRef();

    let onAddPost = (values) => {
        props.addPost();
    }


    return (
        <div className={ss.postsBlock}>
            <AddNewPostForm onSubmit={onAddPost}/>
            <div className={ss.posts}>
                {postsElements}
            </div>
        </div>
    )
}


const AddNewPostForm = (props) => {
    return (
        <form onSubmit="props.handleSubmit">
            <h3>My Posts</h3>
            <div>
                <Field name={newPostText} />
                <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} />
            </div>
            <div>
                <button onClick={onAddPost}>Add post</button>
            </div>
        </form>
    )
}

AddNewPostForm = reduxForm({form: "ProfileAddNewPostForm"})(AddNewPostForm);

export default MyPosts;