import { useState } from "react";

import "./App.css";
import Home from "./pages/Home";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import BookAppoinment from "./pages/BookAppoinment";
import ContactUS from "./pages/ContactUS";
import Admin from "./pages/Admin";

import User from "./pages/User";
import UserLogin from "./pages/UserLogin";
import AdminLogin from "./pages/AdminLogin";
import Login from "./pages/Login";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/userlogin" element={<UserLogin/>} />
          <Route path="/adminlogin" element={<AdminLogin/>}/>
          <Route path="/user" element={<User />} />

          <Route path="/admin" element={<Admin />} />
          <Route path="/appoinment" element={<BookAppoinment />} />
          <Route path="/Contact" element={<ContactUS />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
