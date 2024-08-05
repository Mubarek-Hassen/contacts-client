import { Form } from "react-router-dom";

const ContactForm = ({ method, contact }) => {
  return (
    <Form method={method}>
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
      <br />
      <br />
      <button type="submit">Save Contact</button>
      <br />
      <br />
    </Form>
  );
};

export default ContactForm;
