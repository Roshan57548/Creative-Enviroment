import { useState } from 'react'
import {Route, Routes} from 'react-router-dom'
import './App.css'
import Header from './componants/Header/Header';
import Footer from './componants/Footer/Footer';
import Home from './componants/Home/Home';
import About from './componants/About/About';
import ContactUs from './componants/Contact-Us/ContactUs';
import Services from './componants/Services/Services';
import Environmental_Test_Chambers from './componants/Chamber/Environmental Test Chambers/Chamber';
import Dust_Chambers from './componants/Chamber/Dust Chambers/Chamber';
import Thermal_Shock_Chambers from './componants/Chamber/Thermal Shock Chambers/Chamber';
import Vibration_Chambers from './componants/Chamber/Vibration Chambers/Chamber';
import Industrial_Oven_Dryers from './componants/Chamber/Industrial Oven & Dryers/Chamber';
import Razor_Blades_Chambers from './componants/Chamber/Razor Blades Chambers/Chamber';
import Thermal_Forcing_System from './componants/Chamber/Thermal Forcing System/Chamber';
import Battery_Testing_Chambers from './componants/Chamber/Battery Testing Chambers/Chamber';
import Salt_Spray_Chambers from './componants/Chamber/Salt Spray Chambers/Chamber';
import Rain_Chambers from './componants/Chamber/Rain Chambers/Chamber';
import Altitude_Dryers from './componants/Chamber/Altitude Dryers/Chamber';
import Walk_In_Environmental_Chambers from './componants/Chamber/Walk-In Environmental Chambers/Chamber';
import Industrial_Chambers from './componants/Chamber/Industrial Chambers/Chamber';
import Environmental_Test_Dryers from './componants/Chamber/Environmental Test Dryers/Chamber';
import PV_Modules_Solar_Panels from './componants/Chamber/PV-Modules & Solar Panels/Chamber';
function App() {

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/About-Us' element={<About/>}/>
        <Route path='/Services' element={<Services />}/>
        <Route path='/Contact-Us' element={<ContactUs/>}/>
        {/* Chamber Routes */}
        <Route path='/Environmental-Test-Chambers' element={<Environmental_Test_Chambers/>}/>
        <Route path='/Dust-Chambers' element={<Dust_Chambers/>}/>
        <Route path='/Thermal-Shock-Chambers' element={<Thermal_Shock_Chambers/>}/>
        <Route path='/Vibration-Chambers' element={<Vibration_Chambers/>}/>
        <Route path='/Industrial-Oven-Dryers' element={<Industrial_Oven_Dryers/>}/>
        <Route path='/Razor-Blades-Chambers' element={<Razor_Blades_Chambers/>}/>
        <Route path='/Thermal-Forcing-System' element={<Thermal_Forcing_System/>}/>
        <Route path='/Battery-Testing-Chambers' element={<Battery_Testing_Chambers/>}/>
        <Route path='/Salt-Spray-Chambers' element={<Salt_Spray_Chambers/>}/>
        <Route path='/Rain-Chambers' element={<Rain_Chambers/>}/>
        <Route path='/Altitude-Dryers' element={<Altitude_Dryers/>}/>
        <Route path='/Walk-In-Environmental-Chambers' element={<Walk_In_Environmental_Chambers/>}/>
        <Route path='/Industrial-Chambers' element={<Industrial_Chambers/>}/>
        <Route path='/Environmental-Test-Dryers' element={<Environmental_Test_Dryers/>}/>
        <Route path='/PV-Modules-Solar-Panels' element={<PV_Modules_Solar_Panels/>}/>
      </Routes>
      <Footer />
      
    </div>
  )
}

export default App
