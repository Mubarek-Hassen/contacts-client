import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
      <h1>Welcome to contact-wide</h1>
      <Link to="/register">Register</Link>
      <h3>OR</h3>
      <Link to="/login">login</Link>
    </div>
  )
}

export default Home