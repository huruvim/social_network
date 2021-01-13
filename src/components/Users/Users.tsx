import React from 'react'
import s from "./Users.module.css";
import userPhoto from "../../assets/images/alternative-img.png";
import {UsersInfoType} from "./UsersContainer";
import {NavLink} from 'react-router-dom';
import axios, {AxiosResponse} from "axios";

type PropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    users: Array<any>
    onPageChanged: (pageNumber: number) => void
    follow: (userID: number) => void
    unfollow: (userID: number) => void
}

type FollowUserType = {
    resultCode: number
    messages: Array<string>,
    data: {}
}

const Users = (props: PropsType) => {

    const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    let pages = []

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return <div>
        <div>
            {pages.map(p => {
                return <span className={props.currentPage === p ? s.selectedPage : ''}
                             onClick={() => {
                                 props.onPageChanged(p)
                             }}>{p}</span>
            })}


        </div>
        {
            props.users.map((u: UsersInfoType) => <div key={u.id}>
                    <span>
                        <div>
                            <NavLink to={'/profile/' + u.id}>
                            <img src={u.photos.small != null ? u.photos.small : userPhoto} className={s.photoURL}
                                 alt={`avatar`}/>
                            </NavLink>
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => {
                                    axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                        withCredentials: true,
                                        headers: {
                                            'API-Key': 'cfb6e34f-6374-462a-8da5-72f5e5249b28'
                                        }
                                    })
                                        .then((response: AxiosResponse<FollowUserType>) => {
                                            if (response.data.resultCode === 0) {
                                                props.unfollow(u.id)
                                            }
                                        })
                                }}>Unfollowed</button>
                                : <button onClick={() => {
                                    axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, null, {
                                        withCredentials: true,
                                        headers: {
                                            'API-Key': 'cfb6e34f-6374-462a-8da5-72f5e5249b28'
                                        }
                                    })
                                        .then((response: AxiosResponse<FollowUserType>) => {
                                            if (response.data.resultCode === 1) {
                                                props.unfollow(u.id)
                                            }
                                        })
                                    props.follow(u.id)


                                }}>Followed</button>}
                        </div>
                    </span>
                <span>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{'u.location.country'}</div>
                            <div>{'u.location.city'}</div>
                        </span>
                    </span>
            </div>)
        }
    </div>
}

export default Users;