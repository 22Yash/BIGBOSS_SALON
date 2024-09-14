import { useState } from 'react'

import './App.css'
import Home from './pages/Home'
import { Routes, BrowserRouter, Route } from "react-router-dom";
import BookAppoinment from './pages/BookAppoinment';
import ContactUS from './pages/ContactUS';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/appoinment" element={<BookAppoinment/>} />
          <Route path="/Contact" element={<ContactUS/>} />
          
        </Routes>
        
        
      </BrowserRouter>
    </>
  )
}

export default App
