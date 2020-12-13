import React, {ChangeEvent} from 'react';
import Style from './Dialogs.module.css';
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogPageType, ActionsTypes} from "../../redux/store";
import {updateNewMessageBodyAC, sendMessageAC} from "../../redux/dialogs-reducer";


type PropsType = {
    dialogsPage: DialogPageType
    dispatch: (action: ActionsTypes) => void
    updateNewMessageBodyAC: (body: string) => void
    sendMessageAC: () => void
}


const  Dialogs = (props: PropsType) => {

    const state = props.dialogsPage

    const dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    const messagesElements = props.dialogsPage.messages.map(m => <Message message={m.message} id={m.id} />)
    const newMessageBody = props.dialogsPage.newMessageBody;

    const onSendMessageClick = () => {
        props.sendMessageAC()
        // props.dispatch(sendMessageAC())
    }

    const onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const body = e.target.value
        props.updateNewMessageBodyAC(body)
        // props.dispatch(updateNewMessageBodyAC(body))
    }

    return (
        <div className={Style.dialogs}>

            <div className={Style.dialogsItems}>
                {dialogsElements}
            </div>

            <div className={Style.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div><span><textarea value={newMessageBody}
                                         onChange={onNewMessageChange}
                                         placeholder={`Enter your message`}>
                    </textarea></span></div>
                    <div><span><button className={Style.send} onClick={onSendMessageClick}>SEND</button></span></div>
                </div>
            </div>

        </div>
    )
}

export default Dialogs