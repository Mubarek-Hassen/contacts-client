import ContactForm from "../components/ContactForm"
import { useRouteLoaderData } from "react-router-dom";

const EditContact = () => {
  const contact = useRouteLoaderData("contact");
  console.log(contact)
  return (
    <ContactForm method={"put"} contact={contact} />
  )
}

export default EditContact