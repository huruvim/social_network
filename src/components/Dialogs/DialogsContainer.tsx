import React, {ChangeEvent} from 'react';
import Style from './Dialogs.module.css';
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogPageType, ActionsTypes, StoreType} from "../../redux/store";
import {updateNewMessageBodyAC, sendMessageAC} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {Store} from "redux";


type PropsType = {
    store: Store
}


const DialogsContainer = (props: PropsType) => {
    const state = props.store.getState().dialogsPage

    const onSendMessageClick = () => {
        props.store.dispatch(sendMessageAC())
    }

    const onNewMessageChange = (body: string) => {
        props.store.dispatch(updateNewMessageBodyAC(body))
    }

    return (
        <Dialogs dispatch={props.store.dispatch}
                 dialogsPage={state}
                 updateNewMessageBodyAC={onNewMessageChange}
                 sendMessageAC={onSendMessageClick}/>
    )
}

export default DialogsContainer