const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';

let initialState = {
    users: [ ],
    pageSize: 5,
    totalUsersCount: 20,
    currentPage: 1
}

const usersReduser = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: true }
                    }
                    return u;
                })
            }
        }
        case UNFOLLOW: {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: false }
                    }
                    return u;
                })
            }
        }
        case SET_USERS: {
            return { ...state, users: [...state.users, ...action.users] }
        }
        case SET_CURRENT_PAGE: {
            return { ...state, currentPage: action.currentPage }
        }
        default:
            return state;
    }
}

export const followAC = (userId) => ({ type: FOLLOW, userId })

export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId })

export const setUsersAC = (users) => ({ type: SET_USERS, users })

export const setCurrentPageAC = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage })

export default usersReduser



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