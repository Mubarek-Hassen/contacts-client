import classes from "../style/Form.module.css"
import { Form } from "react-router-dom"
// import { useState } from "react"

function SignUp() {
  // const [signupData, setSignupData] = useState({
  //   name: "",
  //   email: "",
  //   password: ""
  // })

  // const handleChange =(e)=>{
  //   setSignupData((prev)=>{
  //     return {
  //       ...prev,
  //       [e.target.name] : e.target.value
  //     }
  //   })
  // }

  return (
    <div>
    <Form method="post" className={classes.form}>
      <h3>Sign Up</h3>
      <label htmlFor="name">Name</label>
      <br />
      <input type="text" name="name"/>
      <br />
      <label htmlFor="email">Email</label>
      <br />
      <input type="text" name="email" />
      <br />
      <label htmlFor="password">Password</label>
      <br />
      <input type="password" name="password"/>
      <br />
      <button type="submit">Submit</button>
    </Form>
    </div>
  )
}

export default SignUp