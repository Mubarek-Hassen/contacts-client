import classes from "../style/Form.module.css"
import { useState } from "react"
function Login() {
  //STATE
  const [loginData, setLoginData] = useState({
    email: "",
    password: ""
  })

  function changeHandler(e){
    setLoginData((prev)=>{
      return {
        ...prev,
        [e.target.name] : e.target.value
      }
    })
  }

  return (
  <>
    <form className={classes.form}>
    <h3>Login</h3>
      <label htmlFor="email">Email</label>
      <br />
      <input type="text" value={loginData.email} name="email" onChange={changeHandler}/>
      <br />
      <label htmlFor="password">Password</label>
      <br />
      <input type="password" name="password" value={loginData.password} onChange={changeHandler}/>
      <br />
      <button type="submit">Submit</button>
    </form>
  </>
  )
}

export default Login