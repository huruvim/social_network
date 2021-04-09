import React from 'react';
import {sendMessageAC} from "../../redux/dialogs-reducer";
import {AppRootStateType} from "../../redux/redux-store";
import {Dispatch, compose} from "redux";
import Dialogs from "./Dialogs";
import {connect} from 'react-redux';
import {DialogPageType} from "../../redux/store";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import ProfileContainer from "../Profile/ProfileContainer";

type MapStateToPropsType = {
    dialogsPage: DialogPageType,
    isAuth: boolean
}

type MapDispatchToPropsType = {
    sendMessage: (message: string) => void
}

const mapStateToProps = (state: AppRootStateType):MapStateToPropsType => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth
    }
}
const mapDispatchToProps = (dispatch: Dispatch):MapDispatchToPropsType => {
    return {
        sendMessage: (message: string) => {
            dispatch(sendMessageAC(message))
        },
    }
}

export default compose<React.ComponentType>(
    connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppRootStateType>(mapStateToProps, mapDispatchToProps),
    withAuthRedirect)(Dialogs)