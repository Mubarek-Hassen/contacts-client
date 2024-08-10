import { Form } from "react-router-dom"


function Login() {
  return (
  <>
    <Form method="post">
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