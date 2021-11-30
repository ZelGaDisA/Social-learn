import { rerenderEntireTree } from "../render";

let state = {
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
}

export let addPost = () => {
    let newPost = {
        id: 7,
        message: state.contentPage.newPostText,
        likesCount: 0
    };
    state.contentPage.posts.push(newPost);
    state.contentPage.newPostText = '';
    rerenderEntireTree(state);
}

export let updateNewPostText = (newText) => {
    state.contentPage.newPostText = newText;
    rerenderEntireTree(state);
}


export default state;
