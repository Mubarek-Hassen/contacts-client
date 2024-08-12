
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
      <div>
        <h1 className="text-3xl font-semibold font-serif">{isLogin ? "Log In" : "Register"}</h1>
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
