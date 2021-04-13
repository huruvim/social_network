import {ActionsTypes, PostType, ProfilePageType} from "./store";
import {ProfileType} from "../components/Profile/ProfileContainer";
import {Dispatch} from "redux";
import {AxiosResponse} from "axios";
import {profileAPI, usersAPI} from "../api/api";

const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST';
export type addPostAC = ReturnType<typeof addPostAC>
export type setUserProfile = ReturnType<typeof setUserProfile>
export type setStatus = ReturnType<typeof setStatus>
export type updateStatus = ReturnType<typeof updateStatus>
export type deletePost = ReturnType<typeof deletePost>

type UpdateStatusType = {
    resultCode: number
    messages: string
    data: {}
}

const initialState: ProfilePageType = {
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

const profileReducer = (state = initialState, action: ActionsTypes): ProfilePageType => {
    switch (action.type) {
        case ADD_POST:
            const newPost: PostType = {
                id: 5,
                message: action.post,
                likesCount: 0,
            }
            return {
                ...state,
                posts: [newPost, ...state.posts],
                newPostText: ''
            }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        case DELETE_POST: {
            return {
                ...state,
                posts: state.posts.filter(p => p.id !== action.postId)
            }
        }
        default:
            return state
    }
}
//ac
export const addPostAC = (post: string) => ({type: ADD_POST, post} as const)
export const setUserProfile = (profile: ProfileType) => ({type: SET_USER_PROFILE, profile} as const)
export const setStatus = (status: string) => ({type: SET_STATUS, status} as const)
export const deletePost = (postId: number) => ({type: DELETE_POST, postId} as const)

//tc
export const getUserProfile = (userId: number) => async (dispatch: Dispatch<ActionsTypes>) => {
    const response: AxiosResponse<ProfileType> = await usersAPI.getProfile(userId)
    dispatch(setUserProfile(response.data))
}

export const getStatus = (userId: number) => async (dispatch: Dispatch<ActionsTypes>) => {
    const response: AxiosResponse<string> = await profileAPI.getStatus(userId)
    dispatch(setStatus(response.data))
}
export const updateStatus = (status: string) => async (dispatch: Dispatch<ActionsTypes>) => {
    const response: AxiosResponse<UpdateStatusType> = await profileAPI.updateStatus(status)
    if (response.data.resultCode === 0) {
        dispatch(setStatus(status))
    }
}

export default profileReducer