import { Outlet, useLoaderData, useSubmit } from "react-router-dom"
import Header from "./Header"
import { useEffect } from "react"

function Root() {
  const token = useLoaderData()
  const submit = useSubmit()
  useEffect(()=>{
    if(!token){
      return;
    }

    setTimeout(() => {
      submit(null, {action: "/logout",method: "post"})
    }, 1*60*60*1000);

  }, [token, submit])

  return (
    <>
    <Header />
    <Outlet />
    </>
  )
}

export default Root