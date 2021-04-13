import React, {FC} from 'react'
import {UsersInfoType} from "./UsersContainer";
import Pagination from "../common/Pagination/Pagination";
import User from "./User";

type PropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    users: Array<any>
    onPageChanged: (pageNumber: number) => void
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    followingInProcess: Array<number>
}

export type FollowUserType = {
    resultCode: number
    messages: Array<string>
    data: {}
}
const Users: FC<PropsType> = ({
                                  follow, unfollow,
                                  followingInProcess,pageSize,
                                  totalUsersCount, onPageChanged,
                                  users, currentPage

}) => {
    return <>
        <Pagination currentPage={currentPage}
                    onPageChanged={onPageChanged}
                    totalUsersCount={totalUsersCount}
                    pageSize={pageSize}/>
        <div>
            {
                users.map((u: UsersInfoType) => <User user={u}
                                                      followingInProcess={followingInProcess}
                                                      unfollow={unfollow}
                                                      follow={follow}
                                                      key={u.id}/>)
            }
        </div>
    </>
}

export default Users;