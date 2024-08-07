import { Link, useLoaderData } from "react-router-dom";
import classes from "../style/ContactsList.module.css";

function ContactList() {
  const contacts = useLoaderData();

  return (
    <>
      {!contacts.length && <h2>There are no contacts.</h2>}
      {contacts &&
        contacts.map((contact) => (
          <div key={contact._id} className={classes.wrapper}>
            <Link to={`${contact._id}`} className={classes.link}>
              <h2 className={classes.name}>{contact.name}</h2>
              <h3 className={classes.profession}>{contact.profession}</h3>
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
