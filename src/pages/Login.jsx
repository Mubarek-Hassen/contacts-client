

function Login() {
  return (
    <>
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
    </>
  )
}

export default Login