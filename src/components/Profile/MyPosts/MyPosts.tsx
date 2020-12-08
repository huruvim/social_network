import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {ActionsTypes, addPostAC, PostType, newTextChangeHandlerAC} from "../../../redux/state";

type StateType = {
    posts: Array<PostType>
    newPostText: string
    dispatch: (action: ActionsTypes) => void
}



const MyPosts = (props: StateType) => {

    const postsElements =
        props.posts.map( p => <div> <Post message={p.message} likesCount={p.likesCount}/> </div> );

    const addPost = () => {
        // props.dispatch({type: 'ADD-POST', newPostText: props.newPostText});
        props.dispatch(addPostAC(props.newPostText));
    }

    const newTextChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const text = (e.currentTarget.value);
        // props.dispatch({type: 'CHANGE-NEW-TEXT', newText: text})
        props.dispatch(newTextChangeHandlerAC(text))
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