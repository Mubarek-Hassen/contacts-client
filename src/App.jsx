import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Auth from "./pages/Auth";
// import ContactList from "./pages/ContactList";

import EditContact from "./pages/EditContact";
import Root from "./components/Root";
import Home from "./pages/Home";
import Error from "./pages/Error";
import NewContact from "./pages/NewContact";
import { action as manipulateContactAction } from "./util/router-actions/manipulateContactAction";
import { checkAuthLoader, tokenLoader } from "./util/auth";
import { action as logoutAction } from "./util/router-actions/logoutAction";
import { authAction } from "./util/router-actions/authAction";
import { contactAction } from "./util/router-actions/contactAction";
// import { contactsLoader } from "./util/router-loaders/contactsLoader";
import { lazy, Suspense } from "react";

//!the bottom code loads the page Contact for our lazy loading step.
const Contact = lazy(() => import("./pages/Contact.jsx"));
const ContactList = lazy(() => import("./pages/ContactList.jsx"));

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <Error />,
      id: "root",
      loader: tokenLoader,
      children: [
        { path: "/", element: <Home /> },
        { path: "/auth", element: <Auth />, action: authAction },
        {
          path: "/contacts",
          loader: checkAuthLoader,
          children: [
            {
              index: true,
              element: <Suspense fallback={<p>Loading...</p>}><ContactList /></Suspense>,
              loader: ()=> import("./util/router-loaders/contactsLoader.js").then((module)=> module.contactsLoader()),
            },
            {
              path: "new",
              element: <NewContact />,
              action: manipulateContactAction,
              loader: checkAuthLoader,
            },
            {
              path: ":contactId",
              loader: ({ params }) =>
                import("./util/router-loaders/contactLoader").then((module) =>
                  module.contactLoader({ params })
                ),
              action: contactAction,
              id: "contact",
              children: [
                {
                  index: true,
                  element: (
                    <Suspense fallback={<p>Loading...</p>}>
                      <Contact />
                    </Suspense>
                  ),
                },
                {
                  path: "edit",
                  element: <EditContact />,
                  action: manipulateContactAction,
                  loader: checkAuthLoader,
                },
              ],
            },
          ],
        },
        {
          path: "/logout",
          action: logoutAction,
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
