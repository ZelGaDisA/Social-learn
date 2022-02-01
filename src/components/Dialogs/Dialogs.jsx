import React from "react";
import ss from './Dialogs.module.css';
import DialogsItem from "./DialogItem/Dialogsitem";
import MessagesItem from "./Message/Message";
import AddMessageForm from "./AddMessageForm";
import { Navigate } from "react-router"




const Dialogs = (props) => {

    const state = props.dialogsPage

    const dialogElements = state.dialogs.map(d => <DialogsItem id={d.id} key={d.id} name={d.name} />)
    const messagesElements = state.messages.map(m => <MessagesItem id={m.id} key={m.id} message={m.message} />)

    const addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody)
    }

    if(!props.isAuth) return <Navigate to="/login" />

    return (
        <div className={ss.dialogs}>
            <div className={ss.dialogItems}>
                {dialogElements}
            </div>
            <div className={ss.messages}>
                <div>{messagesElements}</div>
            </div>
            <AddMessageForm onSubmit={addNewMessage}/>
        </div>
    )
}


export default Dialogs;