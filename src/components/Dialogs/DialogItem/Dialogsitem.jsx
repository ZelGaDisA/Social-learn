import React from "react";
import ss from '../Dialogs.module.css';
import { NavLink } from "react-router-dom";


const DialogItem = (props) => {

    let path = "/dialogs/" + props.id;

    return (
        <div>
            <div className={ss.dialog}>
                <NavLink to={path}>{props.name}</NavLink>
            </div>
        </div >
    )
}



export default DialogItem;