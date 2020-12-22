import {UsersType} from "./store";

const FOLLOW = "FOLLOW";
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
export type followAC = ReturnType<typeof followAC>
export type unfollowAC = ReturnType<typeof unfollowAC>
export type setUsersAC = ReturnType<typeof setUsersAC>

// type initialStateType = typeof initialState

const initialState = {
    users: []
}

const usersReducer = (state: UsersType = initialState, action: any) => {
    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                // users: [...state.users],
                users: state.users.map( u => {
                    if (u.id === action.userID ) {
                        return {...u, followed: true}
                    }
                    return u
                } )
            }
        }
        case UNFOLLOW: {
            return {
                ...state,
                // users: [...state.users],
                users: state.users.map( u => {
                    if (u.id === action.userID ) {
                        return {...u, followed: false}
                    }
                    return u
                } )
            }
        }
        case SET_USERS: {
            return { ...state, users: [...state.users, ...action.users ]}
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
// export const changeNewTextAC = (text: string) => {
//      return {
//           type: CHANGE_NEW_TEXT,
//           newText: text
//      } as const
// }

export default usersReducer