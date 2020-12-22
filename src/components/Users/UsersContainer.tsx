import { connect } from 'react-redux';
import Users from "./Users";
import {AppRootStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {followAC, unfollowAC, setUsersAC} from "../../redux/users-reducer";

const mapStateToProps = (state: AppRootStateType) => {
    return {
        users: state.usersPage.users
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        follow: (userID: number) => {
            dispatch(followAC(userID))
        },
        unfollow: (userID: number) => {
            dispatch(unfollowAC(userID))
        },
        setUsers: (users: any) => {
            dispatch(setUsersAC(users))
        },
    }

}

export default connect (mapStateToProps, mapDispatchToProps )(Users);