import { Routes, Route } from "react-router-dom"
import Layout from './components/layout/Layout';
import NewContact from "./components/contacts/NewContact";
import Home from "./pages/Home";
import Register from "./components/users/Register";
import Login from "./components/users/Login";

function App() {
  return (
    <div className="container">
      <Layout>
      <Routes>
        <Route path="/" element={ <Home />}/>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="/contacts" element={<Contacts />} />
        <Route path="/contacts/:id" element={<Contact />} /> */}
        <Route path="/new-contact" element={<NewContact />} />
      </Routes>
      </Layout>

    </div>
  );
}

export default App;
