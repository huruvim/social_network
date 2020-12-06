import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ProfilePageType, PostTextType} from "../../redux/state";

type StateType = {
    state: ProfilePageType
    message: string
    newPostText: string
    addPostCallback: (postMessage: string) => void
    changeNewTextCallback: (NewMessage: string) => void
    likesCount: number

}


const Profile = (props: StateType) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts state={props.state}
                     newPostText={props.newPostText}
                     likesCount={props.likesCount}
                     posts={props.state.posts}
                     addPostCallback={props.addPostCallback}
                     changeNewTextCallback={props.changeNewTextCallback}
                     message={props.message}

            />
        </div>
    )
}

export default Profile;