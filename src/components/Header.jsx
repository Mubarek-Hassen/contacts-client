import { NavLink, useRouteLoaderData, useSubmit } from "react-router-dom"
import classes from "./Header.module.css"


function Header() {

  const submit = useSubmit()

  const logOutHandler =()=>{
    submit(null, {method: "post", action: "/logout"})
  }

  const token = useRouteLoaderData("root")

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
          {token && <li>
            <NavLink to="/contacts" className={({isActive})=> isActive ? classes.active : undefined}>
              Contacts
            </NavLink>
          </li>}
          {!token && <li>
            <NavLink to="/auth?mode=login" className={({isActive})=> isActive ? classes.active : undefined}>
              Log In
            </NavLink>
          </li>}

          {token && <li>
            <button onClick={ logOutHandler }>
              Logout
            </button>
          </li>}
        </ul>
      </nav>
    </header>
  )
}

export default Header