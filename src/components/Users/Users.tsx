import React from 'react'
import s from "./Users.module.css";
import userPhoto from "../../assets/images/alternative-img.png";
import { UsersInfoType } from "./UsersContainer";

type PropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    users: Array<any>
    onPageChanged: (pageNumber: number) => void
    follow: (userID: number) => void
    unfollow: (userID: number) => void
}

const Users = (props: PropsType) => {

    const pagesCount = Math.ceil(props.totalUsersCount/props.pageSize)

    let pages = []

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return <div>
        <div>
            {pages.map( p => {
                return <span className={props.currentPage === p ? s.selectedPage : ''}
                             onClick={ () => { props.onPageChanged(p) }}>{p}</span>
            })}


        </div>
        {
            props.users.map((u: UsersInfoType) => <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.photos.small != null ? u.photos.small : userPhoto} className={s.photoURL}
                                 alt={`avatar`}/>
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => {
                                    props.unfollow(u.id)
                                }}>Followed</button>
                                : <button onClick={() => {
                                    props.follow(u.id)
                                }}>Unfollowed</button>}
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