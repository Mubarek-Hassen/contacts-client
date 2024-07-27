import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Auth, { authAction } from "./pages/Auth";
import ContactList, { contactsLoader } from "./pages/ContactList";
import Contact, { contactLoader } from "./pages/Contact";
import Root from "./components/Root";
import Home from "./pages/Home";
import Error from "./pages/Error";
import NewContact from "./pages/NewContact";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <Error />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/auth", element: <Auth />, action: authAction },
        { path: "/contacts", element: <ContactList />, loader: contactsLoader },
        { path: "/contacts/new", element: <NewContact /> },
        {
          path: "/contacts/:contactId",
          element: <Contact />,
          loader: contactLoader,
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
