import './App.css'
import Home from './Components/Home/Home'
import Navbar from './Components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Projects from './Components/Projects/Projects'
import Footer from './Components/Footer/Footer'
import Contact from './Components/Contact/Contact'

function App() {

  return (
    <div id='app'>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>

      <Footer />
    </div>
  )
}

export default App
