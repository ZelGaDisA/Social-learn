import contentReduser from "./content-reduser";
import dialogsReduser from "./dialogs-reduser";
import sitebarReduser from "./sitebar-reduser";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let store = {
    _state: {
        contentPage: {
            posts: [
                { id: 1, message: 'Hi Jack', likesCount: 12 },
                { id: 2, message: 'Bye Jack', likesCount: 14 },
                { id: 3, message: 'Hello Jack', likesCount: 22 },
                { id: 4, message: 'Fuck Jack', likesCount: 42 },
                { id: 5, message: 'Me Jack', likesCount: 17 },
                { id: 6, message: 'your jack', likesCount: 11 }
            ],
            newPostText: 'it-kama'
        },
        dialogsPage: {
            messages: [
                { id: 1, message: 'Hi Jack' },
                { id: 2, message: 'Bye Jack' },
                { id: 3, message: 'Hello Jack' },
                { id: 4, message: 'Fuck Jack' },
                { id: 5, message: 'Me Jack' },
                { id: 6, message: 'your jack' }
            ],
            dialogs: [
                { id: 1, name: 'Dimych' },
                { id: 2, name: 'Chyvak' },
                { id: 3, name: 'Evgen' },
                { id: 4, name: 'Sveta' },
                { id: 5, name: 'Saha' },
                { id: 6, name: 'Valeryiu' }
            ],
            newMessageBody: ""
        },
        sitebar: {}
    },
    _callSubscriber() {
        console.log('state changed')
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {

        this._state.contentPage = contentReduser(this._state.contentPage, action);
        this._state.dialogsPage = dialogsReduser(this._state.dialogsPage, action);
        this._state.sitebar = sitebarReduser(this._state.sitebar, action);

        this._callSubscriber(this._state);
    }
}

export const addPostActionCreator = () => ({
        type: ADD_POST
})

export const updateNewPostTextActionCreator = (text) => ({
        type: UPDATE_NEW_POST_TEXT,
        newText: text
})


export const sendMessageCreator = () => ({
    type: SEND_MESSAGE
})

export const updateNewMessageBodyCreator = (body) => ({
    type: UPDATE_NEW_MESSAGE_BODY,
    body: body
})

export default store;

window.store = store;
