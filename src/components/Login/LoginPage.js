import React from "react";
import { connect } from "react-redux";
import LoginReduxForm from "./LoginForm";
import {login} from "../../redux/auth-reduser"
import { Navigate } from "react-router";

const Login = (props) => {

  const onSubmit = (formData) => {
    props.login(formData.email, formData.password, formData.rememberMe, formData.captcha);
  }

  if (props.isAuth) {
    return <Navigate to="/profile" />
  }

	return (
		<div>
			<h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
		</div>
	)
}

const mapStateToProps = state => ({
  captchaUrl: state.auth.captchaUrl,
  isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login})(Login)
