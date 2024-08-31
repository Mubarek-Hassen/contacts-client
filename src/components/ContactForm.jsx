import { Form, useActionData } from "react-router-dom";
import Wrapper from "./Wrapper"
import Input from "./Input"
const ContactForm = ({ method, contact, formType }) => {
  const data = useActionData()
  console.log(data);
  
  return (
<Wrapper>
  <h1 className=" text-2xl sm:text-3xl">{formType}</h1>
    <Form method={method} className="w-3/4 flex justify-center flex-col m-auto text-left sm:text-center  my-4 ">
      {data && <p className="text-red-600">{data}.</p>}
      <Input
        type="text"
        aria-label="name"
        placeholder="name"
        label="Name"
        name="name"
        defaultValue={contact ? contact.name : ""}
        required
      />
      <Input
        type="text"
        aria-label="profession"
        placeholder="profession"
        label="Profession"
        name="profession"
        defaultValue={contact ? contact.profession : ""}
        required
      />


      <button className="w-fit mt-4 text-center  border-black border-2 p-2 m-auto text-slate-200 hover:text-slate-900 bg-slate-800 hover:bg-slate-100 rounded" type="submit">Save Contact</button>
    </Form>
    </Wrapper>
  );
};

export default ContactForm;



