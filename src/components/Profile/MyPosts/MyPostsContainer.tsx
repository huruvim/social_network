import React from 'react';
import {addPostAC, changeNewTextAC} from "../../../redux/profile-reducer";
import MyPosts from './MyPosts';
import {connect} from "react-redux";
import {AppRootStateType} from "../../../redux/redux-store";
import {Dispatch, Store} from "redux";
import {PostType} from "../../../redux/store";

type MapStatePropsType = {
    posts: Array<PostType>
    newPostText: string
}

type MapDispatchPropsType = {
    updateNewPostText: (text: string) => void
    // sendMessageAC: (newPostText: string) => void
    addNewPost: (k: string) => void
}

// type StateType = Store


const mapStateToProps = (state: AppRootStateType): MapStatePropsType => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        updateNewPostText: (text: string) => {
            dispatch(changeNewTextAC(text))
        },
        // sendMessageAC: (newPostText: string) => {
        //     dispatch(addPostAC(newPostText));
        // },
        addNewPost: (k: string) => {
            dispatch(addPostAC(k))
        }
    }
}


// @ts-ignore
const MyPostsContainer = connect<MapStatePropsType, MapDispatchPropsType, {}, AppRootStateType>(mapStateToProps, mapDispatchToProps)(MyPosts);

// type PropsFromRedux = ConnectedProps<typeof MyPostsContainer>

export default MyPostsContainer;