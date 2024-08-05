import { redirect, json } from "react-router-dom"
import { getAuthToken } from "../auth"


export const contactAction = async({request, params})=>{
  const token = getAuthToken()
  const {contactId} = params
  const response = await fetch(`http://localhost:4000/contacts/${contactId}`, {
    method: request.method,
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer "+ token
    }
  })
  console.log(response)
  if(!response.ok){
    throw json({
      message: "Could Not Delete Contact."
    },{
      status: 500
    })
  }
  
  return redirect("/contacts")
}
