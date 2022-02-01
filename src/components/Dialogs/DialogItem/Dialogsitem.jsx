import React from "react";
import ss from '../Dialogs.module.css';
import { NavLink } from "react-router-dom";


const DialogsItem = (props) => {

    return (
        <div className={ss.dialogsItem}>
            <NavLink to={`/dialogs/${props.id}`}>{props.name}</NavLink>
        </div>
    )
}

export default DialogsItem