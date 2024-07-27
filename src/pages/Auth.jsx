import classes from "../style/Auth.module.css"
import { json, Link, redirect, useSearchParams, useActionData } from "react-router-dom"


import Login from "../components/Login"
import SignUp from "../components/SignUp"


function Auth() {

  const [searchParams] = useSearchParams();
  const isLogin = searchParams.get("mode") === "login"
  const data = useActionData()
  // console.log(data)
  return (
    <>
    <h1>Welcome to i-Contact</h1>
    {data && data}
    <div className={classes.acc}>
      { isLogin && <Login />}
      { !isLogin && <SignUp />}
      <p>{isLogin ? `Don't have an account?` : `Already a user?`}</p>
      <Link to={`?mode=${isLogin ? "register" : "login"}`}>
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
  console.log(mode)
  const data = await request.formData()

  const enteredData = {
    email: data.get("email"),
    password: data.get("password"),
  }
  if(mode === "register") enteredData.name = data.get("name")



  const res = await fetch(`http://localhost:4000/user/${mode}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(enteredData),
  })

  const resData = await res.json()

  console.log(resData)

  if(res.status === 401){
    throw json({message: resData}, { status: 401})
  }
  return redirect(`/auth?mode=${mode}`)
}