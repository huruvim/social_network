import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile} from "../../redux/profile-reducer";
import {AppRootStateType} from "../../redux/redux-store";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {mapStateToPropsForRedirect, withAuthRedirect} from "../../hoc/withAuthRedirect";
import { compose } from 'redux';

// type PropsType = {
//     setUserProfile: (profile: ProfileType) => void,
//     profile: ProfileType | null
// }
export type ProfileType = {
    aboutMe: string,
    contacts: {
        facebook: string
        website: null,
        vk: string,
        twitter: string,
        instagram: string,
        youtube: null,
        github: string,
        mainLink: string
    },
    lookingForAJob: boolean,
    lookingForAJobDescription: string,
    fullName: string,
    userId: number,
    photos: {
        small: string,
        large: string
    }
}

type PathParamsType = {
    userId: string
}


type MapStatePropsType = {
    profile: ProfileType | null
}

export type PropsType = RouteComponentProps<PathParamsType> & {
    profile: ProfileType | null
    getUserProfile: (userId: number) => void
    isAuth: boolean
}

class ProfileContainer extends React.Component<PropsType> {

    componentDidMount() {
        let userId = parseInt(this.props.match.params.userId)
        if (!userId) {
            userId = 2
        }
        this.props.getUserProfile(userId)
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}

let mapStateToProps = (state: AppRootStateType): MapStatePropsType => {
    return {
        profile: state.profilePage.profile,
    }
}

export default compose<React.FC>(
    connect(mapStateToProps, {getUserProfile}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)
