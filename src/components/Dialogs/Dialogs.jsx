import React from "react";
import ss from './Dialogs.module.css';
import DialogItem from "./DialogItem/Dialogsitem";
import Message from "./Message/Message";
import { Field, reduxForm } from "redux-form";



const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogElements = state.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id} />);
    let messagesElements = state.messages.map(m => <Message message={m.message} key={m.id} />)
    let newMessageBody = state.newMessageBody;


    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody);
    }

    // if (!props.isAuth) return <Redirect to={"/login"} />;

    return (
        <div className={ss.dialogs}>
            <div className={ss.dialogItems}>
                {dialogElements}
            </div>
            <div className={ss.messages}>
                <div>{messagesElements}</div>
            </div>
            <AddMessageFormRedux onSubmit={addNewMessage}/>
        </div>
    )
}
const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field conponent="textarea" name="newMessageBody" placeholder="Enter your message" />
            </div>
            <div><button>Send Message</button></div>
        </form>
    )
}


const AddMessageFormRedux = reduxForm ({form: "dialogAddMessageForm"}) (AddMessageForm);
{/* <textarea onChange={onNewMessageChange}
                value={newMessageBody}
                placeholder='Enter your message'></textarea> */}

export default Dialogs;