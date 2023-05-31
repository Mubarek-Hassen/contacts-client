import React, { useState } from 'react'

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  })
  const { name, email, password } = formData;
  return (
    <div>
      <h2>Register</h2>
      <form>
        <label>Name </label>
        <input name='name' value={name} type="text" placeholder='Name'/> <br />
        <label>Email </label>
        <input name='email' value={email} type="text" placeholder='Email'/> <br />
        <label>Password </label>
        <input name='password' value={password} type="password" placeholder='Password'/> <br />
        <button type="submit">Register</button>
      </form>
    </div>
  )
}

export default Register