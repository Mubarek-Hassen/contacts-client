import { Routes, Route } from "react-router-dom"
import './App.css';
import Layout from './components/layout/Layout';
import UserForm from './pages/UserForm';

function App() {
  return (
    <div className="App">
      <Layout>
      <Routes>
        <Route path="/" element={<UserForm />} />
      </Routes>
      </Layout>

    </div>
  );
}

export default App;
