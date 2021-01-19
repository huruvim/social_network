import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {Redirect} from "react-router-dom";

type PropsType = {
    profile: {
        photos: {
            large: string
        }
    } | null
    isAuth: boolean
}

const Profile = (props: PropsType) => {



    return (
        <div>
            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer/>
        </div>
    )
}

export default Profile;