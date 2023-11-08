import { createBrowserRouter, RouterProvider } from "react-router-dom"
import  "./App.css"
import Auth from "./pages/Auth"
import ContactList, { contactsLoader} from "./pages/ContactList"
import Contact from "./pages/Contact"
import Root from "./components/Root"
import Home from "./pages/Home"


function App() {
  const router = createBrowserRouter([
    {path: "/", element: <Root />, children: [
      {path: "/", element: <Home />},
      {path: "/auth", element: <Auth />},
      {path: "/contacts", element: <ContactList />, loader: contactsLoader ,children: [
        {path: ":contactId", element: <Contact /> },
      ]},
    ]},

  ])
  return (
    <>
    <RouterProvider router={ router } />
    </>
  )
}

export default App
