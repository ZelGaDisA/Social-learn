const SET_USER_DATA = 'SET_USER_DATA';


let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}

const authReduser = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        }
        default:
            return state;
    }
}

export const setAuthUserData = (userId, email, login) => ({ type: SET_USER_DATA, data: {userId, email, login} })


export default authReduser;



// const usersReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case FOLLOW:
//             return { ...state, users: state.users.map(u => u.id === action.userId ? { ...u, followed: true } : u) }
//         case UNFOLLOW:
//             return { ...state, users: state.users.map(u => u.id === action.userId ? { ...u, followed: false } : u) }
//         case SET_USERS:
//             return { ...state, users: [state.users, ...action.users] }
//         default: return state
//     }
// }