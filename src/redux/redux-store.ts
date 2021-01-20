import {applyMiddleware, combineReducers, createStore, Store} from "redux";
import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import thunk from "redux-thunk";

const reducer = combineReducers({
    dialogsPage: dialogsReducer,
    profilePage: profileReducer,
    usersPage: usersReducer,
    sidebar: sidebarReducer,
    auth: authReducer

})

const store: Store = createStore(reducer, applyMiddleware(thunk))

export type AppRootStateType = ReturnType<typeof reducer>

// @ts-ignore
window.store = store

export default store