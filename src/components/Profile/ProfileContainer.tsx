import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getStatus, getUserProfile, updateStatus} from "../../redux/profile-reducer";
import {AppRootStateType} from "../../redux/redux-store";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from 'redux';

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
    status: string | null
    authorisedUserId: number | null
    isAuth: boolean
}

export type PropsType = RouteComponentProps<PathParamsType> & {
    profile: ProfileType | null
    getUserProfile: (userId: number) => void
    getStatus: (userId: number) => void
    isAuth: boolean
    status: string
    updateStatus: (status: string) => void
    authorisedUserId: number
}

class ProfileContainer extends React.Component<PropsType> {

    componentDidMount() {
        let userId = parseInt(this.props.match.params.userId)
        if (!userId) {
            userId = this.props.authorisedUserId
            if (!userId) {
                this.props.history.push("/login")
            }
        }
        this.props.getUserProfile(userId)
        this.props.getStatus(userId)
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus}/>
        )
    }
}

let mapStateToProps = (state: AppRootStateType): MapStatePropsType => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authorisedUserId: state.auth.id,
        isAuth: state.auth.isAuth
    }
}

export default compose<React.FC>(
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)
