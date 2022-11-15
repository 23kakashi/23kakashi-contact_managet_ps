import "./App.css";
import ContactForm from "./components/ContactForm";
import { Route, Router, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import { ToastContainer } from "react-toastify";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      {/* <Router> */}
      <ToastContainer
        position="bottom-left"
        autoClose={2000}
        limit={2}
        hideProgressBar={true}
      />
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />}></Route>
          <Route path="/add_contact" element={<ContactForm />}></Route>
        </Routes>
      {/* </Router> */}
    </div>
  );
}

export default App;
