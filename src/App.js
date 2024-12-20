
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import ExploreIndia from './Pages/ExploreIndia';
import LanguagePractice from './components/LanguagePractice';
import CulturalStories from './components/CulturalStories';
import ArtGallery from './Pages/ArtGallery';
import bgvideo from "./assests/bgvideo.mp4"
import { useLocation } from 'react-router-dom';
import MpPage from './Pages/States/MadhyaPradesh/MpPage';

import './App.css';


function AppContent() {
  const location = useLocation();

  return (
    <div className="w-screen h-screen relative">
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
          <Route path="/virtual-tour" element={<ExploreIndia />} />
          <Route path="/language-practice" element={<LanguagePractice />} />
          <Route path="/cultural-stories" element={<CulturalStories />} />
          <Route path="/art-gallery" element={<ArtGallery />} />
          <Route path="/madhya-pradesh" element={<MpPage />} />
        </Routes>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
