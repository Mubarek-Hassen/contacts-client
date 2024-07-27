import { Form, useRouteLoaderData } from "react-router-dom";

const ContactForm = () => {
  const contact = useRouteLoaderData("contact");
  return (
    <Form>
      <input
        type="text"
        aria-label="name"
        placeholder="name"
        name="name"
        defaultValue={contact ? contact.name : ""}
      />
      <input
        type="text"
        aria-label="profession"
        placeholder="profession"
        name="profession"
        defaultValue={contact ? contact.profession : ""}
      />
    </Form>
  );
};

export default ContactForm;
