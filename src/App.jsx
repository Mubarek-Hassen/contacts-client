import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./pages/Home"
import ContactList from "./pages/ContactList"
import Contact from "./pages/Contact"
import Root from "./components/Root"

function App() {
  const router = createBrowserRouter([
    {path: "/", element: <Root />, children: [
      {path: "/", element: <Home />},
      {path: "/contact-list", element: <ContactList /> },
      {path: "/contact", element: <Contact /> },
    ]},

  ])
  return (
    <>
    <RouterProvider router={ router } />
    </>
  )
}

export default App
