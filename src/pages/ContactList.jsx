import { Link, json, useLoaderData } from "react-router-dom"
import classes from "../style/ContactsList.module.css"
function ContactList() {
  const contacts = useLoaderData()

  return (
    <>
    {!contacts &&  <h2>There are no contacts.</h2> }
    { contacts.map((contact)=>
      <div key={contact._id} className={classes.wrapper}>
      <Link to={`${contact._id}`} className={classes.link}>
        <h2 className={classes.name}>{contact.name}</h2>
        <h3 className={classes.profession}>{contact.profession}</h3>
      </Link>
      </div>
    )}
    </>
  )
}
export default ContactList

export async function contactsLoader(){
  const response = await fetch("http://localhost:4000/contacts")
  if(!response.ok){
    throw json({message: "Cannot fetch contacts."}, {status: 500})
  } else {
    const res = await response.json()
    return res
  }
}