import { Form, useActionData } from "react-router-dom"
import Button from "./Button"
import Input from "./Input"
// import Wrapper from "./Wrapper"


function Login() {
  const errors = useActionData()
  const inputErrors = errors && Object.keys(errors)
  console.log(inputErrors)

  // if(errors){
  //   if()
  // }

  return (
  <>

    <Form method="post" className=" ">
      <Input label="Email" name="email" error={errors} type="text" />
      <Input label="Password" name="password" error={errors} type="password" />
      <Button type="submit">Submit</Button>
    </Form>

  </>
  )
}
export default Login