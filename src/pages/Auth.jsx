import classes from "../style/Auth.module.css"
import { Link, useSearchParams } from "react-router-dom"
import axios from "axios"

import Login from "../components/Login"
import SignUp from "../components/SignUp"

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

export async function authAction({ request }){
  const searchParams = new URL(request.url).searchParams
  const mode = searchParams.get("mode")
  const data = await request.formData()

  const enteredData = {
    email: data.get("email"),
    password: data.get("password"),
  }
  if(mode === "signup") enteredData.name = data.get("name")

  const res = await axios.post(`http://localhost:4000/auth/${mode}`, enteredData)
  const isSuccess = res
  console.log(isSuccess);
  return isSuccess
}