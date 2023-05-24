import React from 'react'
import { Link } from 'react-router-dom'
function Header() {
  return (
    <>
      <nav>
        <ul>
        <li><Link>Home</Link></li>
        <li><Link>Favorite</Link></li>
        <li><Link>Add new contact</Link></li>
        </ul>
      </nav>
    </>
  )
}

export default Header