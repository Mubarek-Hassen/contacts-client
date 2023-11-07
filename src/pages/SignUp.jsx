import classes from "../style/Form.module.css"
import { useState } from "react"

function SignUp() {
  const [signupData, setSignupData] = useState({
    name: "",
    email: "",
    password: ""
  })

  const handleChange =(e)=>{
    setSignupData((prev)=>{
      return {
        ...prev,
        [e.target.name] : e.target.value
      }
    })
  }

  return (
    <div>
    <form className={classes.form}>
      <h3>Sign Up</h3>
      <label htmlFor="name">Name</label>
      <br />
      <input type="text" name="name" value={signupData.name} onChange={handleChange}/>
      <br />
      <label htmlFor="email">Email</label>
      <br />
      <input type="text" name="email" value={signupData.email} onChange={handleChange} />
      <br />
      <label htmlFor="password">Password</label>
      <br />
      <input type="password" name="password" value={signupData.password} onChange={handleChange} />
      <br />
      <button type="submit">Submit</button>
    </form>
    </div>
  )
}

export default SignUp