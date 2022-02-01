import React from "react";

const Message = (props) => {
    return (
        <div className='dialogsMessages' key={props.id}>
            {props.message}
        </div>
    )
}

export default Message