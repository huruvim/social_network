import {ActionsTypes} from "./store";

const FOLLOW = "FOLLOW";
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
export type followAC = ReturnType<typeof followAC>
export type unfollowAC = ReturnType<typeof unfollowAC>
export type setUsersAC = ReturnType<typeof setUsersAC>
export type setCurrentPageAC = ReturnType<typeof setCurrentPageAC>
export type setTotalUsersCountAC = ReturnType<typeof setTotalUsersCountAC>

// type initialStateType = typeof initialState

const initialState = {
    users: [] as Array<any>,
    pageSize: 5,
    TotalUsersCount: 0,
    currentPage: 1
}

const usersReducer = (state = initialState, action: ActionsTypes): typeof initialState => {
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
        default:
            return state
    }
}

export const followAC = (userID: number) => {
     return {
          type: 'FOLLOW',
          userID
     } as const
}
export const unfollowAC = (userID: number) => {
    return {
        type: 'UNFOLLOW',
        userID
    } as const
}
export const setUsersAC = (users: any) => {
    return {
        type: 'SET_USERS',
        users
    } as const
}
export const setCurrentPageAC = (currentPage: number) => {
    return {
        type: 'SET_CURRENT_PAGE',
        currentPage
    } as const
}
export const setTotalUsersCountAC = (TotalUserCount: number) => {
    return {
        type: 'SET_TOTAL_USERS_COUNT',
        count: TotalUserCount
    } as const
}


export default usersReducer