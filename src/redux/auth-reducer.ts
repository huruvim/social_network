import {ActionsTypes} from "./store";


const SET_USER_DATA = 'SET-USER-DATA'
export type setAuthUserData = ReturnType<typeof setAuthUserData>


type initialStateType = typeof initialState

const initialState = {
    id: null as number | null,
    email: null as string | null,
    login: null as string | null,
    isAuth: false
}

const authReducer = (state = initialState, action: ActionsTypes): initialStateType => {
    switch (action.type) {
        case SET_USER_DATA: {
            return { ...state, ...action.data, isAuth: true }
        }
        default:
            return state
    }
}

export const setAuthUserData = (id: number, email: string, login: string) => {
    return {
        type: SET_USER_DATA,
        data: {
            id,
            email,
            login
        }
    } as const
}


export default authReducer
