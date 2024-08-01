import { Link, json, useLoaderData } from "react-router-dom"
import classes from "../style/ContactsList.module.css"
import { getAuthToken } from "../util/auth"
function ContactList() {
  const contacts = useLoaderData()
  
  return (
    <>
    { !contacts.length && <h2>There are no contacts.</h2>}
    { contacts && contacts.map((contact)=>
      <div key={contact._id} className={classes.wrapper}>
      <Link to={`${contact._id}`} className={classes.link}>
        <h2 className={classes.name}>{contact.name}</h2>
        <h3 className={classes.profession}>{contact.profession}</h3>
      </Link>
      </div>
    )}
    <button>
      <Link to="new">
        Add New Contact
      </Link>
    </button>
    </>
  )
}
export default ContactList

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