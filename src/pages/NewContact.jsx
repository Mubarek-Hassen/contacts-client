import ContactForm from "../components/ContactForm"

const NewContact = () => {
  return (
    <ContactForm />
  )
}

export default NewContact

export const action = async ({request}) =>{
  const data = await request.formData()
  const enteredContactData = {
    name: data.get("name"),
    profession: data.get("profession")
  }
}