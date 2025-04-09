import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from 'react'
import Nav from "./components/Nav"
import DragonBall from "./pages/DragonBall";
import Contact from "./pages/contact";
import Morty from "./pages/Morty"
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Router>
      <Nav/>
      <Routes>
<Route path ="/Contact" element = {<Contact/>} />
<Route path ="/dragonBall" element = {<DragonBall/>} />
<Route path ="/RickMorty" element = {<Morty/>} />




      </Routes>
     </Router>
    </>
  )
}

export default App  
