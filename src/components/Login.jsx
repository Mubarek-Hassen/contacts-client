import { Form, useActionData } from "react-router-dom"
import Button from "./Button"
import Input from "./Input"

function Login() {
  const errors = useActionData()
  const inputErrors = errors !== undefined ?  Object.keys(errors) : []
  return (
  <>
    <Form method="post" className="">
      <Input label="Email" name="email" amIError={inputErrors} type="text" />
      <Input label="Password" name="password" amIError={inputErrors} type="password" />
      <Button type="submit">Submit</Button>
    </Form>
  </>
  )
}
export default Login