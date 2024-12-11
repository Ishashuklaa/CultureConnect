
import React from 'react';
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

import './App.css';

// function App() {
//   return (
//     <div className="w-screen h-screen relative">
//    <video 
//     src={bgvideo} 
//     autoPlay 
//     loop 
//     muted 
//     className="absolute top-0 left-0 w-full h-full object-cover z-0"
//   >
//   </video>

//     <Router>
//       <div className='relative z-10 w-full h-full'>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/virtual-tour" element={<ExploreIndia/>} />
//           <Route path="/art-gallery" element={<ArtGallery />} /> 
//           <Route path="/language-practice" element={<LanguagePractice />} />
//           <Route path="/cultural-stories" element={<CulturalStories />} />
//           <Route path="/brazil" element={<Brazil/>} />
//           <Route path="/india" element={<India />} />
//         <Route path="/italy" element={<Italy />} />
//         <Route path="/spain" element={<Spain/>} />
//         <Route path="/japan" element={<Japan/>} />
//         </Routes>
//       </div>
//     </Router>

//     </div>
//   );
// }


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
          <Route path="/brazil" element={<Brazil />} />
          <Route path="/india" element={<India />} />
          <Route path="/italy" element={<Italy />} />
          <Route path="/spain" element={<Spain />} />
          <Route path="/japan" element={<Japan />} />
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
