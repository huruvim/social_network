import React from 'react';
import s from './Users.module.css';
import axios, {AxiosResponse} from 'axios'
import userPhoto from '../../assets/images/alternative-img.png';

type PropsType = {
    users: Array<any>
    pageSize: number
    TotalUsersCount: number
    currentPage: number
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    setUsers: (users: any) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalCount: number) => void
}
export type UsersType = {
    items: Array<UsersInfoType>
    totalCount: number
}

export type UsersInfoType = {
    name: string
    id: number
    uniqueUrlName: null
    photos: { small: any, large: any }
    status: null
    followed: boolean
}

class Users extends React.Component<PropsType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then((response: AxiosResponse<UsersType>) => {
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }
    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then((response: AxiosResponse<UsersType>) => {
                this.props.setUsers(response.data.items)
            })

    }
    render() {

        const pagesCount = Math.ceil(this.props.TotalUsersCount/this.props.pageSize)

        let pages = []

        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }

        return (
            <div>
                <div>
                    {pages.map( p => {
                        return <span className={this.props.currentPage === p ? s.selectedPage : ''}
                        onClick={ () => { this.onPageChanged(p) }}>{p}</span>
                    })}


                </div>
                {
                    this.props.users.map((u: UsersInfoType) => <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.photos.small != null ? u.photos.small : userPhoto} className={s.photoURL}
                                 alt={`avatar`}/>
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => {
                                    this.props.unfollow(u.id)
                                }}>Followed</button>
                                : <button onClick={() => {
                                    this.props.follow(u.id)
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
        )
    }
}

export default Users;