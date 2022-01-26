const SEND_MESSAGE = 'SEND_MESSAGE';


export const sendMessage = (newMessageBody) => ({ type: SEND_MESSAGE, newMessageBody })

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
    ]
};


const dialogsReducer = (state = initialState, action) => {
  
    switch (action.type) {
      case SEND_MESSAGE: 
        const body = action.newMessageBody
        return {
          ...state,
          messages: [...state.messages, { id: Date.now(), message: body }]
        }
      default: return state
    }
  }
  
  export default dialogsReducer