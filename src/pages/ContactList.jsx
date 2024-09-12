import { Link, useLoaderData } from "react-router-dom";
import ContactCard from "../components/ContactCard";
import avatar from "../assets/3d-icon-of-people-free-png.webp"

function ContactList() {
  const contacts = useLoaderData();

  return (
    <div className="flex flex-col">
      <Link className=" my-8 bg-blue-400 w-fit m-auto p-2 rounded text-lg font-medium border-black border-2 hover:bg-blue-100 " to="new">
        Add New Contact
      </Link>
        {!contacts.length && <h2 className=" text-center col-span-4 text-4xl ">There are no contacts.</h2>}
      <div className=" grid md:grid-cols-4 gap-4 flex-shrink-0 ">
        {contacts &&
          contacts.map((contact) => (
            <ContactCard key={contact._id}>
              <Link to={`${contact._id}`}>
              <img src={`${contact.image ? contact.image : avatar }`} className="w-8/12 h-3/4 m-auto" />
                <h2 className="text-2xl">Name - {contact.name}</h2>
                <h3 className="text-2xl">Profession - {contact.profession}</h3>
              </Link>
            </ContactCard>
          ))}
      </div>
    </div>
  );
}
export default ContactList;
