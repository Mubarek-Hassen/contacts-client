import { NavLink, useRouteLoaderData, useSubmit } from "react-router-dom";
// import Button from "./Button";

function Header() {
  const submit = useSubmit();

  const logOutHandler = () => {
    submit(null, { method: "post", action: "/logout" });
  };

  const token = useRouteLoaderData("root");

  return (
    <header className="flex justify-between items-center bg-indigo-500 w-full">
      <h2 className="mx-2 sm:mx-8 text-lg sm:text-3xl font-semibold font-serif">I-Contact</h2>
      <nav className="mx-2 sm:mx-8">
        <ul className="flex justify-between items-center gap-4 my-4  ">
          <li >
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? " text-xs sm:text-lg border-black border-2 p-2 hover:text-slate-200 text-slate-900 hover:bg-slate-800 bg-slate-100 rounded"
                  : " text-xs sm:text-lg w-fit text-center my-8 border-black border-2 p-2 m-auto text-slate-200 hover:text-slate-900 bg-slate-800 hover:bg-slate-100 rounded"
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
                    ? "w-fit text-xs sm:text-lg text-center my-8 border-black border-2 p-2 m-auto  hover:text-slate-200 text-slate-900 hover:bg-slate-800 bg-slate-100 rounded"
                    : "w-fit text-xs sm:text-lg text-center my-8 border-black border-2 p-2 m-auto text-slate-200 hover:text-slate-900 bg-slate-800 hover:bg-slate-100 rounded"
                }
                to="contacts"
              >
                Contacts
              </NavLink>
            </li>
          )}
          {!token && (
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? " text-xs sm:text-lg border-black border-2 p-2 bg-slate-800 underline text-slate-200 hover:bg-slate-200 hover:text-slate-900 rounded"
                    : " text-xs sm:text-lg border-black border-2 p-2 bg-black text-green-500 hover:bg-slate-200 hover:text-slate-900 rounded"
                }
                to="/auth?mode=login"
              >
                Log In
              </NavLink>
            </li>
          )}

          {token && (
            <button
              onClick={logOutHandler}
              className="border-black border-2 p-2 bg-black text-red-500 hover:bg-slate-200 hover:text-slate-900 rounded-full"
            >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-4 sm:size-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.5 3.75A1.5 1.5 0 0 0 6 5.25v13.5a1.5 1.5 0 0 0 1.5 1.5h6a1.5 1.5 0 0 0 1.5-1.5V15a.75.75 0 0 1 1.5 0v3.75a3 3 0 0 1-3 3h-6a3 3 0 0 1-3-3V5.25a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3V9A.75.75 0 0 1 15 9V5.25a1.5 1.5 0 0 0-1.5-1.5h-6Zm10.72 4.72a.75.75 0 0 1 1.06 0l3 3a.75.75 0 0 1 0 1.06l-3 3a.75.75 0 1 1-1.06-1.06l1.72-1.72H9a.75.75 0 0 1 0-1.5h10.94l-1.72-1.72a.75.75 0 0 1 0-1.06Z"
                    clipRule="evenodd"
                  />
                </svg>
            </button>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
