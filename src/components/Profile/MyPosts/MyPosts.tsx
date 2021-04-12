import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {PostType} from "../../../redux/store";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";

type PropsType = {
    posts: Array<PostType>
    newPostText: string
    // updateNewPostText: (text: string) => void
    addNewPost: (post: string) => void
}


const MyPosts = React.memo((props: PropsType) => {
    console.log("rerender!");
    console.log(props);
    const postsElements =
        props.posts.map(p => <div key={p.id}><Post message={p.message} likesCount={p.likesCount}/></div>);

    const addNewPost = (e: any) => {
        props.addNewPost(e.newPostBody)
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <AddPostFormRedux onSubmit={addNewPost}/>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
},);

const maxLength10 = maxLengthCreator(10)

const AddPostForm: React.FC<InjectedFormProps<any>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea}
                       name={'newPostBody'}
                       placeholder='Enter your post'
                       validate={[required, maxLength10]}

                />
            </div>
            <div><span><button className={s.send}>SEND</button></span></div>
        </form>
    )
}

const AddPostFormRedux = reduxForm({
    form: "profileAddPostForm"
})(AddPostForm)

export default MyPosts;