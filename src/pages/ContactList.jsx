import { Link, useLoaderData } from "react-router-dom";
import ContactCard from "../components/ContactCard";

function ContactList() {
  const contacts = useLoaderData();

  return (
    <div className="grid">
      <Link className="my-8 bg-blue-400 w-fit m-auto p-2 rounded text-lg font-medium border-black border-2 hover:bg-blue-100 " to="new">
        Add New Contact
      </Link>
      <div className="grid md:grid-cols-3 gap-4   ">
        {!contacts.length && <h2>There are no contacts.</h2>}
        {contacts &&
          contacts.map((contact) => (
            <ContactCard key={contact._id}>
              <Link to={`${contact._id}`}>
                <h2>Contact Name - {contact.name}</h2>
                <h3>Contact Profession - {contact.profession}</h3>
              </Link>
            </ContactCard>
          ))}
      </div>
    </div>
  );
}
export default ContactList;
