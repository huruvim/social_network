import React from 'react';
import {addPostAC, changeNewTextAC} from "../../../redux/profile-reducer";
import MyPosts from './MyPosts';
import {connect} from "react-redux";
import {AppRootStateType} from "../../../redux/redux-store";
import {Dispatch} from "redux";
import {PostType} from "../../../redux/store";

type MapStateToPropsType = {
    posts: Array<PostType>
    newPostText: string
}

type MapDispatchToPropsType = {
    updateNewPostText: (text: string) => void
    addNewPost: () => void
}



const mapStateToProps = (state: AppRootStateType): MapStateToPropsType => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        updateNewPostText: (text: string) => {
            dispatch(changeNewTextAC(text))
        },
        addNewPost: () => {
            dispatch(addPostAC())
        }
    }
}


const MyPostsContainer = connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppRootStateType>(mapStateToProps, mapDispatchToProps)(MyPosts);

// type PropsFromRedux = ConnectedProps<typeof MyPostsContainer>

export default MyPostsContainer;