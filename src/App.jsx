import { createBrowserRouter, RouterProvider } from "react-router-dom"
import  "./App.css"
import Home from "./pages/Home"
import ContactList from "./pages/ContactList"
import Contact from "./pages/Contact"
import Root from "./components/Root"
import SignUp from "./pages/SignUp"
import Login from "./pages/Login"

function App() {
  const router = createBrowserRouter([
    {path: "/", element: <Root />, children: [
      {path: "/", element: <Home />},
      {path: "/contacts", element: <ContactList />, children: [
        {path: ":contactId", element: <Contact /> },
      ]},
      {path: "/signup", element: <SignUp /> },
      {path: "/login", element: <Login /> },
    ]},

  ])
  return (
    <>
    <RouterProvider router={ router } />
    </>
  )
}

export default App
