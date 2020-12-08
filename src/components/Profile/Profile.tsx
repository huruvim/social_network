import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ActionsTypes, ProfilePageType} from "../../redux/state";

type StateType = {
    profilePage: ProfilePageType
    dispatch: (action: ActionsTypes) => void
}


const Profile = (props: StateType) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts
                posts={props.profilePage.posts}
                newPostText={props.profilePage.newPostText}
                dispatch={props.dispatch}
                // addPostCallback={props.addPostCallback}
                // changeNewTextCallback={props.changeNewTextCallback}
                // store={}
                // likesCount={props.likesCount}
                // posts={props.state.posts}
            />
        </div>
    )
}

export default Profile;