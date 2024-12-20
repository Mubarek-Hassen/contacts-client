import { redirect } from "react-router-dom"
import { getAuthToken } from "../auth"


export const action = async ({request, params}) =>{

  const method = request.method
  const contactId = params.contactId
  const token = getAuthToken()

  const data = await request.formData()
  const enteredContactData = {
    name: data.get("name"),
    profession: data.get("profession"),
    image: data.get("image"),
    email: data.get("email"),
    social_media_link: data.get("social_media_link")
  }
  const baseUrl = import.meta.env.VITE_BASE_URL
  let url = `${baseUrl}/contacts`

  if(method === "POST"){
    url = `${baseUrl}/contacts/new`
  }

  if(method === "PUT"){
    url = `${baseUrl}/contacts/${contactId}`
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
      return redirect("."),resData
  }
  return redirect("/contacts")
}