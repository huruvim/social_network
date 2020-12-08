import React, {ChangeEvent} from 'react';
import Style from './Dialogs.module.css';
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogPageType, updateNewMessageBodyAC, sendMessageAC, ActionsTypes} from "../../redux/state";


type StateType = {
    dialogsPage: DialogPageType
    dispatch: (action: ActionsTypes) => void
    // store: DialogPageType
}


const Dialogs = (props: StateType) => {

    const dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    const messagesElements = props.dialogsPage.messages.map(m => <Message message={m.message} id={m.id} />)
    const newMessageBody = props.dialogsPage.newMessageBody;

    // const newMessageElement = React.createRef<HTMLTextAreaElement>()

    const onSendMessageClick = () => {
        props.dispatch(sendMessageAC())
    }

    const onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const body = e.target.value
        props.dispatch(updateNewMessageBodyAC(body))
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