import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router";
import './App.css'
import Header from './component/Header'
import Footer from './component/Footer';
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import Signup from './pages/Signup'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
    <Header />
    <Routes>
    <Route path='/' element = {<Home/>}/>
      <Route path='dashboard' element = {<Dashboard/>}/>
      <Route path='login' element = {<Login/>}/>
      <Route path='signup' element = {<Signup/>}/>
      
    </Routes>
    <Footer/>
  </Router>
  )
}

export default App
