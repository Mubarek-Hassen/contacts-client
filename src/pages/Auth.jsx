import classes from "../style/Auth.module.css";
import { Link, useSearchParams, useActionData } from "react-router-dom";
import Login from "../components/Login";
import SignUp from "../components/Register";

function Auth() {
  const [searchParams] = useSearchParams();
  const isLogin = searchParams.get("mode") === "login";
  const errors = useActionData()
  console.log(errors)



  return (
    <>
      <h1>Welcome to i-Contact</h1>
      <div className={classes.acc}>
        {errors && <ul>
          {Object.values(errors).map(error => <li key={error}>{error}</li>)}
        </ul> }
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
