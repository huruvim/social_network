import React from "react";
import {Field, InjectedFormProps} from "redux-form";
import {Textarea} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";
import s from "./Dialogs.module.css";

const maxLength50 = maxLengthCreator(50)



export const AddMessageForm: React.FC<InjectedFormProps<any>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea}
                       name={'newMessageBody'}
                       placeholder={'Enter your message'}
                       validate={[required, maxLength50]}

                />
            </div>
            <div><span><button className={s.send}>SEND</button></span></div>
        </form>
    )
}
