import React from 'react';
import s from './Dialogs.module.css';
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogPageType} from "../../redux/store";
import {Redirect} from 'react-router-dom';
import {reduxForm} from "redux-form";
import {maxLengthCreator} from "../../utils/validators/validators";
import {AddMessageForm} from "./AddMessageForm";


type PropsType = {
    dialogsPage: DialogPageType
    updateNewMessageBody: (body: string) => void
    sendMessage: (message: string) => void
    isAuth: boolean
}


const Dialogs = (props: PropsType) => {

    const state = props.dialogsPage

    const dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id}/>);
    const messagesElements = state.messages.map(m => <Message message={m.message} key={m.id} id={m.id}/>)
    // const newMessageBody = state.newMessageBody;

    const addNewMessage = (e: any) => {
        // const text = e.newMessageBody
        // alert(text)
        props.sendMessage(e.newMessageBody)

    }

    if (!props.isAuth) return <Redirect to={"/login"}/>

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
            </div>
            <AddMessageFormRedux onSubmit={addNewMessage}/>

        </div>
    )
}
const AddMessageFormRedux = reduxForm({
    form: "dialogAddMessageForm"
})(AddMessageForm)


export default Dialogs

