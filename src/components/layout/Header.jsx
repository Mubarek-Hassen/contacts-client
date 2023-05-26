import React from 'react'
import Classes from "./Header.module.css"
import { Link } from 'react-router-dom'
function Header() {
  return (
      <nav>
        <ul>
        <li className={Classes.links}><Link to="/">Home</Link></li>
        <li className={Classes.links}><Link to="/favorites">Favorites</Link></li>
        <li className={Classes.links}><Link to="/new-contact">Add new contact</Link></li>
        </ul>
      </nav>
  )
}

export default Header