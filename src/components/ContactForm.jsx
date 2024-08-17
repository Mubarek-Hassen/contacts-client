import { Form } from "react-router-dom";
import Wrapper from "./Wrapper"
import Input from "./Input"
const ContactForm = ({ method, contact }) => {
  return (
<Wrapper>
    <Form method={method} className="w-3/4 flex justify-center flex-col m-auto  my-4 ">
      <Input
        type="text"
        aria-label="name"
        placeholder="name"
        label="Name"
        name="name"
        defaultValue={contact ? contact.name : ""}
      />
      <Input
        type="text"
        aria-label="profession"
        placeholder="profession"
        label="Profession"
        name="profession"
        defaultValue={contact ? contact.profession : ""}
      />
      <br />
      <br />
      <button className="w-fit text-center my-8 border-black border-2 p-2 m-auto text-slate-200 hover:text-slate-900 bg-slate-800 hover:bg-slate-100 rounded" type="submit">Save Contact</button>
      <br />
      <br />
    </Form>
    </Wrapper>
  );
};

export default ContactForm;



