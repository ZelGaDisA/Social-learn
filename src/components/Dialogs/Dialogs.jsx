import React from "react";
import ss from './Dialogs.module.css';
import { NavLink } from "react-router-dom";


const DialogItem = (props) => {

    let path = "/dialogs/" + props.id;

    return( 
        <div>
            <div className={ss.dialog}>
                <NavLink to={path}>{props.name}</NavLink>
            </div>
        </div >
    )
}

const Message = (props) => {
    return <div className={ss.dialog}>{props.message}</div>
}




const Dialogs = () => {
    return (
        <div className={ss.dialogs}>
            <div className={ss.dialogItems}>
                <DialogItem name="Dimych" id="1" />
                <DialogItem name="Chyvak" id="2" />
                <DialogItem name="Evgen" id="3" />
                <DialogItem name="Sveta" id="4" />
                <DialogItem name="Saha" id="5" />
                <DialogItem name="Valeryiu" id="6" />
            </div>
            <div className={ss.messages}>
                <Message message="Hi Jack" />
                <Message message="Bye Jack" />
                <Message message="Hello Jack" />
                <Message message="Fuck Jack" />
                <Message message="Me Jack" />
            </div>
        </div>
    )
}


// <div className={ss.dialog + '' + ss.active}>
//                     <NavLink to="/dialogs/1">Dimych</NavLink>
//                 </div>

export default Dialogs;