import Home from '../src/components/home/index'
import InvoicePage from '../src/components/invoicesPage/index'
import SignUp from '../src/components/signUp/index'
import Login from '../src/components/login/Login'
import Landing from '../src/components/landing/Landing'
import Dashboard from './components/dashboard/Dashboard'
import './styles/styles.scss'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/invoices" element={<InvoicePage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  )
}



export default App
