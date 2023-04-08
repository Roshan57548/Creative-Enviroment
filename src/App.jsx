import { useState } from 'react'
import {Route, Routes} from 'react-router-dom'
import './App.css'
import Header from './componants/Header/Header';
import Footer from './componants/Footer/Footer';
import Home from './componants/Home/Home';
import About from './componants/About/About';
import ContactUs from './componants/Contact-Us/ContactUs';
import Products from './componants/Products/Products';
import Services from './componants/Services/Services';
function App() {

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/About-Us' element={<About/>}/>
        <Route path='/Products' element={<Products />}/>
        <Route path='/Services' element={<Services />}/>
        <Route path='/Contact-Us' element={<ContactUs/>}/>
      </Routes>
      <Footer />
      
    </div>
  )
}

export default App
