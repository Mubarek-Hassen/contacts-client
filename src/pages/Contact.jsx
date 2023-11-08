import { useLoaderData } from "react-router-dom"


export default function Contact() {
  // const {contactId} = useParams()
  const contact = useLoaderData()
  return (
    <div>
      <h1>Welcome</h1>
      <h1>{contact.name}</h1>
    </div>
  )
}

export const contactLoader = async ({params})=>{
  const { contactId } = params
  const res = await fetch(`http://localhost:4000/contacts/${contactId}`)
  if(!res.ok){
    //
  } else {
    const data = await res.json()
    return data
  }
}