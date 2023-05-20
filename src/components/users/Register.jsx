import React from 'react'

function Register() {
  return (
    <div>
      <h2>Register</h2>
      <form>
        <label htmlFor="name">Name </label>
        <input type="text" placeholder='Name'/> <br />
        <label htmlFor="name">Email </label>
        <input type="text" placeholder='Email'/> <br />
        <label htmlFor="name">Password </label>
        <input type="password" placeholder='Password'/> <br />
        <button type="submit">Register</button>
      </form>
    </div>
  )
}

export default Register