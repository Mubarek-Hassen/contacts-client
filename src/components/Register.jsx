
import { Form } from "react-router-dom"
import Input from "./Input"
import Button from "./Button"

function SignUp() {
  return (
    <Form method="post" >
      <Input htmlFor="name" type="text" name="name" label="Name" />
      <Input htmlFor="email" type="text" name="email" label="Email" />
      <Input htmlFor="password" type="password" name="password" label="Password" />
      <Button type="submit">Submit</Button>
    </Form>
  )
}

export default SignUp