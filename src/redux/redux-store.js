import { applyMiddleware, combineReducers, createStore } from "redux";
import { contentReduser } from './content-reduser';
import { dialogsReduser } from './dialogs-reduser';
import { sitebarReduser } from './sitebar-reduser';
import usersReduser from "./users-reduser";
import authReduser from "./auth-reduser"
import thunkMiddleware from "redux-thunk";

let redusers = combineReducers({
    contentPage: contentReduser,
    dialogsPage: dialogsReduser,
    sitebar: sitebarReduser,
    usersPage: usersReduser,
    auth: authReduser
});


let store = createStore(redusers, applyMiddleware(thunkMiddleware));

window.store = store

export default store;