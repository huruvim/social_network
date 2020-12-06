import React from 'react';
import Style from './Dialogs.module.css';
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogPageType} from "../../redux/state";


type StateType = {
    dialogsPage: DialogPageType
}


const Dialogs = (props: StateType) => {

    const dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    const messagesElements = props.dialogsPage.messages.map(m => <Message message={m.message} id={m.id} likesCount={m.likesCount}/>)

    const newMessageElement = React.createRef<HTMLTextAreaElement>()

    const addNewMessage = () => {
        const text = newMessageElement.current?.value;
        if (text !== "") {
            alert(text)
        }
    }
    return (
        <div className={Style.dialogs}>

            <div className={Style.dialogsItems}>
                {dialogsElements}
            </div>

            <div className={Style.messages}>
                {messagesElements}
            </div>
            <div>
                <span><textarea ref={newMessageElement}></textarea></span>
                <span><button className={Style.send} onClick={addNewMessage}>SEND</button></span>
            </div>
        </div>
    )
}

export default Dialogs