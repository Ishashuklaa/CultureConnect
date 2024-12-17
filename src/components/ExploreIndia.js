import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import ArtGallery from './ArtGallery'; 
import Footer from './Footer';
import './ExploreIndia.css';
import State from './State';
import CardList from './CardList';
// index.js or App.js
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TextileCategoriesWheel from './TextileCategoriesWheel.js';
import Slider from "react-slick";
import { Link } from 'react-router-dom';


const ExploreIndia = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [festivalSlide, setFestivalSlide] = useState(0);

  useEffect(() => {
    const element = document.getElementById('header-text');
    if (element) {
      scrambleText(element, "Explore India Virtually!", 2000, 50);
    }

    const slideInterval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % culturalPlaces.length);
    }, 3000);

    return () => clearInterval(slideInterval);
  }, []);

  function scrambleText(element, newText, duration, scrambleSpeed) {
    const oldText = element.textContent;
    const maxLength = Math.max(oldText.length, newText.length);
    const scrambleChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let scrambleInterval;
    let startTime;

    function scramble() {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const updatedText = newText.split('').map((char, index) => {
        if (index < progress * newText.length) {
          return char;
        }
        const randomChar = scrambleChars[Math.floor(Math.random() * scrambleChars.length)];
        return randomChar;
      }).join('');

      element.textContent = updatedText;

      if (progress === 1) {
        clearInterval(scrambleInterval);
        element.textContent = newText;
      }
    }

    function startScrambling() {
      startTime = Date.now();
      scrambleInterval = setInterval(scramble, scrambleSpeed);
    }

    startScrambling();
  }


  const states = [
    { name: 'Madhya Pradesh', imgSrc: 'https://www.humsamvet.com/uploads/images/2023/04/image_1200x675_643565540270b.jpg', description: 'Explore Madhya Pradesh.', link: '/madhya-pradesh'},
    { name: 'Kerala', imgSrc: 'http://www.mnkindustry.com/wp-content/uploads/2017/11/dsc_0667.jpg', description: 'Discover Kerala.' },
    { name: 'Maharashtra', imgSrc: 'https://rooftopapp.com/wp-content/uploads/2023/04/Tribal-Art-3.jpg', description: 'Explore Maharashtra.' },
    { name: 'Rajasthan', imgSrc: 'https://routeprints.com/wp-content/uploads/2019/05/Rajasthan-Tradition-1.png', description: 'Discover Rajasthan.' },
    { name: 'Tamil Nadu', imgSrc: 'https://i.pinimg.com/originals/1a/46/87/1a46879a050f9d5cb30acbc4fa4c9018.jpg', description: 'Explore Tamil Nadu.' },
    { name: 'Himachal Pradesh', imgSrc: 'https://usercontent2.hubstatic.com/8590865_f260.jpg', description: 'Discover Himachal Pradesh.' },
  ];

  const culturalPlaces = [
    { name: 'Taj Mahal', imgSrc: 'https://cdn.mos.cms.futurecdn.net/asMq6cVwZsckf8sGUaRJU4.jpg', description: 'Iconic symbol of love.' },
    { name: 'Jaipur City Palace', imgSrc: 'https://media.istockphoto.com/photos/jaipur-india-chandra-mahal-palace-within-the-city-palace-picture-id487804438?k=20&m=487804438&s=612x612&w=0&h=dzYikOteZfg0v95m02ScGsf5CXR1bDBYXNeqT4gSguk=', description: 'Royal grandeur of Jaipur.' },
    { name: 'Mathura Temple', imgSrc: 'https://www.laurewanders.com/wp-content/uploads/2023/11/Cultural-destinations-in-India-10.jpg', description: 'Birthplace of Lord Krishna.' },
    { name: 'Meenakshi Temple', imgSrc: 'https://www.laurewanders.com/wp-content/uploads/2023/06/Things-to-do-in-Madurai-92.jpg', description: 'Best Swachh Iconic Place.' },
  ];

  const festivals = [
    { name: 'Diwali', imgSrc: 'https://images.lifestyleasia.com/wp-content/uploads/sites/7/2022/10/10141531/bandi-chhor-divas.jpeg', description: 'Festival of lights celebrated with fireworks and sweets.' },
    { name: 'Holi', imgSrc: 'https://images.livemint.com/img/2023/03/06/1600x900/holi_2023_1678076615866_1678076616058_1678076616058.jpg', description: 'Festival of colors.' },
    { name: 'Pongal', imgSrc: 'https://thefederal.com/h-upload/2024/01/12/392474-pongal.webp', description: 'Harvest festival celebrated in South India.' },
    { name: 'Navratri', imgSrc: 'https://english.cdn.zeenews.com/sites/default/files/2023/10/15/1299249-navratri-garba.png', description: 'Durga Puja and Dussehra.' },
    { name: 'Ganesh Chaturthi', imgSrc: 'https://images.news18.com/ibnlive/uploads/2022/08/ganesh-chaturthi-2022-rituals-1-166177702116x9.jpg', description: 'The spectacular 11-day Ganesh Chaturthi festival.' },
    { name: 'Bihu', imgSrc: 'https://devlibrary.in/wp-content/uploads/2023/03/bihu-wishes.png', description: ' Bihu is a popular Assamese festival.' },
    
  ];

  const handlePrevFestival = () => {
    setFestivalSlide((prevSlide) => (prevSlide === 0 ? festivals.length - 1 : prevSlide - 3));
  };

  const handleNextFestival = () => {
    setFestivalSlide((prevSlide) => (prevSlide + 3) % festivals.length);
  };

  return (
    <div className='explore-bod'>
     <div>
     <Navbar />
      
      <Routes>
        <Route path="/art-gallery" element={<ArtGallery />} />
        
      </Routes> 
      </div>
      
    <section id="explore-india">
  <h2 id="header-text">Explore India</h2>

  <div className="state-cards">
    
    {states.map((state, index) => (
      <motion.div
        key={index}
        className="state-card"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 * index }}
      >
        <img src={state.imgSrc} alt={state.name} />
        <Link to={state.link}><h3>{state.name}</h3></Link> 
        <p>{state.description}</p>
      </motion.div>
    ))}
  </div>

  <div className="view-all-states-section">
    <a href="/state" className="view-all-states-link">
      <div className="view-all-states">
        <p>View All States</p>
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="feather feather-arrow-right-circle"
          whileHover={{ x: 10 }}
          transition={{ duration: 0.6 }}
        >
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 16 16 12 12 8" />
          <line x1="8" y1="12" x2="16" y2="12" />
        </motion.svg>
      </div>
    </a>
  </div>

  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
    className="cultural-places-slider"
  >
    <div className="slider-item">
      <img src={culturalPlaces[currentSlide].imgSrc} alt={culturalPlaces[currentSlide].name} />
      <div className="slider-text">
        <h3>{culturalPlaces[currentSlide].name}</h3>
        <p>{culturalPlaces[currentSlide].description}</p>
      </div>
    </div>
  </motion.div>


  <div>
        <TextileCategoriesWheel/>
      </div>

        <section>
          <CardList/>
        </section>
        
</section>
      <Footer />
    </div>
  );
};

export default ExploreIndia;