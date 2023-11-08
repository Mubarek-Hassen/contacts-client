import { Link, useLoaderData } from "react-router-dom"

function ContactList() {
  const contacts = useLoaderData()

  return (
    <>
    { contacts.map((contact)=> 
      <Link key={contact._id} to={`${contact._id}`} >
        <h2>{contact.name}</h2>
        <h3>{contact.profession}</h3>
      </Link> 
    )}
    </>
  )
}
export default ContactList

export async function contactsLoader(){
  const response = await fetch("http://localhost:4000/contacts")
  if(!response.ok){
    //
  } else {
    const res = await response.json()
    return res
  }
}