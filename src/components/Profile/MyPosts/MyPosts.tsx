import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {PostType, ProfilePageType} from "../../../redux/state";

type StateType = {
    posts: Array<PostType>
    addPostCallback: () => void
    changeNewTextCallback: (NewMessage: string) => void
    newPostText: string
    // posts: Array<PostType>
    // likesCount: number
}

const MyPosts = (props: StateType) => {

    const postsElements =
        props.posts.map( p => <div> <Post message={p.message} likesCount={p.likesCount}/> </div> );

    const addPost = () => {
        props.addPostCallback();
    }

    const newTextChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.changeNewTextCallback(e.currentTarget.value);
        // console.log(text)

    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea
                        onChange={newTextChangeHandler}
                        value={props.newPostText}
                    />
                </div>
                <div>
                    <button onClick={addPost}>Add Post</button>
                </div>
            </div>
            <div className={s.posts}>
                { postsElements }
             </div>
        </div>
    )
}

export default MyPosts;