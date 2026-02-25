import GlobalProvider from './state/globalProvider'

import About from './pages/About'
import Admin from './pages/Admin'
import Cart from './pages/Cart'
import Catalog from './pages/Catalog'
import Home from './pages/Home'
import NotFound from './pages/NotFound'

import NavBar from './components/NavBar' 
import Footer from './components/Footer'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

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
            <Route path='/cart' element={<Cart/>}></Route>
            <Route path='*' element={<NotFound/>}></Route>
          </Routes>
        <Footer/>
      </BrowserRouter>
    </GlobalProvider>
  )
}

export default App
