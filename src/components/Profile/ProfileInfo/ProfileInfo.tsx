import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSJGE73WTV3df9N8sP0dHchvtutUjaVM7qrTQ&usqp=CAU'/>
            </div>
            <div className={s.discriptionBlock}>
                ava + discription
            </div>
        </div>
    )
}

export default ProfileInfo;