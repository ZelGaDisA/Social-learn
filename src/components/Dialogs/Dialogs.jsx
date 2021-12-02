import React from "react";
import ss from './Dialogs.module.css';
import { NavLink } from "react-router-dom";
import DialogItem from "./DialogItem/Dialogsitem";
import Message from "./Message/Message";
import { sendMessageCreator, updateNewMessageBodyCreator } from "../../redux/dialogs-reduser";


const Dialogs = (props) => {

    let state = props.store.getState().dialogsPage;

    let dialogElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id} />);
    let messagesElements = state.messages.map(m => <Message message={m.message} />)
    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator());
    }

    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.store.dispatch(updateNewMessageBodyCreator(body));
    }

    return (
        <div className={ss.dialogs}>
            <div className={ss.dialogItems}>
                {dialogElements}
            </div>
            <div className={ss.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div><textarea value={newMessageBody}
                    onChange={onNewMessageChange}
                    placeholder='Enter your message'></textarea></div>
                    <div><button onClick={onSendMessageClick}>Send Message</button></div>
                </div>
            </div>
        </div>
    )
}


// <div className={ss.dialog + '' + ss.active}>
//                     <NavLink to="/dialogs/1">Dimych</NavLink>
//                 </div>

export default Dialogs;