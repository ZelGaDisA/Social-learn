import { Field, reduxForm } from "redux-form";
import { Textarea } from "../common/FormsControl/FormsControls";
import {required, maxLenghtCreator} from "../../utils/validators"

const maxLenght50 = maxLenghtCreator(50)

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field conponent={Textarea}
                validate={[required, maxLenght50]}
                name="newMessageBody" placeholder="Enter your message" />
            </div>
            <div><button>Send Message</button></div>
        </form>
    )
}

export default reduxForm ({form: "dialogAddMessageForm"}) (AddMessageForm);