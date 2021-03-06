import React from "react"
import { reduxForm } from "redux-form"
import { required } from "../../utils/validators"
import { createField, Input } from "../common/FormsControl/FormsControls"
import s from '../common/FormsControl/FormControls.module.css'

const LoginForm = ({ handleSubmit, error }) => {
  return (
    <form onSubmit={handleSubmit} >
      {createField("Email", "email", [required], Input)}
      {createField("Password", "password", [required], Input, { type: "password" })}
      {createField(null, "rememberMe", [], Input, { type: "checkbox" }, "remember me")}
      {
        error && <div className={s.formSummaryError}>
          {error}
        </div>
      }
      <div>
        <button>Login</button>
      </div>
    </form>
  )
}

export default reduxForm({ form: 'login' })(LoginForm)