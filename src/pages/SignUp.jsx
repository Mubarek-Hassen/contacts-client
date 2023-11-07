import classes from "../style/Form.module.css"

function SignUp() {
  return (
    <div>
    <form className={classes.form}>
      <h3>Sign Up</h3>
      <label htmlFor="name">Name</label>
      <br />
      <input type="text" name="name" />
      <br />
      <label htmlFor="email">Email</label>
      <br />
      <input type="text" name="email" />
      <br />
      <label htmlFor="password">Password</label>
      <br />
      <input type="password" name="password" />
    </form>
    </div>
  )
}

export default SignUp