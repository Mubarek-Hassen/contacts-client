

function SignUp() {
  return (
    <>
    <form>
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
    </>
  )
}

export default SignUp