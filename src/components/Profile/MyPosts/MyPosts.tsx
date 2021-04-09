import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {PostType} from "../../../redux/store";
import {Field, InjectedFormProps, reduxForm} from "redux-form";

type PropsType = {
    posts: Array<PostType>
    newPostText: string
    // updateNewPostText: (text: string) => void
    addNewPost: (post: string) => void
}



const MyPosts = (props: PropsType) => {

    const postsElements =
        props.posts.map( p => <div> <Post message={p.message} likesCount={p.likesCount}/> </div> );

    const addNewPost = (e: any) => {
        debugger
        props.addNewPost(e.newPostBody)
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <AddPostFormRedux onSubmit={addNewPost}/>
            <div className={s.posts}>
                { postsElements }
             </div>
        </div>
    )
}

const AddPostForm: React.FC<InjectedFormProps<any>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={'textarea'}
                       name={'newPostBody'}
                       placeholder={'Enter your post'}/>
            </div>
            <div><span><button className={s.send}>SEND</button></span></div>
        </form>
    )
}

const AddPostFormRedux = reduxForm({
    form: "profileAddPostForm"
})(AddPostForm)

export default MyPosts;