import { getAuthToken } from "../auth"
import { json } from "react-router-dom"

export async function contactsLoader(){
  const token = getAuthToken("token")
  const response = await fetch("http://localhost:4000/contacts", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Authorization":`Bearer ${token}`,
    }
  })
  if(!response.ok){
    throw json({message: "Cannot fetch contacts."}, {status: 500})
  } else {
    const res = await response.json()
    console.log(res)
    return res
  }
}