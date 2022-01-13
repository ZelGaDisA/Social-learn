import { Field, reduxForm } from "redux-form";

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field conponent="textarea" name="newMessageBody" placeholder="Enter your message" />
            </div>
            <div><button>Send Message</button></div>
        </form>
    )
}

export default reduxForm ({form: "dialogAddMessageForm"}) (AddMessageForm);