import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {Store} from "redux";

type StateType = {
    store: Store
    // dispatch: (action: ActionsTypes) => void
}


const Profile = (props: StateType) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer
                store={props.store}
            />
        </div>
    )
}

export default Profile;