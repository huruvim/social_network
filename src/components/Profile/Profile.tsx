import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ProfilePageType, StoreType} from "../../redux/state";

type StateType = {
    profilePage: ProfilePageType
    addPostCallback: () => void
    changeNewTextCallback: (NewMessage: string) => void
    // newPostText: string
    // message: string
    // store: StoreType
    // likesCount: number

}


const Profile = (props: StateType) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts
                posts={props.profilePage.posts}
                newPostText={props.profilePage.newPostText}
                addPostCallback={props.addPostCallback}
                changeNewTextCallback={props.changeNewTextCallback}
                // store={}
                // likesCount={props.likesCount}
                // posts={props.state.posts}
            />
        </div>
    )
}

export default Profile;