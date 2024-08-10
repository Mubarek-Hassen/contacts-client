import { Link, useLoaderData } from "react-router-dom";


function ContactList() {
  const contacts = useLoaderData();

  return (
    <>
      {!contacts.length && <h2>There are no contacts.</h2>}
      {contacts &&
        contacts.map((contact) => (
          <div key={contact._id} >
            <Link to={`${contact._id}`} >
              <h2>{contact.name}</h2>
              <h3>{contact.profession}</h3>
            </Link>
          </div>
        ))}
      <button>
        <Link to="new">Add New Contact</Link>
      </button>
    </>
  );
}
export default ContactList;
