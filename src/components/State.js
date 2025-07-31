import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from './Navbar';  // Import Navbar component
import Footer from './Footer';
import '../Pages/ExploreIndia.css';


const State = () => {
    const states = [
        { name: 'Madhya Pradesh', imgSrc: 'https://www.humsamvet.com/uploads/images/2023/04/image_1200x675_643565540270b.jpg', description: 'Explore Madhya Pradesh.' },
        { name: 'Kerala', imgSrc: 'http://www.mnkindustry.com/wp-content/uploads/2017/11/dsc_0667.jpg', description: 'Discover Kerala.' },
        { name: 'Maharashtra', imgSrc: 'https://rooftopapp.com/wp-content/uploads/2023/04/Tribal-Art-3.jpg', description: 'Explore Maharashtra.' },
        { name: 'Rajasthan', imgSrc: 'https://routeprints.com/wp-content/uploads/2019/05/Rajasthan-Tradition-1.png', description: 'Discover Rajasthan.' },
        { name: 'Tamil Nadu', imgSrc: 'https://i.pinimg.com/originals/1a/46/87/1a46879a050f9d5cb30acbc4fa4c9018.jpg', description: 'Explore Tamil Nadu.' },
        { name: 'Himachal Pradesh', imgSrc: 'https://usercontent2.hubstatic.com/8590865_f260.jpg', description: 'Discover Himachal Pradesh.' },
        { name: 'Uttar Pradesh', imgSrc: 'https://www.humsamvet.com/uploads/images/2023/04/image_1200x675_643565540270b.jpg', description: 'Explore Uttar Pradesh.' },
    ];


    return (
      <div>
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
            <h3>{state.name}</h3>
            <p>{state.description}</p>
          </motion.div>
        ))}
      </div>

<Footer />
</div>

    );
  
};

export default State;