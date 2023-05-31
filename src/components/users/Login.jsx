import React from 'react'

function Login() {
  return (
    <div>
      <h2>Login</h2>
      <form>
        <label>Email </label>
        <input name='email' type="text" placeholder='Email' />
        <br />
        <label>Password </label>
        <input name='password' type="password" placeholder='Password' />
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default Login