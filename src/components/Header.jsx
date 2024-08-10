import { NavLink, useRouteLoaderData, useSubmit } from "react-router-dom"

function Header() {

  const submit = useSubmit()

  const logOutHandler =()=>{
    submit(null, {method: "post", action: "/logout"})
  }

  const token = useRouteLoaderData("root")

  return (
    <header className="flex justify-between items-center bg-orange-900 w-full" >
      <h2 className="mx-8 text-3xl">I-Contact</h2>
      <nav className="mx-8">
        <ul className="flex gap-4 m-2 ">
          <li  >
            <NavLink to="/" end>
              Home
            </NavLink>
          </li>
          {token && <li>
            <NavLink to="/contacts" >
              Contacts
            </NavLink>
          </li>}
          {!token && <li>
            {/* <NavLink to="/auth?mode=login" className={({isActive})=> isActive ? classes.active : undefined}> */}
            <NavLink to="/auth?mode=login">
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