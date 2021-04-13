import profileReducer, {addPostAC, deletePost} from "./profile-reducer";

const state = {
    posts: [
        {id: 1, message: "What hove you done, Tony?", likesCount: 12},
        {id: 2, message: "This is my post", likesCount: 13},
        {id: 3, message: "This is my second post", likesCount: 15},
        {id: 4, message: "This is my new post", likesCount: 22},
        {id: 5, message: "This is my first post", likesCount: 1}
    ],
    newPostText: "",
    profile: null,
    status: null
}

it('the length should be incremented', () => {
    let action = addPostAC('this is my first post, that is cool')

    const newState = profileReducer(state, action)

    expect(newState.posts.length).toBe(6)


})
it('new post message should be correct ', () => {
    let action = addPostAC('this is my first post, that is cool')

    const newState = profileReducer(state, action)

    expect(newState.posts[0].message).toBe("this is my first post, that is cool")


})
it('new post should be added with 0 likesCount', () => {
    let action = addPostAC('this is my first post, that is cool')

    const newState = profileReducer(state, action)

    expect(newState.posts[0].likesCount).toBe(0)
})

it('after deleting length of posts should be decremented', () => {
    let action = deletePost(1)

    const newState = profileReducer(state, action)

    expect(newState.posts.length).toBe(4)
})

it(`after deleting length of posts shouldn't be decremented if id is incorrect`, () => {
    let action = deletePost(1000)

    const newState = profileReducer(state, action)

    expect(newState.posts.length).toBe(5)
})