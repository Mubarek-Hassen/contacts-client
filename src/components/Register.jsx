
import { Form, useActionData } from "react-router-dom"
import Input from "./Input"
import Button from "./Button"
function SignUp() {
  const errors = useActionData()
  const inputErrors = errors !== undefined ?  Object.keys(errors) : []
  return (
    <>
    <Form method="post" className="" >
    <Input htmlFor="name" type="text" required amIError={inputErrors} name="name" label="Name" />
      <Input htmlFor="email" type="text" required amIError={inputErrors} name="email" label="Email" />
      <Input htmlFor="password" type="password" required amIError={inputErrors} name="password" label="Password" />
      <Button type="submit">Submit</Button>
    </Form>
    </>
  )
}
export default SignUp