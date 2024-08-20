import { Outlet, redirect, useLoaderData, useSubmit } from "react-router-dom"
import Header from "./Header"
import { useEffect } from "react"
import { getTokenDuration } from "../util/auth"

function Root() {
  const token = useLoaderData()
  const submit = useSubmit()
  useEffect(()=>{
    if(!token){
      return;
    }

    if(token === "EXPIRED"){
      submit(null, {action: "/logout",method: "post"})
      return;
    }
    
    const tokenDuration = getTokenDuration()
    
    setTimeout(() => {
      submit(null, {action: "/logout",method: "post"})
      return redirect("/auth?mode=login")
    }, tokenDuration);

  }, [token, submit])

  return (
    <>
    <Header />
    <Outlet />
    </>
  )
}

export default Root