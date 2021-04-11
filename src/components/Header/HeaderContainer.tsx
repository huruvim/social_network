import React from 'react';
import Header from './Header';
import {connect} from "react-redux";
import {logout} from "../../redux/auth-reducer";
import {AppRootStateType} from "../../redux/redux-store";

export type AuthDataType = {
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
    // setAuthUserData: (id: number, email: string, login: string, isAuth: boolean) => void
    isAuth: boolean
    login: string | null
    logout: () => void
    // getAuthUserData: () => void
}

class HeaderContainer extends React.Component<PropsType> {



    render() {
        return (
            <Header {...this.props}/>
        )
    }
}

const mapStateToProps = (state: AppRootStateType) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
        // logoutL
    }
}

export default connect(mapStateToProps, {logout})(HeaderContainer);