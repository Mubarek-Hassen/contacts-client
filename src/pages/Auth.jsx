import { Link, useSearchParams, useActionData } from "react-router-dom";
import Login from "../components/Login";
import SignUp from "../components/Register";
import Wrapper from "../components/Wrapper";
function Auth() {
  const [searchParams] = useSearchParams();
  const isLogin = searchParams.get("mode") === "login";
  const errors = useActionData()
  console.log(errors);
  
  return (
    <>
      <Wrapper>
        <h1 className="text-3xl my-4 font-semibold font-serif">{isLogin ? "Log In" : "Register"}</h1>
        {errors && <ul>
          {Object.values(errors).map(error => <li key={error} className=" text-red-700 text-xs list-disc text-left">{error}</li>)}
        </ul> }
        {isLogin && <Login />}
        {!isLogin && <SignUp />}
      </Wrapper>
        <p className="my-8 text-xl">{isLogin ? `Don't have an account?` : `Already a user?`}</p>
        <Link className="mt-2 border-black border-2 p-2 text-slate-200 hover:text-slate-900 bg-slate-800 hover:bg-slate-100 rounded" to={`?mode=${isLogin ? "register" : "login"}`}>
          {isLogin ? "Create Account" : "Login"}
        </Link>
    </>
  );
}
export default Auth;
