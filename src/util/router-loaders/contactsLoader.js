import { getAuthToken } from "../auth"
import { json } from "react-router-dom"

export async function contactsLoader(){
    const token = getAuthToken("token")
    const response = await fetch(`${import.meta.env.VITE_BASE_URL}/contacts`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization":`Bearer ${token}`,
      }
    })
    if(!response.ok){
      throw json({message: response.statusText}, {status: response.status})
    } else {
      const res = await response.json()
      return res
    }

}