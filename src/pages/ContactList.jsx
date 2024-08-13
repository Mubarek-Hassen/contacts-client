import { Link, useLoaderData } from "react-router-dom";
import ContactCard from "../components/ContactCard";

function ContactList() {
  const contacts = useLoaderData();

  return (
    <>
    <button>
      <Link to="new">Add New Contact</Link>
    </button>
    <div className="grid md:grid-cols-3  ">
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

    </>
  );
}
export default ContactList;
