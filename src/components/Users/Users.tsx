import React from 'react';
import s from './Users.module.css';
import { UserType } from '../../redux/store';

type PropsType = {
    users: Array<UserType>
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    setUsers: (users: any) => void
}

const Users = (props: PropsType) => {

    if (props.users.length === 0) {
        props.setUsers([
                {
                    id: 1,
                    photoURL: 'https://hips.hearstapps.com/ghk.h-cdn.co/assets/18/09/1519682180-taylor-swift-girl-scouts.jpg?crop=1.0xw:1xh;center,top&resize=480:*',
                    followed: true,
                    fullName: 'Valentyn',
                    status: 'React dev, now busy with my projects',
                    location: {city: 'Kiev', country: 'Ukraine'}
                },
                {
                    id: 2,
                    photoURL: 'https://i1.wp.com/www.thesun.co.uk/wp-content/uploads/2020/03/NINTCHDBPICT000432826903.jpg?crop=22px%2C0px%2C928px%2C928px&resize=960%2C960&ssl=1',
                    followed: true,
                    fullName: 'Nikolai',
                    status: 'Angular dev, now busy with my project',
                    location: {city: 'Kiev', country: 'Ukraine'}
                },
                {
                    id: 3,
                    photoURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFJFqw1kZHKt03PQrjhdQEqaQ6xXzZumTmLQ&usqp=CAU',
                    followed: false,
                    fullName: 'Anastasia',
                    status: 'Java dev, now busy with my projects',
                    location: {city: 'New York', country: 'USA'}
                },
                {
                    id: 4,
                    photoURL: 'https://cdn.shopify.com/s/files/1/2090/7523/articles/8_famous_men_who_love_cigars_resize.egm_1024x1024.jpg?v=1566574567',
                    followed: false,
                    fullName: 'Johan',
                    status: 'Manager, fell free to contact me',
                    location: {city: 'Rio de Janeiro', country: 'Brazil'}
                }
            ]
        )
    }

    return (
        <div>
            {
                props.users.map( u => <div key={u.id}>
                    <span>
                        <div>
                            <img className={s.imgUsers} src={u.photoURL} alt={`avatar`}/>
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={ () => { props.unfollow(u.id) }}>Followed</button>
                                : <button onClick={ () => { props.follow(u.id) }}>Unfollowed</button>}
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.fullName}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{u.location.country}</div>
                            <div>{u.location.city}</div>
                        </span>
                    </span>
                </div>)
            }
        </div>
    )
}

export default Users;