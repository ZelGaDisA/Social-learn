import React from "react";
import ss from './Dialogs.module.css';
import DialogItem from "./DialogItem/Dialogsitem";
import Message from "./Message/Message";
import AddMessageForm from "./AddMessageForm";




const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogElements = state.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id} />);
    let messagesElements = state.messages.map(m => <Message message={m.message} key={m.id} />)
    let newMessageBody = state.newMessageBody;


    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody);
    }


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