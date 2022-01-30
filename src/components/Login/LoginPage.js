import React from "react";
import { Field, reduxForm } from "redux-form";
import {Input} from "../common/FormsControl/FormsControls"
import { required } from "../../utils/validators";
import {login} from "../../redux/auth-reduser"

const LoginForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Login"} name={"login"} conponent={Input} validate={[required]} />
            </div>
            <div>
                <Field placeholder={"Password"} name={"password"} conponent={Input} validate={[required]}/>
            </div>
            <div>
                <Field type={"checkbox"} name={"rememberMe"} conponent={Input}/>remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}


const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)


const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe);
    }


    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}


export default connect (null, {login} ) (Login);