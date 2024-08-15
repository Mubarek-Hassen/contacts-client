import { Link, useRouteLoaderData, useSubmit } from "react-router-dom"
import Button from "../components/Button"


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
      <h2 className="text-4xl my-4 " >Name - {contact.name}</h2>
      <h2 className="text-4xl mb-4">Profession - {contact.profession}</h2>
      <Link to="edit"> 
        <Button>
          Edit Contact
        </Button>
      </Link>
      <Button onClick={startDeleteHandler}>
        Delete
      </Button>
    </div>
  )
}
