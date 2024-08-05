import { Link, useRouteLoaderData, useSubmit } from "react-router-dom"

export default function Contact() {
  const contact = useRouteLoaderData("contact")
  const submit = useSubmit()
  const startDeleteHandler =()=>{
    const proceed = window.confirm(`Do you want to delete ${contact.name}'s contact info?`)
    if(proceed){
      submit(null, {method: "delete", action: "/contacts/"+contact._id})
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
