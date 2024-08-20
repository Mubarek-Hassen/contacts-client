import ContactForm from "../components/ContactForm"
import { useRouteLoaderData } from "react-router-dom";

const EditContact = () => {
  const contact = useRouteLoaderData("contact");
  return (
    <ContactForm method={"put"} formType={`Edit ${contact.name}'s details`} contact={contact} />
  )
}

export default EditContact