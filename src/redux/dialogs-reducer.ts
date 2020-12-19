import {ActionsTypes, DialogPageType} from "./store";

export type sendMessageAC = ReturnType<typeof sendMessageAC>
export type updateNewMessageBodyAC = ReturnType<typeof updateNewMessageBodyAC>
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
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
    ],
    newMessageBody: ''
}

const dialogsReducer = (state: DialogPageType = initialState, action: ActionsTypes) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY: {
            const stateCopy = {...state}
            stateCopy.newMessageBody = action.body;
            return stateCopy
        }
        case SEND_MESSAGE: {
            const stateCopy = {...state}
            stateCopy.messages = [...state.messages]
            const body = stateCopy.newMessageBody;
            stateCopy.newMessageBody = ''
            stateCopy.messages.push({id: 6, message: body});
            return stateCopy
        }
        default:
            return state
    }
}

export const sendMessageAC = () => {
    return {
        type: SEND_MESSAGE
    } as const
}
export const updateNewMessageBodyAC = (body: string) => {
    return {
        type: UPDATE_NEW_MESSAGE_BODY,
        body: body
    } as const
}

export default dialogsReducer