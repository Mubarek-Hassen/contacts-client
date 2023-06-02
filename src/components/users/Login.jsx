import React, { useState } from 'react'

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })
  const { email, password } = formData;
  const inputChangeHandler =(e)=>{
    setFormData((prevState)=>({
      ...prevState, [e.target.name]: e.target.value,
    }))
  }
  return (
    <div>
      <h2>Login</h2>
      <form>
        <label>Email </label>
        <input name='email' type="text" value={email} placeholder='Email' onChange={inputChangeHandler} />
        <br />
        <label>Password </label>
        <input name='password' type="password" value={password} placeholder='Password' onChange={inputChangeHandler} />
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default Login