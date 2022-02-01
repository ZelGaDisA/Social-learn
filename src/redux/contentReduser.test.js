import profileReducer, { addPostActionCreator, deletePost } from "./content-reduser";

const state = {
    posts: [
        { id: 1, likesCount: 2, text: "What a fuck. What a fuck. What a fuck. What a fuck. What a fuck. What a fuck. What a fuck. What a fuck. What a fuck. What a fuck. What a fuck. What a fuck. " },
        { id: 2, likesCount: 13, text: "lorem lorem ryba ryba ryba blyat" },
        { id: 3, likesCount: 3, text: "fking shit at your mouth nooblo " },
    ]
}

it("length of posts should be incremented", () => {
    //1. test data
    let action = addPostActionCreator("blabla")

    //2. action
    let newState = profileReducer(state, action)

    //3. expectation
    expect (newState.posts.length).toBe(4)
    expect (newState.posts[3].text).toBe('blabla')

})

it("after deleting length of messages should decrease", () => {
    //1. test data
    let action = deletePost(1)

    //2. action
    let newState = profileReducer(state, action)

    //3. expectation
    expect (newState.posts.length).toBe(2)

})

it("after deleting length shouldn't be changed if id is incorrect", () => {
    //1. test data
    let action = deletePost(1000)

    //2. action
    let newState = profileReducer(state, action)

    //3. expectation
    expect (newState.posts.length).toBe(3)

}