import classes from "../style/Auth.module.css";
import { Link, useSearchParams, useActionData } from "react-router-dom";
import Login from "../components/Login";
import SignUp from "../components/Register";

function Auth() {
  const [searchParams] = useSearchParams();
  const isLogin = searchParams.get("mode") === "login";
  const data = useActionData()

  let errors;
  if(data !== undefined){
    errors = Object.values(data)
    errors.map(error=>{
      <ul>
        <li>{error}</li>
      </ul>
    })
  }

  return (
    <>
      <h1>Welcome to i-Contact</h1>
      <div className={classes.acc}>
        { errors }
        {isLogin && <Login />}
        {!isLogin && <SignUp />}
        <p>{isLogin ? `Don't have an account?` : `Already a user?`}</p>
        <Link to={`?mode=${isLogin ? "register" : "login"}`}>
          {isLogin ? "Create Account" : "Login"}
        </Link>
      </div>
    </>
  );
}
export default Auth;
