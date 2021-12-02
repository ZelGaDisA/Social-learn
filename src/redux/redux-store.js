import {combineReducers, createStore} from "redux";
import {contentReduser} from './content-reduser';
import {dialogsReduser} from './dialogs-reduser';
import {sitebarReduser} from './sitebar-reduser';

let redusers = combineReducers({
    contentPage: contentReduser,
    dialogsPage: dialogsReduser,
    sitebar: sitebarReduser
});


let store = createStore(redusers);


export default store;