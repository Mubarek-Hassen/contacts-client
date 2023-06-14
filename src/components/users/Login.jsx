import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"
import { useCookies } from "react-cookie"
function Login() {
  
  const [ , setCookies] = useCookies(["access_token"])
  const navigate = useNavigate()
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
  const loginHandler = async(e)=>{
    e.preventDefault()
    try {
      const res = await axios.post("http://localhost:4000/user/login", { email, password });
      console.log(res)
      setCookies("access_token", res.data.token)
      window.localStorage.setItem("userID", res.data.userId)
      navigate("/")
    } catch (error) {
      console.error(error)
    }
  }
  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={loginHandler}>
        <label>Email </label>
        <input name='email' type="text" value={email} placeholder='Email' onChange={inputChangeHandler} />
        <br />
        <label>Password </label>
        <input name='password' type="password" value={password} placeholder='Password' onChange={inputChangeHandler} />
        <br />
        <button type="submit">Login</button>
      </form>
      <h3>Don't have an account?</h3>
      <Link to="/register">Register</Link>
    </div>
  )
}

export default Login