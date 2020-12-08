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
    // likesCount: number
    id: number
}
export type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string
}
export type DialogPageType = {
    dialogs: Array<DialogsType>
    messages: Array<MessageType>
    newMessageBody: string
}
type SidebarType = {}
export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogPageType
    sidebar: SidebarType
}
export type StoreType = {
    _state: RootStateType
    _callSubscriber: () => void
    getState: () => RootStateType
    subscribe: (observer: () => void) => void
    dispatch: (action: ActionsTypes) => void
}

// export type AddPostActionType = {
//     type: 'ADD-POST'
//     newPostText: string
// }
export type AddPostAC = ReturnType<typeof addPostAC>
export type ChangeNewTextAC = ReturnType<typeof newTextChangeHandlerAC>
export type sendMessageAC = ReturnType<typeof newTextChangeHandlerAC>
export type updateNewMessageBodyAC = ReturnType<typeof newTextChangeHandlerAC>

export type ActionsTypes = ReturnType<typeof addPostAC>
    | ReturnType<typeof newTextChangeHandlerAC>
| ReturnType<typeof sendMessageAC>
| ReturnType<typeof updateNewMessageBodyAC>

const ADD_POST = "ADD-POST";
const CHANGE_NEW_TEXT = 'CHANGE-NEW-TEXT';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';



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
                {id: 1, message: "Hey Kolia) how is it going ?"},
                {id: 2, message: "as always. you ?"},
                {id: 3, message: "f**king awsome"},
                {id: 4, message: "yo"},
                {id: 5, message: "yo"}
            ],
            newMessageBody: ''
        },
        sidebar: {}
    },
    _callSubscriber() {
        console.log('State has been changed')
    },
    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        if (action.type === ADD_POST) {
            let newPost: PostType = {
                id: 5,
                message: action.newPostText,
                likesCount: 0,
            }
            this._state.profilePage.posts.unshift(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber()
        } else if (action.type === CHANGE_NEW_TEXT) {
            this._state.profilePage.newPostText = action.newText
            this._callSubscriber()
        } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
            this._state.dialogsPage.newMessageBody = action.body;
            this._callSubscriber()
        } else if (action.type === SEND_MESSAGE) {
            let body = this._state.dialogsPage.newMessageBody;
            this._state.dialogsPage.newMessageBody = ''
            this._state.dialogsPage.messages.push({id: 6, message: body});
            this._callSubscriber();
        }
    }
}

export const addPostAC = (newPostText: string) => {
    return {
        type: ADD_POST,
        newPostText: newPostText
    } as const
}
export const newTextChangeHandlerAC = (text: string) => {
    return {
        type: CHANGE_NEW_TEXT,
        newText: text
    } as const
}

export const sendMessageAC = () => {
    return {
        type: SEND_MESSAGE
    } as const
}
export const updateNewMessageBodyAC = (body: string) => {
    return {
        type: UPDATE_NEW_MESSAGE_BODY,
        body: body
    } as const
}



export default store;