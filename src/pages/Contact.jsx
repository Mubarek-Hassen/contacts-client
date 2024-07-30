import { json, Link, useLoaderData } from "react-router-dom"


export default function Contact() {
  const contact = useLoaderData()
  return (
    <div>
      <h2>Name - {contact.name}</h2>
      <h2>Profession - {contact.profession}</h2>
      <button>
        <Link to="edit"> Edit Contact</Link>
      </button>
    </div>
  )
}

export const contactLoader = async ({params})=>{
  const { contactId } = params
  const res = await fetch(`http://localhost:4000/contacts/${contactId}`)
  if(!res.ok){
    return json({message: "An Error Occured."}, {status: 500})
  } else {
    const data = await res.json()
    return data
  }
}