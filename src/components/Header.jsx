import { NavLink } from "react-router-dom"
import classes from "./Header.module.css"


function Header() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
      <h2 >I-Contact</h2>
      </div>
      <nav>
        <ul className={classes.list}>
          <NavLink to="/">
            <li>Home</li>
          </NavLink>
          <NavLink to="/contact">
            <li>Contacts</li>
          </NavLink>
        </ul>
      </nav>
    </header>
  )
}

export default Header