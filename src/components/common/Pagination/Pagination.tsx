import React from 'react'
import style from "./Pagination.module.css";

// type PropsType = {
//     totalUsersCount: number
//     pageSize: number
//     currentPage: number
//     users: Array<any>
//     onPageChanged: (pageNumber: number) => void
//     follow: (userID: number) => void
//     unfollow: (userID: number) => void
//     followingInProcess: Array<number>
// }

// export type FollowUserType = {
//     resultCode: number
//     messages: Array<string>,
//     data: {}
// }

type PropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
}

const Pagination:React.FC<PropsType> = ({totalUsersCount, pageSize, currentPage, onPageChanged}) => {

    const pagesCount = Math.ceil(totalUsersCount / pageSize)

    let pages = []

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div>
            {pages.map(p => {
                return <span className={currentPage === p ? style.selectedPage : ''}
                             onClick={() => {
                                 onPageChanged(p)
                             }}>{p}</span>
            })}
        </div>
    )
}

export default Pagination