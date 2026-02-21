import { BrowserRouter, Routes, Route } from 'react-router-dom'
import GlobalProvider from './state/globalProvider'

import './App.css'
import NavBar from './components/NavBar' 
import Footer from './components/Footer'
import Catalog from './pages/Catalog'
import About from './pages/About'
import Home from './pages/Home'
import Admin from './pages/Admin'
import NotFound from './pages/NotFound'

function App() {
 return (
    <GlobalProvider>
      <BrowserRouter>
        <NavBar/>

          <Routes>
            <Route path='/' element={<Home/>}></Route> 
            <Route path='/about' element={<About/>}></Route>
            <Route path='/catalog' element={<Catalog/>}></Route>
            <Route path='/admin' element={<Admin/>}></Route>
            <Route path='*' element={<NotFound/>}></Route>
          </Routes>
          
        <Footer/>
      </BrowserRouter>
    </GlobalProvider>
  )
}

export default App
