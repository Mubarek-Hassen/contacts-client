import { removeAuthToken } from "../auth"
import { redirect } from "react-router-dom"


export const action =()=>{
  removeAuthToken()
  return redirect("/")
}