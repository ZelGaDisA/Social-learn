import React from "react";
import ss from './Dialogs.module.css';


const Dialogs = () => {
    return (
        <div className={ss.dialogs}>
            <div className={ss.dialogItems}>
                <div className={ss.dialog + '' + ss.active}>
                    Dimych
                </div>
                <div className={ss.dialog}>
                    Evgen
                </div>
                <div className={ss.dialog}>
                    Chyvak
                </div>
                <div className={ss.dialog}>
                    Sveta
                </div>
                <div className={ss.dialog}>
                    Saha
                </div>
                <div className={ss.dialog}>
                    Valeryiu
                </div>
            </div>
            <div className={ss.messages}>
                <div className={ss.message}>Hi Jack</div>
                <div className={ss.message}>Hi Jack</div>
                <div className={ss.message}>Hi Jack</div>
                <div className={ss.message}>Hi Jack</div>
            </div>
        </div>
    )
}

export default Dialogs;