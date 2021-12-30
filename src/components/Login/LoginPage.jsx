import React from "react";
import { Field, reduxForm } from "redux-form";

const LoginForm = (props) => {
    return (
        <form>
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
    return <div>
        <h1>Login</h1>
        <LoginReduxForm />
    </div>
}


export default Login;