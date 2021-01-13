import {ActionsTypes} from "./store";

const FOLLOW = "FOLLOW";
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
export type follow = ReturnType<typeof follow>
export type unfollow = ReturnType<typeof unfollow>
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
    isFetching: true
}

const usersReducer = (state= initialState, action: ActionsTypes):initialStateType => {
    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                // users: [...state.users],
                users: state.users.map( (u: any) => {
                    if (u.id === action.userID ) {
                        return {...u, followed: true}
                    }
                    return u
                } )
            }
        }
        case UNFOLLOW:
            return { ...state, users: state.users.map( (u: any) => {
                    if (u.id === action.userID ) {
                        return {...u, followed: false}
                    }
                    return u
                } )
            }

        case SET_USERS: {
            return { ...state, users: action.users }
        }
        case SET_CURRENT_PAGE: {
            return { ...state, currentPage: action.currentPage}
        }
        case SET_TOTAL_USERS_COUNT: {
            return { ...state, TotalUsersCount: action.count }
        }
        case TOGGLE_IS_FETCHING: {
            return { ...state, isFetching: action.isFetching}
        }
        default:
            return state
    }
}

export const follow = (userID: number) => {
     return {
          type: 'FOLLOW',
          userID
     } as const
}
export const unfollow = (userID: number) => {
    return {
        type: 'UNFOLLOW',
        userID
    } as const
}
export const setUsers = (users: any) => {
    return {
        type: 'SET_USERS',
        users
    } as const
}
export const setCurrentPage = (currentPage: number) => {
    return {
        type: 'SET_CURRENT_PAGE',
        currentPage
    } as const
}
export const setTotalUsersCount = (TotalUserCount: number) => {
    return {
        type: 'SET_TOTAL_USERS_COUNT',
        count: TotalUserCount
    } as const
}
export const toggleIsFetching = (isFetching: boolean) => {
    return {
        type: 'TOGGLE_IS_FETCHING',
        isFetching
    } as const
}


export default usersReducer