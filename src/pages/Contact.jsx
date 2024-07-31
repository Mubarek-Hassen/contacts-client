import { json, Link, redirect, useRouteLoaderData, useSubmit } from "react-router-dom"
import { getAuthToken } from "../util/auth"


export default function Contact() {
  const contact = useRouteLoaderData("contact")
  const submit = useSubmit()
  const startDeleteHandler =()=>{
    const proceed = window.confirm(`Do you want to delete ${contact.name}'s contact info?`)
    if(proceed){
      submit(null, {method: "delete"})
    }
  }

  return (
    <div>
      <h2>Name - {contact.name}</h2>
      <h2>Profession - {contact.profession}</h2>
      <button>
        <Link to="edit"> Edit Contact</Link>
      </button>
      <button onClick={startDeleteHandler}>
        Delete
      </button>
    </div>
  )
}

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

export const action = async({request, params})=>{
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