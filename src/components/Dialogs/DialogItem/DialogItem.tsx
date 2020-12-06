import {NavLink} from "react-router-dom";
import React from "react";
import Style from './DialogItem.module.css'

type DialogType = {
    name: string
    id: number
}

export const DialogItem = (props: DialogType) => {
    return (
        <div className={`${Style.dialog} ${Style.active}`}>
            <NavLink to={`/dialogs/1' ${props.id}`}>{props.name}</NavLink>
        </div>
    )
}