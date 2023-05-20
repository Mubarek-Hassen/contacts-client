import React, { useState } from 'react'
import Login from '../components/users/Login'
import Register from '../components/users/Register'

function UserForm() {
  const [isUser, setIsUser] = useState(false)
  const userHandler =()=>{
    setIsUser(!isUser)
  }
  return (
    <>
    <h1>Welcome to Contact-wide!</h1>
    { isUser ? <Login /> : <Register /> }
    <h4>{ !isUser ? "Already have an account?" : "Don't have an account?" }</h4>
    <button onClick={ userHandler }>{ !isUser ? "Login" : "Register" }</button>
    </>
  )
}

export default UserForm