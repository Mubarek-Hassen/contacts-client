import classes from "../style/Home.module.css"

import Login from "./Login"
import SignUp from "./SignUp"

function Home() {

  return (
    <>
    <h1>Welcome to i-Contact</h1>
    <h2>Keep your contacts with you on the go.</h2>
    <div className={classes.acc}>
      <Login />
      <SignUp />
    </div>
    </>
  )
}

export default Home