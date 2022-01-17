import React from "react"
import s from "./FormsControls.module.css"

const FormControl = ({ input, meta, child, ...props }) => {
    const hasError = meta.touched && meta.error;

    return (
        <div className={s.formKontrol + "" + (hasError ? s.error : "")}>
            <div>
                {props.child}
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}


export const Textarea = (props) => {
    return <FormControl {...props}><textarea {...input} {...props} /></FormControl>
}

export const Input = ({ input, meta, ...props }) => {
    return (<FormControl {...props}><input {...input} {...props} /></FormControl>)
}