import React from "react";
import ss from './Dialogs.module.css';
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

const Message = (props) => {
    return <div className={ss.dialog}>{props.message}</div>
}




const Dialogs = () => {

    let dialogsData = [
        { id: 1, name: 'Dimych' },
        { id: 2, name: 'Chyvak' },
        { id: 3, name: 'Evgen' },
        { id: 4, name: 'Sveta' },
        { id: 5, name: 'Saha' },
        { id: 6, name: 'Valeryiu' }
    ]

    let messagesData = [
        { id: 1, message: 'Hi Jack' },
        { id: 2, message: 'Bye Jack' },
        { id: 3, message: 'Hello Jack' },
        { id: 4, message: 'Fuck Jack' },
        { id: 5, message: 'Me Jack' },
        { id: 6, message: 'your jack' }
    ]

    return (
        <div className={ss.dialogs}>
            <div className={ss.dialogItems}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
                <DialogItem name={dialogsData[2].name} id={dialogsData[2].id} />
                <DialogItem name={dialogsData[3].name} id={dialogsData[3].id} />
                <DialogItem name={dialogsData[4].name} id={dialogsData[4].id} />
                <DialogItem name={dialogsData[5].name} id={dialogsData[5].id} />
            </div>
            <div className={ss.messages}>
                <Message message={messagesData[0].message} />
                <Message message={messagesData[1].message} />
                <Message message={messagesData[2].message} />
                <Message message={messagesData[3].message} />
                <Message message={messagesData[4].message} />
                <Message message={messagesData[5].message} />
            </div>
        </div>
    )
}


// <div className={ss.dialog + '' + ss.active}>
//                     <NavLink to="/dialogs/1">Dimych</NavLink>
//                 </div>

export default Dialogs;