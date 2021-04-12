import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

type PropsType = {
    profile: {
        photos: {
            large: string
        }
    } | null
    status: string
    updateStatus: (status: string) => void
}

const ProfileInfo = (props: PropsType) => {
    // const bgPic = 'https://encrypted-tbn0.gstatic.com/images?' +
    //     'q=tbn%3AANd9GcSJGE73WTV3df9N8sP0dHchvtutUjaVM7qrTQ&usqp=CAU'

    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div>
            <div>
                {/*<img src={bgPic}/>*/}
            </div>
            <div className={s.discriptionBlock}>
                <img src={props.profile.photos.large}/>
                <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
            </div>
        </div>
    )
}

export default ProfileInfo;