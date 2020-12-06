import React from 'react';
import s from './Post.module.css';

type MessageType = {
    likesCount: number
    message: string
}


const Post = (props: MessageType) => {
    return (
        <div className={s.item}>
            <img src='https://i.pinimg.com/originals/0a/42/7f/0a427f8c57082a1d1f0da6538acabf32.jpg'/>
            {props.message}
            <div>
                <span>like {props.likesCount} </span>

            </div>
        </div>
    )
}

export default Post;