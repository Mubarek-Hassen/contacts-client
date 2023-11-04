import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./pages/Home"
import ContactList from "./pages/ContactList"
import Contact from "./pages/Contact"

function App() {
  const router = createBrowserRouter([
    {path: "/", element: <Home />},
    {path: "/contact-list", element: <ContactList /> },
    {path: "/contact", element: <Contact /> },
  ])
  return (
    <>
    <RouterProvider router={ router } />
    </>
  )
}

export default App
