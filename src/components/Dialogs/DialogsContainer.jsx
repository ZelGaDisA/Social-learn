import React from "react";
import DialogItem from "./DialogItem/Dialogsitem";
import Message from "./Message/Message";
import { sendMessageCreator, updateNewMessageBodyCreator } from "../../redux/dialogs-reduser";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";


const DialogsContainer = () => {



    return <StoreContext.Consumer> 
        { (store) => {
            let onSendMessageClick = () => {
                store.dispatch(sendMessageCreator());
            }

            let onNewMessageChange = (body) => {
                store.dispatch(updateNewMessageBodyCreator(body));
            }
            return <Dialogs 
            updateNewMessageBody={onNewMessageChange}
            sendMessage={onSendMessageClick}
            dialogsPage={store.getState().dialogsPage} />
        }
    }
    </StoreContext.Consumer>
}


// <div className={ss.dialog + '' + ss.active}>
//                     <NavLink to="/dialogs/1">Dimych</NavLink>
//                 </div>

export default DialogsContainer;