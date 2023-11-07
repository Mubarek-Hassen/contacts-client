import classes from "../style/Auth.module.css"
import { Link, useSearchParams } from "react-router-dom"

import Login from "./Login"
import SignUp from "./SignUp"

function Auth() {

  const [searchParams] = useSearchParams();
  const isLogin = searchParams.get("mode") === "login"

  return (
    <>
    <h1>Welcome to i-Contact</h1>
    <div className={classes.acc}>
      { isLogin && <Login />}
      { !isLogin && <SignUp />}
      <p>{isLogin ? `Don't have an account?` : `Already a user?`}</p>
      <Link to={`?mode=${isLogin ? "signup" : "login"}`}>
        {isLogin ? "Create Account" : "Login"}
      </Link>
    </div>
    </>
  )
}

export default Auth