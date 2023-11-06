import { useState } from 'react'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import './App.css'
import LandingPage from './pages/LandingPage'
import Getstarted from "./pages/Getstarted"
import Registration from './pages/Registration'
import Home from "./pages/Home"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/' element={<LandingPage/>}/>
          <Route exact path='/login' element={<Getstarted/>} />
          <Route exact path="/registration" element={<Registration/>} />
          <Route exact path="/home" element={<Home/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
