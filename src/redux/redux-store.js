import { applyMiddleware, combineReducers, createStore } from "redux";
import { profileReduser } from './content-reduser';
import { dialogsReduser } from './dialogs-reduser';
import { sitebarReduser } from './sitebar-reduser';
import usersReduser from "./users-reduser";
import authReduser from "./auth-reduser"
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from 'redux-form'


let redusers = combineReducers({
    profilePage: profileReduser,
    dialogsPage: dialogsReduser,
    sitebar: sitebarReduser,
    usersPage: usersReduser,
    auth: authReduser,
    form: formReducer
});


let store = createStore(redusers, applyMiddleware(thunkMiddleware));

window.store = store

export default store;