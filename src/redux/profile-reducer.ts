import {ActionsTypes, PostType, ProfilePageType} from "./store";
import {ProfileType} from "../components/Profile/ProfileContainer";
import {Dispatch} from "redux";
import axios, {AxiosResponse} from "axios";
import {toggleFollowingProgress} from "./users-reducer";

const ADD_POST = "ADD-POST";
const CHANGE_NEW_TEXT = 'CHANGE-NEW-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
export type addPostAC = ReturnType<typeof addPostAC>
export type changeNewTextAC = ReturnType<typeof changeNewTextAC>
export type setUserProfile = ReturnType<typeof setUserProfile>

const initialState: ProfilePageType = {
    posts: [
        {id: 1, message: "What hove you done, Tony?", likesCount: 12},
        {id: 2, message: "This is my post", likesCount: 13},
        {id: 3, message: "This is my second post", likesCount: 15},
        {id: 4, message: "This is my new post", likesCount: 22},
        {id: 5, message: "This is my first post", likesCount: 1}
    ],
    newPostText: "",
    profile: null
}

const profileReducer = (state = initialState, action: ActionsTypes): ProfilePageType => {
    switch (action.type) {
        case ADD_POST:
            const newPost: PostType = {
                id: 5,
                message: state.newPostText,
                likesCount: 0,
            }
            return {
                ...state,
                posts: [newPost, ...state.posts],
                newPostText: ''
            }
        case CHANGE_NEW_TEXT:
            return {
                ...state,
                newPostText: action.newText
            }
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        default:
            return state
    }
}

export const addPostAC = () => {
    return {
        type: ADD_POST
    } as const
}
export const changeNewTextAC = (text: string) => {
    return {
        type: CHANGE_NEW_TEXT,
        newText: text
    } as const
}
export const setUserProfile = (profile: ProfileType) => {
    return {
        type: SET_USER_PROFILE,
        profile
    } as const
}

export const getUserProfile = (userId: number) => (dispatch: Dispatch<ActionsTypes>) => {
    dispatch(toggleFollowingProgress(true, userId))
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
        .then((response: AxiosResponse<ProfileType>) => {
            dispatch(toggleFollowingProgress(false, userId))
            dispatch(setUserProfile(response.data))
        })
}

export default profileReducer