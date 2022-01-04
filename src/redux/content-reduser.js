import { usersAPI, profileAPI } from "../api/api"

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState = {
    posts: [
        { id: 1, message: 'Hi Jack', likesCount: 12 },
        { id: 2, message: 'Bye Jack', likesCount: 14 },
        { id: 3, message: 'Hello Jack', likesCount: 22 },
        { id: 4, message: 'Fuck Jack', likesCount: 42 },
        { id: 5, message: 'Me Jack', likesCount: 17 },
        { id: 6, message: 'your jack', likesCount: 11 }
    ],
    profile: null,
    status: ""
};

export const profileReduser = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 7,
                message: action.newPostText,
                likesCount: 0
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            }
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }
        default:
            return state;
    }
}

export const addPostActionCreator = (newPostText) => ({ type: ADD_POST, newPostText })

export const setUserProfile = (profile) => ({
    type: SET_USER_PROFILE,
    profile
})
export const setStatus = (status) => ({
    type: SET_STATUS,
    status
})

export const getUserProfile = (userId) => (dispatch) => {
    usersAPI.getProfile(userId)
        .then(response => {
            dispatch(setUserProfile(response.data));
        });
}

export const getStatus = (userId) => (dispatch) => {
    profileAPI.getStatus(userId)
        .then(response => {
            dispatch(setStatus(response.data));
        });
}

export const updateStatus = status => dispatch =>{
    profileAPI.updateStatus(status).then(response => {
      if (response.data.data.resultCode === 0 ) {
        dispatch(setStatus(status))
      }
    })
  }