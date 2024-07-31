import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Auth, { authAction } from "./pages/Auth";
import ContactList, { contactsLoader } from "./pages/ContactList";
import Contact, { contactLoader, action as contactAction } from "./pages/Contact";
import EditContact from "./pages/EditContact";
import Root from "./components/Root";
import Home from "./pages/Home";
import Error from "./pages/Error";
import NewContact from "./pages/NewContact";
import { action as manipulateContactAction } from "./components/ContactForm";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <Error />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/auth", element: <Auth />, action: authAction },
        {
          path: "/contacts",
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
                },
              ]
            },
          ],
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
