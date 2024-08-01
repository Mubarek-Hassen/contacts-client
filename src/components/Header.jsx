import { NavLink, useSubmit } from "react-router-dom"
import classes from "./Header.module.css"


function Header() {

  const submit = useSubmit()

  const logOutHandler =()=>{
    submit(null, {method: "post", action: "/logout"})
  }


  return (
    <header className={classes.header}>
      <div className={classes.logo}>
      <h2>I-Contact</h2>
      </div>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink to="/" className={({isActive})=> isActive ? classes.active : undefined} end>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/contacts" className={({isActive})=> isActive ? classes.active : undefined}>
              Contacts
            </NavLink>
          </li>
          <li>
            <button onClick={ logOutHandler }>
              Logout
            </button>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header