import {connect} from 'react-redux';
import {AppRootStateType} from "../../redux/redux-store";
import {
    follow,
    setCurrentPage,
    setTotalUsersCount,
    setUsers, toggleFollowingProgress,
    toggleIsFetching,
    unfollow
} from "../../redux/users-reducer";
import React from "react";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {usersAPI} from "../../api/api";

export type UsersInfoType = {
    name: string
    id: number
    uniqueUrlName: null
    photos: { small: any, large: any }
    status: null
    followed: boolean
}
export type UsersType = {
    items: Array<UsersInfoType>
    totalCount: number
}
type PropsType = {
    users: Array<any>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    setUsers: (users: any) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalCount: number) => void
    toggleIsFetching: (isFetching: boolean) => void
    toggleFollowingProgress: (isFetching: boolean, userId: number) => void
    followingInProcess: Array<number>
}

class UsersContainer extends React.Component<PropsType> {

    componentDidMount() {
        this.props.toggleIsFetching(true)

        usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then((data) => {
            debugger
                this.props.toggleIsFetching(false)
                this.props.setUsers(data.items)
                this.props.setTotalUsersCount(data.totalCount)
            })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.toggleIsFetching(true)
        this.props.setCurrentPage(pageNumber)
        usersAPI.getUsers(pageNumber, this.props.pageSize).then((data) => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(data.items)
            })
    }

    render() {
        return <>
            { this.props.isFetching ? <Preloader /> : null }
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
                   users={this.props.users}
                   followingInProcess={this.props.followingInProcess}
                   toggleFollowingProgress={this.props.toggleFollowingProgress}
            />
        </>
    }
}

let mapStateToProps = (state: AppRootStateType) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.TotalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProcess: state.usersPage.followingInProcess

    }

}

export default connect(mapStateToProps,
    {follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching, toggleFollowingProgress})(UsersContainer);