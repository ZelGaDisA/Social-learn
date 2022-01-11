import React from "react"
import s from "./FormsControls.module.css"


export const Textarea = ({input, meta, ...props}) => {
    return (
        <div className={s.formKontrol + "" + s.error}>
            <textarea {...input} {...props}/>
            <span>{"some error"}</span>
        </div>
    )
}