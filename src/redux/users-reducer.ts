import {ActionsTypes} from "./store";
import {usersAPI} from "../api/api";
import {AxiosResponse} from "axios";
import {FollowUserType} from "../components/Users/Users";
import {Dispatch} from "redux";
import {updateObjectInArray} from "../utils/object-helpers";

const FOLLOW = "FOLLOW";
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';
export type follow = ReturnType<typeof followSuccess>
export type unfollow = ReturnType<typeof unfollowSuccess>
export type setUsers = ReturnType<typeof setUsers>
export type setCurrentPage = ReturnType<typeof setCurrentPage>
export type setTotalUsersCount = ReturnType<typeof setTotalUsersCount>
export type toggleIsFetching = ReturnType<typeof toggleIsFetching>

type initialStateType = typeof initialState

const initialState = {
    users: [] as Array<any>,
    pageSize: 5,
    TotalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProcess: [] as Array<number>
}

const usersReducer = (state = initialState, action: ActionsTypes): initialStateType => {
    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userID, "id", {followed: true})

            }
        }
        case UNFOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userID, "id", {followed: false})
            }
        case SET_USERS: {
            return {...state, users: action.users}
        }
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage}
        }
        case SET_TOTAL_USERS_COUNT: {
            return {...state, TotalUsersCount: action.count}
        }
        case TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }
        case TOGGLE_IS_FOLLOWING_PROGRESS: {
            return {
                ...state,
                followingInProcess: action.isFetching
                    ? [...state.followingInProcess, action.userId]
                    : state.followingInProcess.filter(id => id !== action.userId)
            }
        }
        default:
            return state
    }
}
//ac
export const followSuccess = (userID: number) => ({type: FOLLOW, userID} as const)
export const unfollowSuccess = (userID: number) => ({type: UNFOLLOW, userID} as const)
export const setUsers = (users: any) => ({type: SET_USERS, users} as const)
export const setCurrentPage = (currentPage: number) => ({type: SET_CURRENT_PAGE, currentPage} as const)
export const setTotalUsersCount = (TotalUserCount: number) => ({
    type: SET_TOTAL_USERS_COUNT,
    count: TotalUserCount
} as const)
export const toggleIsFetching = (isFetching: boolean) => ({type: TOGGLE_IS_FETCHING, isFetching} as const)
export const toggleFollowingProgress = (isFetching: boolean, userId: number) =>
    ({type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId} as const)

//tc
export const request = (page: number, pageSize: number) => async (dispatch: Dispatch<ActionsTypes>) => {
    dispatch(toggleIsFetching(true))
    dispatch(setCurrentPage(page))
    const data = await usersAPI.getUsers(page, pageSize)
    dispatch(toggleIsFetching(false))
    dispatch(setUsers(data.items))
    dispatch(setTotalUsersCount(data.totalCount))
}
const followUnfollowFlow = async (dispatch: Dispatch, userId: number, apiMethod: any, actionCreator: any) => {
    dispatch(toggleFollowingProgress(true, userId))
    const response: AxiosResponse<FollowUserType> = await apiMethod(userId)
    if (response.data.resultCode === 1) {
        dispatch(actionCreator(userId))
    }
    dispatch(toggleFollowingProgress(false, userId))
}
export const follow = (userId: number) => (dispatch: Dispatch<ActionsTypes>) => {
    followUnfollowFlow(dispatch, userId, usersAPI.follow.bind(usersAPI), followSuccess)
}

export const unfollow = (userId: number) => (dispatch: Dispatch<ActionsTypes>) => {
    followUnfollowFlow(dispatch, userId, usersAPI.unfollow.bind(usersAPI), unfollowSuccess)
}


export default usersReducer