import React from "react";
import { Field, reduxForm } from "redux-form";

const LoginForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Login"} name={"login"} conponent={"input"} />
            </div>
            <div>
                <Field placeholder={"Password"} name={"password"} conponent={"input"}/>
            </div>
            <div>
                <Field type={"checkbox"} name={"rememberMe"} conponent={"input"}/>remember me
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
        console.log(formData)
    }


    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}


export default Login;