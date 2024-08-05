import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Auth from "./pages/Auth";
import ContactList from "./pages/ContactList";
import Contact from "./pages/Contact";
import EditContact from "./pages/EditContact";
import Root from "./components/Root";
import Home from "./pages/Home";
import Error from "./pages/Error";
import NewContact from "./pages/NewContact";
import { action as manipulateContactAction } from "./util/router-actions/manipulateContactAction"
import { checkAuthLoader, tokenLoader } from "./util/auth";
import { action as logoutAction } from "./util/router-actions/logoutAction"
import { authAction } from "./util/router-actions/authAction";
import { contactAction } from "./util/router-actions/contactAction";
import { contactLoader } from "./util/router-loaders/contactLoader";
import { contactsLoader } from "./util/router-loaders/contactsLoader";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <Error />,
      id: "root",
      loader: tokenLoader,
      children: [
        { path: "/", element: <Home />, },
        { path: "/auth", element: <Auth />, action: authAction },
        {
          path: "/contacts",
          loader: checkAuthLoader,
          children: [
            {
              index: true,
              element: <ContactList />,
              loader: contactsLoader,
            },
            {
              path: "new",
              element: <NewContact />,
              action: manipulateContactAction,
              loader: checkAuthLoader,
            },
            {
              path: ":contactId",
              loader: contactLoader,
              action: contactAction,
              id: "contact",
              children: [
                {
                  index: true, element: <Contact />,
                },
                {
                  path: "edit",
                  element: <EditContact />,
                  action: manipulateContactAction,
                  loader: checkAuthLoader,
                },
              ]
            },
          ],
        },
        {
          path: "/logout",
          action: logoutAction,
        }
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
