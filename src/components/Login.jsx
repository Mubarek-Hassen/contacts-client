import { Form } from "react-router-dom"
import classes from "../style/Form.module.css"

function Login() {
  return (
  <>
    <Form method="post" className={classes.form}>
    <h3>Login</h3>
      <label htmlFor="email">Email</label>
      <br />
      <input type="text" name="email" />
      <br />
      <label htmlFor="password">Password</label>
      <br />
      <input type="password" name="password"/>
      <br />
      <button type="submit">Submit</button>
    </Form>
  </>
  )
}
export default Login