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
            ]
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
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: 7,
                message: this._state.contentPage.newPostText,
                likesCount: 0
            };
            this._state.contentPage.posts.push(newPost);
            this._state.contentPage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.contentPage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }
    }
}

export default store;

window.store = store;
