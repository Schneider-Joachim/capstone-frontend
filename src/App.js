// parent page, houses *links*
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './EVNpages/Land';
import EVBenefits from "./EVNpages/EVBenefits";
import Terms from "./EVNpages/Terms"
import Charging from "./EVNpages/Charging";
import ShopEvs from "./EVNpages/ShopEvs";
import News from "./EVNpages/News";
import AboutUs from "./EVNpages/AboutUs";
import Contact from './EVNpages/Contact';

function App() {
  return (
    <div className="App">
      {/* paths to the actual pages end user would see */}
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/EVBenefits" element={<EVBenefits/>}/>
    <Route path="/Terms" element={<Terms/>}/>
    <Route path="/Charging" element={<Charging/>}/>
    <Route path="/ShopEvs" element={<ShopEvs/>}/>
    <Route path="/News" element={<News/>}/>
    <Route path="/AboutUs" element={<AboutUs/>}/>
    <Route path="/Contact" element={Contact}/>
  </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;