import { updateNewPostTextActionCreator } from '../../../redux/content-reduser';
import { addPostActionCreator } from '../../../redux/content-reduser';
import MyPosts from "./MyPosts";
import {connect} from "react-redux"


const mapStateToProps = (state) => {
    return {
        posts: state.contentPage.posts,
        newPostText: state.contentPage.newPostText
    }
}

const mapDispachToProps = (dispatch) => {
    return {
        updateNewPostText: (text) => {
            dispatch(updateNewPostTextActionCreator(text));
        },
        addPost: () => {
            dispatch(addPostActionCreator());
        }
    }
}


const MyPostsContainer = connect(mapStateToProps, mapDispachToProps)(MyPosts);

export default MyPostsContainer;