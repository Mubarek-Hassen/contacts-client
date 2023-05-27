import { Routes, Route } from "react-router-dom"
import './App.css';
import Layout from './components/layout/Layout';
import UserForm from './pages/UserForm';
import NewContact from "./components/contacts/NewContact";

function App() {
  return (
    <div className="App">
      <Layout>
      <Routes>
        <Route path="/" element={<UserForm />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/contacts/:id" element={<Contact />} />
        <Route path="/new-contact" element={<NewContact />} />
      </Routes>
      </Layout>

    </div>
  );
}

export default App;
