import { json, redirect } from "react-router-dom"
import { getAuthToken } from "../auth"


export const action = async ({request, params}) =>{

  const method = request.method
  const contactId = params.contactId
  const token = getAuthToken()

  const data = await request.formData()
  const enteredContactData = {
    name: data.get("name"),
    profession: data.get("profession")
  }
  console.log(method)
  
  let url = "http://localhost:4000/contacts"

  if(method === "POST"){
    url = "http://localhost:4000/contacts/new"
  }

  if(method === "PUT"){
    url = `http://localhost:4000/contacts/${contactId}`
  }


  const response = await fetch(url, {
    method: method,
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`
    },
    body: JSON.stringify(enteredContactData)
  })
  
  const resData = await response.json()
  if(response.status === 401){
      throw json({message: resData}, { status: 401})
  }
  return redirect("/contacts")
}