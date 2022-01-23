import React from "react";
import { Field, reduxForm } from "redux-form";
import { maxLenghtCreator, required } from "../../../utils/validators";
import ss from './MyPosts.module.css';
import Post from './Post/Post';
import { Textarea } from "../../common/FormsControl/FormsControls";

const maxLenght10 = maxLenghtCreator(10);


const MyPosts = React.memo(props => {

    const postElements = props.posts.map(p => <Post key={p.id} text={p.text} likesCount={p.likesCount} />)
  
    const onAddPost = (values) => {
      props.addPost(values.newPostText)
    }
  
  
    return (
      <div className='postsColumn'>
        <div className='postCreating'>
          <AddNewPostFormRedux onSubmit={onAddPost} />
        </div>
        <div className='personalPosts'>
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




// const MyPosts = (props) => {

//     const AddNewPostForm = (props) => {
//         return (
//             <form onSubmit="props.handleSubmit">
//                 <h3>My Posts</h3>
//                 <div>
//                     <Field name="newPostText" component={Textarea} validate={[required]} placeholder={"Post message"}/>
//                 </div>
//                 <div>
//                     <button>Add post</button>
//                 </div>
//             </form>
//         )
//     }

//     let postsElements = props.posts.map(p => <Post message={p.message} key={p.id} likesCount={p.likesCount} />)

//     let newPostElement = React.createRef();

//     let onAddPost = (values) => {
//         props.addPost(values.newPostText);
//     }

//     let AddNewPostFormRedux = reduxForm({form: "ProfileAddNewPostForm"})(AddNewPostForm);


//     return (
//         <div className={ss.postsBlock}>
//             <AddNewPostFormRedux onSubmit={onAddPost}/>
//             <div className={ss.posts}>
//                 {postsElements}
//             </div>
//         </div>
//     )
// }

// export default MyPosts;