import React from "react";
import "../Content.css"
import Post from "../MyPosts/Post/Post"
import { reduxForm, Field} from "redux-form";
import { maxLengthCreator, required } from "../../../utils/validators";
import { Textarea } from "../../common/FormsControl/FormsControls"

const MyPosts = React.memo(props => {

  const postElements = props.posts.map(p => <Post key={p.id} text={p.text} likesCount={p.likesCount} />)

  const onAddPost = (values) => {
    props.addPost(values.newPostText)
  }


  return (
    <div>
      <div className="postsBlock">
        <AddNewPostFormRedux onSubmit={onAddPost} />
      </div>
      <div className="posts">
        {postElements}
      </div>
    </div>
  )
})

const maxLength10 = maxLengthCreator(10)

const AddNewPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field name="newPostText" component={Textarea} placeholder="post message" validate={[required, maxLength10]} />
      </div>
      <div>
        <button>Add post</button>
      </div>
    </form>
  )
}

const AddNewPostFormRedux = reduxForm({form: "ProfileAddNewPostForm"})(AddNewPostForm)

export default MyPosts




