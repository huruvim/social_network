import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {PostType} from "../../../redux/store";

type PropsType = {
    posts: Array<PostType>
    newPostText: string
    updateNewPostText: (text: string) => void
    addNewPost: () => void
}



const MyPosts = (props: PropsType) => {

    const postsElements =
        props.posts.map( p => <div> <Post message={p.message} likesCount={p.likesCount}/> </div> );

    const addPost = () => {
        props.addNewPost()
    }
    // const onKeyPress = (e: React.KeyboardEvent) => {
    //     if (e.key === 'Enter') {
    //     props.addNewPost()
    // }
// }
    const newTextChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const text = (e.currentTarget.value);
        props.updateNewPostText(text)
    }

    return (

        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea
                        placeholder={"Enter your post"}
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