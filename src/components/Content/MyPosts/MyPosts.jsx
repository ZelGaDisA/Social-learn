import React from "react";
import { Field, reduxForm } from "redux-form";
import { maxLenghtCreator, required } from "../../../utils/validators";
import ss from './MyPosts.module.css';
import Post from './Post/Post';
import { Textarea } from "../../common/FormsControl/FormsControls";

const maxLenght10 = maxLenghtCreator(10);

const MyPosts = (props) => {

    const AddNewPostForm = (props) => {
        return (
            <form onSubmit="props.handleSubmit">
                <h3>My Posts</h3>
                <div>
                    <Field name="newPostText" component={Textarea} validate={[required]} placeholder={"Post message"}/>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </form>
        )
    }

    let postsElements = props.posts.map(p => <Post message={p.message} key={p.id} likesCount={p.likesCount} />)

    let newPostElement = React.createRef();

    let onAddPost = (values) => {
        props.addPost(values.newPostText);
    }

    let AddNewPostFormRedux = reduxForm({form: "ProfileAddNewPostForm"})(AddNewPostForm);


    return (
        <div className={ss.postsBlock}>
            <AddNewPostFormRedux onSubmit={onAddPost}/>
            <div className={ss.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;