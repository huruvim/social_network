import React from 'react';
import axios, {AxiosResponse} from "axios";
import Header from './Header';
import {connect} from "react-redux";
import {setAuthUserData} from "../../redux/auth-reducer";
import {AppRootStateType} from "../../redux/redux-store";

type AuthDataType = {
    data: {
        email: string
        id: number
        login: string
    }
    fieldsErrors: [],
    messages: [],
    resultCode: number
}
type PropsType = {
    setAuthUserData: (id: number, email: string, login: string) => void
    isAuth: boolean
    login: string | null
}

class HeaderContainer extends React.Component<PropsType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
            .then((response: AxiosResponse<AuthDataType>) => {
                if (response.data.resultCode === 0) {
                    const {id, login, email} = response.data.data
                    this.props.setAuthUserData(id, email, login)
                }
            })
    }

    render() {
        return (
            <Header {...this.props}/>
        )
    }
}

const mapStateToProps = (state: AppRootStateType) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}

export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer);