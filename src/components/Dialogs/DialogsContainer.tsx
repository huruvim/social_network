import React from 'react';
import {sendMessageAC, updateNewMessageBodyAC} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import StoreContext from '../../StoreContext';


// type PropsType = {
//     store: Store
// }


const DialogsContainer = () => {


    return (
        <StoreContext.Consumer>
            { (store) => {
                const state = store.getState().dialogsPage

                const onSendMessageClick = () => {
                    store.dispatch(sendMessageAC())
                }

                const onNewMessageChange = (body: string) => {
                    store.dispatch(updateNewMessageBodyAC(body))
                }
                return <Dialogs dispatch={store.dispatch}
                                dialogsPage={state}
                                updateNewMessageBodyAC={onNewMessageChange}
                                sendMessageAC={onSendMessageClick}/>
            }
        }
        </StoreContext.Consumer>
    )
}

export default DialogsContainer