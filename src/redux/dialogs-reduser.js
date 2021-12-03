const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
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
};


export const dialogsReduser = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.body
            }
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            return {
                ...state,
                newMessageBody: '',
                messages: [...state.messages, { id: 7, message: body }]
            }
        default:
            return state;
    }
}

export const sendMessageCreator = () => ({
    type: SEND_MESSAGE
})

export const updateNewMessageBodyCreator = (body) => ({
    type: UPDATE_NEW_MESSAGE_BODY,
    body: body
})