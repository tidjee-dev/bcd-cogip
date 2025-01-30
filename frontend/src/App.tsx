import Home from '../src/components/home/index'
import InvoicePage from '../src/components/invoicesPage/index'
import SignUp from '../src/components/signUp/index'
import Login from '../src/components/login/Login'
import './styles/styles.scss'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import React from 'react'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/invoices" element={<InvoicePage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  )
}



export default App
