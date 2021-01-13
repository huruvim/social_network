import React from 'react';
import Profile from "./Profile";
import axios, {AxiosResponse} from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profile-reducer";
import {AppRootStateType} from "../../redux/redux-store";
import {withRouter, RouteComponentProps} from "react-router-dom";

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
type MapDispatchPropsType = {
    setUserProfile: (profile: ProfileType) => void
}
// type ownPropsType = MapStatePropsType | MapDispatchPropsType
type PropsType = RouteComponentProps<PathParamsType> & {
    setUserProfile: (profile: ProfileType) => void
    profile: ProfileType | null
}




class ProfileContainer extends React.Component<PropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = '2'
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
            .then((response: AxiosResponse<ProfileType>) => {
                this.props.setUserProfile(response.data)

            })
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}

let mapStateToProps = (state: AppRootStateType):MapStatePropsType => {
    return {
        profile: state.profilePage.profile
    }
}

const WishUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {setUserProfile})(WishUrlDataContainerComponent);