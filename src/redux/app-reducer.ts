import {getAuthUserData} from "./auth-reducer";
import {ActionsTypes} from "./store";
import {AppRootStateType} from "./redux-store";
import {ThunkDispatch} from "redux-thunk";

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS'
export type initializedSuccess = ReturnType<typeof initializedSuccess>


type initialStateType = typeof initialState

const initialState = {
    initialized: false,
}

const appReducer = (state = initialState, action: ActionsTypes): initialStateType => {
    switch (action.type) {
        case INITIALIZED_SUCCESS: {
            return {...state,
                initialized: true
            }
        }
        default:
            return state
    }
}
//ac
export const initializedSuccess = () => ({type: INITIALIZED_SUCCESS } as const)
//tc
export const initializeApp = () => (dispatch: ThunkDispatch<AppRootStateType, unknown, ActionsTypes>)  => {
    const promise = dispatch(getAuthUserData())
    //possible promise
    //possible promise
    Promise.all([promise]).then(() => {
        dispatch(initializedSuccess())
    })
}

export default appReducer;
