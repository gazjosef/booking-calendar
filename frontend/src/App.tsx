import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// ** Import Shared Components
// import Layout from "../components/Layout/Layout.tsx";
// import Login from "../components/Sections/Login.tsx";
// import Register from "../components/Sections/Register.tsx";
import Dashboard from "./pages/Dashboard.tsx";
import Login from "./pages/Login.tsx";
import Register from "./pages/Register.tsx";
import Header from "../components/Layout/Header.tsx";

import CalendarApp from "../components/Snippets/CalendarApp.tsx";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <div className="container">
          <Header />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </div>
      </Router>
      <ToastContainer />
      <CalendarApp />
    </>
  );
}

export default App;
