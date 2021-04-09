import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

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
        <>
            <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
            <MyPostsContainer />
        </>
    )
}

export default Profile;