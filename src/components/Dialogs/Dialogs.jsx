import React from "react";
import ss from './Dialogs.module.css';
import DialogItem from "./DialogItem/Dialogsitem";
import Message from "./Message/Message";



const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogElements = state.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id} />);
    let messagesElements = state.messages.map(m => <Message message={m.message} key={m.id} />)
    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () => {
        props.sendMessage();
    }

    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBody(body);
    }

    return (
        <div className={ss.dialogs}>
            <div className={ss.dialogItems}>
                {dialogElements}
            </div>
            <div className={ss.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div><textarea onChange={onNewMessageChange}
                    value={newMessageBody}
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