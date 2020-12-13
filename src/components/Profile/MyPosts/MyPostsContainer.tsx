import React from 'react';
import {addPostAC, changeNewTextAC} from "../../../redux/profile-reducer";
import MyPosts from './MyPosts';
import {Store} from 'redux';

type PropsType = {
    store: Store
}



const MyPostsContainer = (props: PropsType) => {
    const state = props.store.getState()

    const addNewPost = () => {
        props.store.dispatch(addPostAC(state.profilePage.newPostText));
    }

    const updateNewPostText = (text: string) => {
        props.store.dispatch(changeNewTextAC(text))
    }
    return (
        <MyPosts posts={state.profilePage.posts}
                 newPostText={state.profilePage.newPostText}
                 dispatch={props.store.dispatch}
                 updateNewPostText={updateNewPostText}
                 addNewPost={addNewPost}
        />
    )
}

export default MyPostsContainer;