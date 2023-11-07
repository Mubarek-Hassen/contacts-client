import classes from "../style/Form.module.css"

function Login() {
  return (
  <div className={classes.form}>
    <form>
    <h3>Login</h3>
      <label htmlFor="email">Email</label>
      <br />
      <input type="text" name="email"/>
      <br />
      <label htmlFor="password">Password</label>
      <br />
      <input type="password" name="password"/>
    </form>
  </div>
  )
}

export default Login