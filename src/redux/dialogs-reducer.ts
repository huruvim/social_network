import {ActionsTypes, DialogPageType} from "./store";

export type sendMessageAC = ReturnType<typeof sendMessageAC>
// export type updateNewMessageBodyAC = ReturnType<typeof updateNewMessageBodyAC>
// const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

const initialState: DialogPageType = {
    dialogs: [
        {id: 1, name: "Nikolai"},
        {id: 2, name: "Marina"},
        {id: 3, name: "Ludmila"},
        {id: 4, name: "Andrey"},
        {id: 5, name: "Anastasia"}
    ],
    messages: [
        {id: 1, message: "Hey Nikolai) how is it going ?"},
        {id: 2, message: "as always. you ?"},
        {id: 3, message: "freaking awesome"},
        {id: 4, message: "yo bro"},
        {id: 5, message: "yo yo yo"}
    ]
}

const dialogsReducer = (state= initialState, action: ActionsTypes):DialogPageType => {
    switch (action.type) {
        case SEND_MESSAGE:
            const body = action.message;
            return {
                ...state,
                messages: [...state.messages, {id: 6, message: body}]
            }
        default:
            return state
    }
}
//ac
export const sendMessageAC = (message: string) => ({type: SEND_MESSAGE, message} as const)

export default dialogsReducer