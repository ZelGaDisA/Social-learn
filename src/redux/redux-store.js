import { combineReducers, createStore, applyMiddleware } from "redux";
import profileReducer from "./content-reduser";
import dialogsReducer from "./dialogs-reduser";
import usersReducer from "./users-reduser"
import authReducer from "./auth-reduser";
import thunkMiddleware from "redux-thunk"
import { reducer as formReducer } from 'redux-form'
import appReducer from "./appReduser";

const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,
    app: appReducer,
    form: formReducer
})

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

window.store = store

export default store


