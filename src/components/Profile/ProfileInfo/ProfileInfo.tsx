import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
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

const ProfileInfo: React.FC<PropsType> = ({
                                              profile,
                                              status, updateStatus
}) => {

    if (!profile) return <Preloader/>;

    return (
        <div>
            <div className={s.discriptionBlock}>
                <img src={profile.photos.large} alt={profile.photos.large}/>
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
            </div>
        </div>
    )
}

export default ProfileInfo;