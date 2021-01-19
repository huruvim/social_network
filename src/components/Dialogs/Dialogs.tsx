import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css';
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogPageType} from "../../redux/store";
import { Redirect } from 'react-router-dom';


type PropsType = {
    dialogsPage: DialogPageType
    updateNewMessageBody: (body: string) => void
    sendMessage: () => void
    isAuth: boolean
}


const Dialogs = (props: PropsType) => {

    const state = props.dialogsPage

    const dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id}/>);
    const messagesElements = state.messages.map(m => <Message message={m.message} key={m.id} id={m.id}/>)
    const newMessageBody = state.newMessageBody;

    const onSendMessageClick = () => {
        props.sendMessage()
    }

    const onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const body = e.target.value
        props.updateNewMessageBody(body)
    }

    if (!props.isAuth) return <Redirect to={"/login"} />

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div><span><textarea value={newMessageBody}
                                         onChange={onNewMessageChange}
                                         placeholder={`Enter your message`}>
                    </textarea></span></div>
                    <div><span><button className={s.send} onClick={onSendMessageClick}>SEND</button></span></div>
                </div>
            </div>
        </div>
    )
}

                                        export default Dialogs