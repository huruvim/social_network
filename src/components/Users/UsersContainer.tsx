import {connect} from 'react-redux';
import {AppRootStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {followAC, setUsersAC, unfollowAC, setCurrentPageAC, setTotalUsersCountAC} from "../../redux/users-reducer";
import {UsersType} from '../../redux/store';
import Users from "./Users";


const mapStateToProps = (state: AppRootStateType) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        TotalUsersCount: state.usersPage.TotalUsersCount,
        currentPage: state.usersPage.currentPage
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
        setUsers: (users: UsersType) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (pageNumber: number) => {
            dispatch(setCurrentPageAC(pageNumber))
        },
        setTotalUsersCount: (totalCount: number) => {
            dispatch(setTotalUsersCountAC(totalCount))
        }
    }

}

export default connect (mapStateToProps, mapDispatchToProps )(Users);