import React, { useState } from 'react'

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  })
  const { name, email, password } = formData;
  const inputChangeHandler =(e)=>{
    setFormData((prevState)=>({
      ...prevState, [e.target.name]: e.target.value,
    }))
  }
  return (
    <div>
      <h2>Register</h2>
      <form>
        <label>Name </label>
        <input name='name' value={name} type="text" placeholder='Name' onChange={inputChangeHandler} /> <br />
        <label>Email </label>
        <input name='email' value={email} type="text" placeholder='Email' onChange={inputChangeHandler} /> <br />
        <label>Password </label>
        <input name='password' value={password} type="password" placeholder='Password' onChange={inputChangeHandler} /> <br />
        <button type="submit">Register</button>
      </form>
    </div>
  )
}

export default Register