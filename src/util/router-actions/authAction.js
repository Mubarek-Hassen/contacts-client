import { json, redirect } from "react-router-dom"
import { setAuthToken } from "../auth"

export async function authAction({ request }){
  const searchParams = new URL(request.url).searchParams
  const mode = searchParams.get("mode")
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
  if(res.status === 401){
      throw json({message: resData}, { status: 401})
  }

  const token = resData.token
  setAuthToken(token)
  const expiration = new Date();
  expiration.setHours(expiration.getHours() + 1)
  localStorage.setItem("expiration", expiration.toISOString())

  if(token){
    return redirect("/contacts")
  }
  return redirect(`/auth?mode=${mode}`)
}