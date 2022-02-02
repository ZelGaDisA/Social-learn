import React from "react";
import ss from '../Dialogs.module.css'

const Message = (props) => {
    return (
        <div className={ss.dialogsMessages} key={props.id}>
            {props.message}
        </div>
    )
}

export default Message