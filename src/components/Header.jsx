import { NavLink, useRouteLoaderData, useSubmit } from "react-router-dom";
// import Button from "./Button";

function Header() {
  const submit = useSubmit();

  const logOutHandler = () => {
    submit(null, { method: "post", action: "/logout" });
  };

  const token = useRouteLoaderData("root");

  return (
    <header className="flex justify-between items-center p-4 bg-indigo-300 w-full">
      <h2 className="mx-8 text-4xl font-semibold font-serif">I-Contact</h2>
      <nav className="mx-8">
        <ul className="flex justify-between items-center gap-4 m-2 text-xl ">
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? " border-black border-2 p-2 hover:text-slate-200 text-slate-900 hover:bg-slate-800 bg-slate-100 rounded"
                  : "w-fit text-center my-8 border-black border-2 p-2 m-auto text-slate-200 hover:text-slate-900 bg-slate-800 hover:bg-slate-100 rounded"
              }
              to="/"
              end
            >
              Home
            </NavLink>
          </li>
          {token && (
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "w-fit text-center my-8 border-black border-2 p-2 m-auto  hover:text-slate-200 text-slate-900 hover:bg-slate-800 bg-slate-100 rounded"
                    : "w-fit text-center my-8 border-black border-2 p-2 m-auto text-slate-200 hover:text-slate-900 bg-slate-800 hover:bg-slate-100 rounded"
                }
                to="contacts"
              >
                Contacts
              </NavLink>
            </li>
          )}
          {!token && (
            <li>
              <NavLink className={({isActive})=> isActive ? "border-black border-2 p-2 bg-slate-900 underline text-green-500 hover:bg-slate-200 hover:text-slate-900 rounded" :"border-black border-2 p-2 bg-black text-green-500 hover:bg-slate-200 hover:text-slate-900 rounded" }to="/auth?mode=login">Log In</NavLink>
            </li>
          )}

          {token && (
            <button onClick={logOutHandler} className="border-black border-2 p-2 bg-black text-red-500 hover:bg-slate-200 hover:text-slate-900 rounded">Logout</button>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
