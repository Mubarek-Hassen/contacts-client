import React from 'react'

function Login() {
  return (
    <div>
      <h2>Login</h2>
      <form>
        <label htmlFor="email">Email </label>
        <input type="text" placeholder='Email' />
        <br />
        <label htmlFor="password">Password </label>
        <input type="password" placeholder='Password' />
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default Login