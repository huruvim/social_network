import {ActionsTypes} from "./store";
import {Dispatch} from "redux";
import {AxiosResponse} from "axios";
import {AuthDataType} from "../components/Header/HeaderContainer";
import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";

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
            return {...state, ...action.payload}
        }
        default:
            return state
    }
}
//ac
export const setAuthUserData = (id: number, email: string, login: string, isAuth: boolean) => {
    return {
        type: SET_USER_DATA,
        payload: {
            id,
            email,
            login,
            isAuth
        }
    } as const
}
//tc
export const getAuthUserData = () => (dispatch: Dispatch) => {
    return authAPI.me()
        .then((response: AxiosResponse<AuthDataType>) => {
                if (response.data.resultCode === 0) {
                    const {id, login, email} = response.data.data
                    dispatch(setAuthUserData(id, email, login, true))
                }
            }
        )
}
export const login = (email: string, password: string, rememberMe: boolean) => (dispatch: Dispatch) => {
    authAPI.login(email, password, rememberMe)
        .then((response: AxiosResponse<any>) => {
                if (response.data.resultCode === 0) {
                    // @ts-ignore
                    dispatch(getAuthUserData())
                } else {
                    const errorMessage =  response.data.messages ? response.data.messages[0] : "Some error occurred"
                    dispatch(stopSubmit('login', {_error: errorMessage}))
                }
            }
        )
}
export const logout = () => (dispatch: Dispatch) => {
    authAPI.logout()
        .then((response: AxiosResponse<AuthDataType>) => {
                if (response.data.resultCode === 0) {
                    // @ts-ignore
                    dispatch(setAuthUserData(null, null, null, false))
                }
            }
        )
}

export default authReducer
