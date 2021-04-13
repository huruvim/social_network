import React, {FC} from 'react'
import s from "./Users.module.css";
import userPhoto from "../../assets/images/alternative-img.png";
import {NavLink} from 'react-router-dom';

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

export type FollowUserType = {
    resultCode: number
    messages: Array<string>
    data: {}
}
type PropsType = {
    user: any
    followingInProcess: number[]
    unfollow: (userID: number) => void
    follow: (userID: number) => void
}
const User: FC<PropsType> = ({user, followingInProcess, unfollow, follow}) => {
    return <>
        <div key={user.id}>
                    <span>
                        <div>
                            <NavLink to={'/profile/' + user.id}>
                            <img src={user.photos.small != null ? user.photos.small : userPhoto} className={s.photoURL}
                                 alt={`avatar`}/>
                            </NavLink>
                        </div>
                        <div>
                            {user.followed
                                ? <button disabled={followingInProcess.some((id: any) => id === user.id)}
                                          onClick={() => {unfollow(user.id)}}>Unfollowed</button>

                                : <button disabled={followingInProcess.some((id: any) => id === user.id)}
                                          onClick={() => {follow(user.id)}}>Followed</button>
                            }
                        </div>
                    </span>
                <span>
                        <span>
                            <div>{user.name}</div>
                            <div>{user.status}</div>
                        </span>
                        <span>
                            <div>{'u.location.country'}</div>
                            <div>{'u.location.city'}</div>
                        </span>
                    </span>
            </div>

    </>
}

export default User;