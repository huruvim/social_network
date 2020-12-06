export type PostType = {
    id: number
    message: string
    likesCount: number
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
export type StoreType = {
    _state: RootStateType
    getState: () => RootStateType
    _callSubscriber: () => void
    addPostCallback: () => void
    changeNewTextCallback: (NewText: string) => void
    subscriber: (observer: () => void) => void
}

const store: StoreType = {
    _state: {
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
},
    getState () {
        return this._state
    },
    _callSubscriber () {
        console.log('State has been changed')
    },
    addPostCallback () {
        let newPost: PostType = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCount: 0,
        }
        this._state.profilePage.posts.unshift(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber()
    },
    changeNewTextCallback (NewText: string) {
        this._state.profilePage.newPostText = NewText
        this._callSubscriber()
    },
    subscriber (observer) {
        this._callSubscriber = observer;
    }
}
export default store;