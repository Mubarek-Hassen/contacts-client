import { json } from "react-router-dom"
import { getAuthToken } from "../auth"


export const contactLoader = async ({params})=>{
  const token = getAuthToken()
  const { contactId } = params
  const res = await fetch(`http://localhost:4000/contacts/${contactId}`, {
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer "+ token
    }
  })
  if(!res.ok){
    return json({message: "An Error Occured."}, {status: 500})
  } else {
    const data = await res.json()
    return data
  }
}
