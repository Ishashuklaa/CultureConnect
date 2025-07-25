
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import ExploreIndia from './components/ExploreIndia';
import VirtualTour from './components/VirtualTour';
import LanguagePractice from './components/LanguagePractice';
import CulturalStories from './components/CulturalStories';
import Brazil from './components/Brazil';
import India from './components/India';
import Italy from './components/Italy';
import Spain from './components/Spain';
import Japan from './components/Japan';
import ArtGallery from './components/ArtGallery';
import bgvideo from "./assests/bgvideo.mp4"
import { useLocation } from 'react-router-dom';
import MpPage from './components/MpPage';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import UpPage from './components/UpPage';
import './App.css';
import UploadProduct from './Pages/UploadProduct';
import Cart from './Pages/Cart';

import React, { useEffect, useState } from 'react';



import Shop from './Pages/Shop'; // ✅ Import the Shop page


function AppContent({ user }) {
  const location = useLocation();

  return (
    <div className="w-screen h-screen relative overflow-x-hidden">
      {/* Conditionally render the video only on the Home page */}
      {location.pathname === "/" && (
        <video 
          src={bgvideo} 
          autoPlay 
          loop 
          muted 
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        />
      )}

      <div className='relative z-10 w-full h-full'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/virtual-tour" element={<ExploreIndia />} />
          <Route path="/language-practice" element={<LanguagePractice />} />
          <Route path="/cultural-stories" element={<CulturalStories />} />
          <Route path="/brazil" element={<Brazil />} />
          <Route path="/india" element={<India />} />
          <Route path="/italy" element={<Italy />} />
          <Route path="/spain" element={<Spain />} />
          <Route path="/japan" element={<Japan />} />
          <Route path="/art-gallery" element={<ArtGallery />} />
          <Route path="/madhya-pradesh" element={<MpPage />} />
          <Route path="/uttar-pradesh" element={<UpPage />} />
          <Route path="/shop" element={<Shop user={user} />} /> {/* ✅ Shop route */}
          <Route path="/upload-product" element={<UploadProduct user={user} />} />
<Route path="/cart" element={<Cart user={user} />} />

        </Routes>
      </div>
    </div>
  );
}

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Optional: Load user from localStorage
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <Router>
      <AppContent user={user} />
    </Router>
  );
}

export default App;
