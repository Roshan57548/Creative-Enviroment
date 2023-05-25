import { useState } from 'react'
import { useEffect } from 'react';
import {Route, Routes} from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import './App.css'
import Header from './componants/Header/Header2';
import Footer from './componants/Footer/Footer';
import Home from './componants/Home/Home';
import About from './componants/About/About';
import OurPartners from './componants/Our-Partners/OurPartners';
import ContactUs from './componants/Contact-Us/ContactUs';
import Services from './componants/Services/Services';
import Apply from './componants/WhatsApp-Chat/Apply';
import Enquiry from './componants/Apply-Now/Apply';
import NoPage from './componants/404/NoPage'
{/* Chamber Routes */}
import Environmental_Test_Chambers from './componants/Product/Chamber/Environmental Test Chambers/Chamber';
import Dust_Chambers from './componants/Product/Chamber/Dust Chambers/Chamber';
import Thermal_Shock_Chambers from './componants/Product/Chamber/Thermal Shock Chambers/Chamber';
import Vibration_Chambers from './componants/Product/Chamber/Vibration Chambers/Chamber';
import Industrial_Oven_Dryers from './componants/Product/Chamber/Industrial Oven & Dryers/Chamber';
import Razor_Blades_Chambers from './componants/Product/Chamber/Razor Blades Chambers/Chamber';
import Thermal_Forcing_System from './componants/Product/Chamber/Thermal Forcing System/Chamber';
import Battery_Testing_Chambers from './componants/Product/Chamber/Battery Testing Chambers/Chamber';
import Salt_Spray_Chambers from './componants/Product/Chamber/Salt Spray Chambers/Chamber';
import Rain_Chambers from './componants/Product/Chamber/Rain Chambers/Chamber';
import Altitude_Dryers from './componants/Product/Chamber/Altitude Dryers/Chamber';
import Walk_In_Environmental_Chambers from './componants/Product/Chamber/Walk-In Environmental Chambers/Chamber';
import Industrial_Chambers from './componants/Product/Chamber/Industrial Chambers/Chamber';
import Environmental_Test_Dryers from './componants/Product/Chamber/Environmental Test Dryers/Chamber';
import PV_Modules_Solar_Panels from './componants/Product/Chamber/PV-Modules & Solar Panels/Chamber';
{/* Vibration Routes */}
import Air_Cooled_CEV_125_Series from './componants/Product/Vibration/Air Cooled CEV 125 Series/Vibration';
import Air_Cooled_CEV_140_Series from './componants/Product/Vibration/Air Cooled CEV 140 Series/Vibration';
import Air_Cooled_CEV_180_Series from './componants/Product/Vibration/Air Cooled CEV 180 Series/Vibration';
import Air_Cooled_CEV_240_Series from './componants/Product/Vibration/Air Cooled CEV 240 Series/Vibration';
import Air_Cooled_CEV_300_Series from './componants/Product/Vibration/Air Cooled CEV 300 Series/Vibration';
import Air_Cooled_CEV_360_Series from './componants/Product/Vibration/Air Cooled CEV 360 Series/Vibration';
import Air_Cooled_CEV_440_Series from './componants/Product/Vibration/Air Cooled CEV 440 Series/Vibration';
import Air_Cooled_CEV_440A_Series from './componants/Product/Vibration/Air Cooled CEV 440A Series/Vibration';
import Air_Cooled_Series from './componants/Product/Vibration/Air Cooled Series/Vibration';
import Electrodynamic_Vibration_Shaker_System from './componants/Product/Vibration/Electrodynamic Vibration Shaker System/Vibration';
import Head_Expander from './componants/Product/Vibration/Head Expander/Vibration';
import Power_Amplifier from './componants/Product/Vibration/Power Amplifier/Vibration';
import Vibration_Controller from './componants/Product/Vibration/Vibration Controller/Vibration';
import Water_Cooled_CEV_500_Series from './componants/Product/Vibration/Water Cooled CEV 500 Series/Vibration';
import Water_Cooled_CEV_590_Series from './componants/Product/Vibration/Water Cooled CEV 590 Series/Vibration';
import Water_Cooled_CEV_760_Series from './componants/Product/Vibration/Water Cooled CEV 760 Series/Vibration';
import Water_Cooled_Series from './componants/Product/Vibration/Water Cooled Series/Vibration';
{/* Other Product Routes */}
import Centrifuge_Acceleration_Test_Machine from './componants/Product/Other Categories/Centrifuge Acceleration Test Machine/OtherProduct';
import Bump_Test_Machine from './componants/Product/Other Categories/Bump Test Machine/OtherProduct';
import Integrated_Environmental_Chamber from './componants/Product/Other Categories/Integrated Environmental Chamber/OtherProduct';
import Pneumatic_Shock_Testing_Machine from './componants/Product/Other Categories/Pneumatic Shock Testing Machine/OtherProduct';
import Underwater_Acoustic_Test_Capabilities from './componants/Product/Other Categories/Underwater Acoustic Test Capabilities/OtherProduct';
function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/About-Us' element={<About/>}/>
        <Route path='/Services' element={<Services />}/>
        <Route path='/Contact-Us' element={<ContactUs/>}/>
        <Route path='/Industries' element={<OurPartners/>}/>
        <Route path="*" element={<NoPage></NoPage>} />
        {/* Chamber Routes */}
        <Route path='/Chamber/Environmental-Test-Chambers' element={<Environmental_Test_Chambers/>}/>
        <Route path='/Chamber/Dust-Chambers' element={<Dust_Chambers/>}/>
        <Route path='/Chamber/Thermal-Shock-Chambers' element={<Thermal_Shock_Chambers/>}/>
        <Route path='/Chamber/Vibration-Chambers' element={<Vibration_Chambers/>}/>
        <Route path='/Chamber/Industrial-Oven-Dryers' element={<Industrial_Oven_Dryers/>}/>
        <Route path='/Chamber/Razor-Blades-Chambers' element={<Razor_Blades_Chambers/>}/>
        <Route path='/Chamber/Thermal-Forcing-System' element={<Thermal_Forcing_System/>}/>
        <Route path='/Chamber/Battery-Testing-Chambers' element={<Battery_Testing_Chambers/>}/>
        <Route path='/Chamber/Salt-Spray-Chambers' element={<Salt_Spray_Chambers/>}/>
        <Route path='/Chamber/Rain-Chambers' element={<Rain_Chambers/>}/>
        <Route path='/Chamber/Altitude-Dryers' element={<Altitude_Dryers/>}/>
        <Route path='/Chamber/Walk-In-Environmental-Chambers' element={<Walk_In_Environmental_Chambers/>}/>
        <Route path='/Chamber/Industrial-Chambers' element={<Industrial_Chambers/>}/>
        <Route path='/Chamber/Environmental-Test-Dryers' element={<Environmental_Test_Dryers/>}/>
        <Route path='/Chamber/PV-Modules-Solar-Panels' element={<PV_Modules_Solar_Panels/>}/>
        {/* Vibration Routes */}
        <Route path='/Vibration/Air-Cooled-CEV-125-Series' element={<Air_Cooled_CEV_125_Series/>}/>
        <Route path='/Vibration/Air-Cooled-CEV-140-Series' element={<Air_Cooled_CEV_140_Series/>}/>
        <Route path='/Vibration/Air-Cooled-CEV-180-Series' element={<Air_Cooled_CEV_180_Series/>}/>
        <Route path='/Vibration/Air-Cooled-CEV-240-Series' element={<Air_Cooled_CEV_240_Series/>}/>
        <Route path='/Vibration/Air-Cooled-CEV-300-Series' element={<Air_Cooled_CEV_300_Series/>}/>
        <Route path='/Vibration/Air-Cooled-CEV-360-Series' element={<Air_Cooled_CEV_360_Series/>}/>
        <Route path='/Vibration/Air-Cooled-CEV-440-Series' element={<Air_Cooled_CEV_440_Series/>}/>
        <Route path='/Vibration/Air-Cooled-CEV-440A-Series' element={<Air_Cooled_CEV_440A_Series/>}/>
        <Route path='/Vibration/Air-Cooled-Series' element={<Air_Cooled_Series/>}/>
        <Route path='/Vibration/Electrodynamic-Vibration-Shaker-System' element={<Electrodynamic_Vibration_Shaker_System/>}/>
        <Route path='/Vibration/Head-Expander' element={<Head_Expander/>}/>
        <Route path='/Vibration/Power-Amplifier' element={<Power_Amplifier/>}/>
        <Route path='/Vibration/Vibration-Controller' element={<Vibration_Controller/>}/>
        <Route path='/Vibration/Water-Cooled-CEV-500-Series' element={<Water_Cooled_CEV_500_Series/>}/>
        <Route path='/Vibration/Water-Cooled-CEV-590-Series' element={<Water_Cooled_CEV_590_Series/>}/>
        <Route path='/Vibration/Water-Cooled-CEV-760-Series' element={<Water_Cooled_CEV_760_Series/>}/>
        <Route path='/Vibration/Water-Cooled-Series' element={<Water_Cooled_Series/>}/>
        {/* Other Product Routes */}
        <Route path='/Other-Categories/Centrifuge-Acceleration-Test-Machine' element={<Centrifuge_Acceleration_Test_Machine/>}/>
        <Route path='/Other-Categories/Bump-Test-Machine' element={<Bump_Test_Machine/>}/>
        <Route path='/Other-Categories/Integrated-Environmental-Chamber' element={<Integrated_Environmental_Chamber/>}/>
        <Route path='/Other-Categories/Pneumatic-Shock-Testing-Machine' element={<Pneumatic_Shock_Testing_Machine/>}/>
        <Route path='/Other-Categories/Underwater-Acoustic-Test-Capabilities' element={<Underwater_Acoustic_Test_Capabilities/>}/>
      </Routes>
      <Apply />
      <Enquiry />
      <Footer />
      
    </div>
  )
}

export default App
