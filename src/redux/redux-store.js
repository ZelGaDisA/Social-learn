import {combineReducers, createStore} from "redux";
import {contentReduser} from './content-reduser';
import {dialogsReduser} from './dialogs-reduser';
import {sitebarReduser} from './sitebar-reduser';
import { usersReduser } from "./users-reduser";

let redusers = combineReducers({
    contentPage: contentReduser,
    dialogsPage: dialogsReduser,
    sitebar: sitebarReduser,
    usersPage: usersReduser
});


let store = createStore(redusers);


export default store;