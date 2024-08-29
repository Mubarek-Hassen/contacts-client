import { Form, useActionData } from "react-router-dom"
import Button from "./Button"
import Input from "./Input"

function Login() {
  const errors = useActionData()
  console.log(errors);
  
  const inputErrors = errors !== undefined ?  Object.keys(errors) : []
  return (
  <>
    <Form method="post" className="">
      <Input label="Email" name="email" amIError={inputErrors} required type="text" />
      <Input label="Password" name="password" amIError={inputErrors} required type="password" />
      <Button type="submit">Submit</Button>
    </Form>
  </>
  )
}
export default Login