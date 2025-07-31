
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import ExploreIndia from './Pages/ExploreIndia';
import LanguagePractice from './components/LanguagePractice';
import CulturalStories from './components/CulturalStories';
import ArtGallery from './Pages/ArtGallery';
import bgvideo from "./assests/bgvideo.mp4"
import { useLocation } from 'react-router-dom';
<<<<<<< HEAD
import MpPage from './Pages/States/MadhyaPradesh/MpPage';

=======
import MpPage from './components/MpPage';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import UpPage from './components/UpPage';
>>>>>>> Ishaa
import './App.css';
import UploadProduct from './Pages/UploadProduct';
import Cart from './Pages/Cart';

<<<<<<< HEAD
=======
import React, { useEffect, useState } from 'react';

>>>>>>> Ishaa


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
