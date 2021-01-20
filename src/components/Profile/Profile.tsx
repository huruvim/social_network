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
    status: string
    updateStatus: (status: string) => void

}

const Profile = (props: PropsType) => {



    return (
        <div>
            <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
            <MyPostsContainer/>
        </div>
    )
}

export default Profile;