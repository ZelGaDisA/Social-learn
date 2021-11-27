import React from "react";
import ss from './Dialogs.module.css';
import { NavLink } from "react-router-dom";
import DialogItem from "./DialogItem/Dialogsitem";
import Message from "./Message/Message";


const Dialogs = () => {

    let dialogs = [
        { id: 1, name: 'Dimych' },
        { id: 2, name: 'Chyvak' },
        { id: 3, name: 'Evgen' },
        { id: 4, name: 'Sveta' },
        { id: 5, name: 'Saha' },
        { id: 6, name: 'Valeryiu' }
    ]

    let messages = [
        { id: 1, message: 'Hi Jack' },
        { id: 2, message: 'Bye Jack' },
        { id: 3, message: 'Hello Jack' },
        { id: 4, message: 'Fuck Jack' },
        { id: 5, message: 'Me Jack' },
        { id: 6, message: 'your jack' }
    ]

    let dialogElements = dialogs.map(d => <DialogItem name={d.name} id={d.id} />);

    let messagesElements = messages.map(m => <Message message={m.message} />)

    return (
        <div className={ss.dialogs}>
            <div className={ss.dialogItems}>
                { dialogElements }
            </div>
            <div className={ss.messages}>
                { messagesElements }
            </div>
        </div>
    )
}


// <div className={ss.dialog + '' + ss.active}>
//                     <NavLink to="/dialogs/1">Dimych</NavLink>
//                 </div>

export default Dialogs;