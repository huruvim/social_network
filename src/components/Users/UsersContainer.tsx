import {connect} from 'react-redux';
import {AppRootStateType} from "../../redux/redux-store";
import {follow, request, setCurrentPage, toggleFollowingProgress, unfollow} from "../../redux/users-reducer";
import React, {ComponentType} from "react";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {
    getAllUsers,
    getCurrentPage,
    getFollowingInProcess,
    getIsFetching,
    getPageSize,
    getTotalUsersCount
} from "../../redux/users-selectors"
import {compose} from "redux";


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


// type MSTPType = {
//     users: Array<any>
//     pageSize: number
//     totalUsersCount: number
//     currentPage: number
//     isFetching: boolean
//     followingInProcess: Array<number>
// }

type PropsType = {
    users: Array<any>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    setCurrentPage: (currentPage: number) => void
    toggleFollowingProgress: (isFetching: boolean, userId: number) => void
    followingInProcess: Array<number>
    request: (currentPage: number, pageSize: number) => void
}

class UsersContainer extends React.Component<PropsType> {


    componentDidMount() {
        this.props.request(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber: number) => {
        this.props.request(pageNumber, this.props.pageSize)
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
                   users={this.props.users}
                   followingInProcess={this.props.followingInProcess}

            />
        </>
    }
}

let mapStateToProps = (state: AppRootStateType) => {
    return {
        users: getAllUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProcess: getFollowingInProcess(state)
    }
}

// export default compose<ComponentType>(
//     connect(mapStateToProps,
//         {follow, unfollow, setCurrentPage, toggleFollowingProgress, requestUsers}),
// )(UsersContainer);


export default compose<ComponentType>(
    connect(
        mapStateToProps,
        {follow, unfollow, setCurrentPage, toggleFollowingProgress, request}
    ),
)(UsersContainer)