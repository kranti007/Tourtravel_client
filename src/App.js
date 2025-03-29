
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import NavBar from './TourTravelProject/NavBar/NavBar';


import Main from './TourTravelProject/Main/Main';
import AboutUs from './TourTravelProject/NavBar/About/AboutUs';
import Inquiry from './TourTravelProject/NavBar/InquiryNow/Inquiry';
import Contact from './TourTravelProject/NavBar/ContactUs/Contact';
import PackageDetails from './TourTravelProject/NavBar/Phase3/PackageDetails';
import PackagesByCity from './TourTravelProject/NavBar/Phase3/PackagesByCity';








function App() {
  return (
    <div>
     <Router>
     <NavBar/>




      <Routes>
        
      <Route path='/' element={<Main />} />
      <Route path='/AboutUs' element={<AboutUs />} />
      <Route path='/Inquiry' element={<Inquiry />} />
      <Route path='/Contact' element={<Contact />} />
      
      
     
      
      <Route path='/packages/:id' element={< PackageDetails/>} />
      <Route path='/packages' element={< PackagesByCity/>} />
          
        
      </Routes>
     </Router>
    </div>
  );
}

export default App;
