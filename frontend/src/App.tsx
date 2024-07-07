import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// ** Import Shared Components
import Layout from "../components/Layout/Layout.tsx";
import Dashboard from "./pages/Dashboard.tsx";
import Login from "../components/Sections/Login.tsx";
import Register from "../components/Sections/Register.tsx";

import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Layout>
          <div className="container | min-h-max">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Routes>
          </div>
        </Layout>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
