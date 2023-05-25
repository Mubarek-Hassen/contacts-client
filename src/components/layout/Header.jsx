import React from 'react'
import Classes from "./Header.module.css"
import { Link } from 'react-router-dom'
function Header() {
  return (
      <nav>
        <ul>
        <li className={Classes.links}><Link>Home</Link></li>
        <li className={Classes.links}><Link>Favorite</Link></li>
        <li className={Classes.links}><Link>Add new contact</Link></li>
        </ul>
      </nav>
  )
}

export default Header