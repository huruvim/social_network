import React from 'react';
import {sendMessageAC, updateNewMessageBodyAC} from "../../redux/dialogs-reducer";
import {AppRootStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import Dialogs from "./Dialogs";
import { connect } from 'react-redux';

const mapStateToProps = (state: AppRootStateType) => {
    return {
        dialogsPage: state.dialogsPage
    }
}
const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        updateNewMessageBodyAC: (body: string) => {
            dispatch(updateNewMessageBodyAC(body))
        },
        sendMessageAC: () => {
            dispatch(sendMessageAC())
        },
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer