import React from "react";
import s from './Message.module.css';
import {MessageType} from "../../../redux/state";


export const Message = (props: MessageType) => {
    return (
        <div className={s.message}>
            <div >
            {props.message}
         </div>

        </div>
    )
}