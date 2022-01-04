import { addPostActionCreator } from '../../../redux/content-reduser';
import MyPosts from "./MyPosts";
import {connect} from "react-redux"


const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

const mapDispachToProps = (dispatch) => {
    return {
        addPost: (newPostText) => {
            dispatch(addPostActionCreator(newPostText));
        }
    }
}


const MyPostsContainer = connect(mapStateToProps, mapDispachToProps)(MyPosts);

export default MyPostsContainer;