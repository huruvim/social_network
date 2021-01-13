import {addPostAC, changeNewTextAC, setUserProfile} from "./profile-reducer";
import dialogsReducer, {sendMessageAC, updateNewMessageBodyAC} from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import {follow, setCurrentPage, setTotalUsersCount, setUsers, toggleIsFetching, unfollow, toggleFollowingProgress} from "./users-reducer";
import {ProfileType} from "../components/Profile/ProfileContainer";
import {setAuthUserData} from "./auth-reducer";

export type UserLocationType = {
    // city: string,
    // country: string
}

export type UsersType = {
    id: number,
    photos: string,
    followed: boolean,
    name: string,
    status: string,
    location: UserLocationType
}
// export type UsersType = {
//     users: Array<UserType>
// }

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
    id: number
}
export type DialogPageType = {
    dialogs: Array<DialogsType>
    messages: Array<MessageType>
    newMessageBody: string
}
export type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string
    profile: null | ProfileType
}
export type SidebarType = {}
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

export type ActionsTypes =
    | ReturnType<typeof addPostAC>
    | ReturnType<typeof changeNewTextAC>
    | ReturnType<typeof sendMessageAC>
    | ReturnType<typeof updateNewMessageBodyAC>
    | ReturnType<typeof follow>
    | ReturnType<typeof unfollow>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setTotalUsersCount>
    | ReturnType<typeof toggleIsFetching>
    | ReturnType<typeof setUserProfile>
    | ReturnType<typeof setAuthUserData>
    | ReturnType<typeof toggleFollowingProgress>




const store: StoreType = {
    _state: {
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
        profilePage: {
            posts: [
                {id: 1, message: "What hove you done, Tony?", likesCount: 12},
                {id: 2, message: "This is my post", likesCount: 13},
                {id: 3, message: "This is my second post", likesCount: 15},
                {id: 4, message: "This is my new post", likesCount: 22},
                {id: 5, message: "This is my first post", likesCount: 1}
            ],
            newPostText: "",
            profile: null
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

        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        // this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)

        this._callSubscriber()

    }
}







export default store;