import React from 'react'
import Classes from "./Header.module.css"
import { Link } from 'react-router-dom'
function Header() {
  return (
      <nav className={Classes.nav}>
        <Link to="/">Home</Link>
        <Link to="/favorites">Favorites</Link>
        <Link to="/new-contact">Add new contact</Link>
      </nav>
  )
}

export default Header