// import {rerenderEntireTree} from "../render";

let rerenderEntireTree = () => {
    console.log('State has been changed')
}

const love = []

export type PostType = {
    id: number
    message: string
    likesCount: number
}
export type PostTextType = {
    newPostText: string
}
export type DialogsType = {
    name: string
    id: number
}
export type MessageType = {
    message: string
    likesCount: number
    id: number
}
export type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string
}
export type DialogPageType = {
    dialogs: Array<DialogsType>
    messages: Array<MessageType>
}
type SidebarType = {}
export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogPageType
    sidebar: SidebarType
}

// export type PropsType = {
//     addPost: (postMessage: string) => void
// }

let state: RootStateType = {
    profilePage: {
        posts: [
            {id: 1, message: "What hove you done, Tony?", likesCount: 12},
            {id: 2, message: "This is my post", likesCount: 13},
            {id: 3, message: "This is my second post", likesCount: 15},
            {id: 4, message: "This is my new post", likesCount: 22},
            {id: 5, message: "This is my first post", likesCount: 1}
        ],
        newPostText: ""
    },
    dialogsPage: {
        dialogs: [
            {id: 1, name: "Kolia"},
            {id: 2, name: "Marina"},
            {id: 3, name: "Ludmila"},
            {id: 4, name: "Andrey"},
            {id: 5, name: "Anastasia"}
        ],
        messages: [
            {id: 1, message: "Hey Kolia) how is it going ?", likesCount: 12},
            {id: 2, message: "as always. you ?", likesCount: 14},
            {id: 3, message: "f**king awsome", likesCount: 17},
            {id: 4, message: "yo", likesCount: 12},
            {id: 5, message: "yo", likesCount: 3}
        ]
    },
    sidebar: {}
}

// window.state = state;

export const addPostCallback = () => {
    let newPost: PostType = {
        id: 5,
        message: state.profilePage.posts[1].message,
        likesCount: 0,
    }
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree()
}

export const changeNewTextCallback = (NewText: string) => {
    state.profilePage.newPostText = NewText
    rerenderEntireTree()
}

export const subscriber = (observer: () => void) => {
    rerenderEntireTree = observer;
}

export default state;