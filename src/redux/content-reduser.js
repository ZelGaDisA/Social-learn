const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    posts: [
        { id: 1, message: 'Hi Jack', likesCount: 12 },
        { id: 2, message: 'Bye Jack', likesCount: 14 },
        { id: 3, message: 'Hello Jack', likesCount: 22 },
        { id: 4, message: 'Fuck Jack', likesCount: 42 },
        { id: 5, message: 'Me Jack', likesCount: 17 },
        { id: 6, message: 'your jack', likesCount: 11 }
    ],
    newPostText: 'it-kama'
};

export const contentReduser = (state = initialState, action) => {
    switch(action.type) {
        case ADD_POST: {
            let newPost = {
                id: 7,
                message: state.newPostText,
                likesCount: 0
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            }
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            }
        }
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({
    type: ADD_POST
})

export const updateNewPostTextActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text
})