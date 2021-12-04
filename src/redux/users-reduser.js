const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
    users: [
        { id: 1, photoUrl: 'https://www.famousbirthsdeaths.com/wp-content/uploads/2018/11/ava-max-bio-net-worth-facts.jpg' , followed: false, fullName: 'Dimych', status: 'I am a boss', location: { city: 'Minsk', country: 'Belarus' } },
        { id: 2, photoUrl: 'https://www.famousbirthsdeaths.com/wp-content/uploads/2018/11/ava-max-bio-net-worth-facts.jpg' , followed: true, fullName: 'Chyvak', status: 'I am a boss', location: { city: 'Moskow', country: 'Russia' } },
        { id: 3, photoUrl: 'https://www.famousbirthsdeaths.com/wp-content/uploads/2018/11/ava-max-bio-net-worth-facts.jpg' , followed: false, fullName: 'Evgen', status: 'I am a boss', location: { city: 'Kiev', country: 'Ukraine' } },
        { id: 4, photoUrl: 'https://www.famousbirthsdeaths.com/wp-content/uploads/2018/11/ava-max-bio-net-worth-facts.jpg' , followed: true, fullName: 'Sveta', status: 'I am a boss', location: { city: 'Berlin', country: 'Germany' } },
        { id: 5, photoUrl: 'https://www.famousbirthsdeaths.com/wp-content/uploads/2018/11/ava-max-bio-net-worth-facts.jpg' , followed: false, fullName: 'Saha', status: 'I am a boss', location: { city: 'Minsk', country: 'Belarus' } },
        { id: 6, photoUrl: 'https://www.famousbirthsdeaths.com/wp-content/uploads/2018/11/ava-max-bio-net-worth-facts.jpg' , followed: false, fullName: 'Valeryiu', status: 'I am a boss', location: { city: 'Minsk', country: 'Belarus' } }
    ],
    newPostText: 'it-kama'
};

export const usersReduser = (state = initialState, action) => {
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
            return { ...state, users: [...state.users, ...action.users ] }
        }
        default:
            return state;
    }
}

export const followAC = (userId) => ({ type: FOLLOW, userId })

export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId })

export const setUsersAC = (users) => ({ type: SET_USERS, users })
