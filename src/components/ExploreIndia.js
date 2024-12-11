
// import React, { useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import './VirtualTour.css';

// const VirtualTour = () => {
//   useEffect(() => {
//     const element = document.getElementById('testt');
//     if (element) {
//       scrambleText(element, "Explore the World Virtually!", 2000, 50);
//     }
//   }, []);

//   function scrambleText(element, newText, duration, scrambleSpeed) {
//     const oldText = element.textContent;
//     const maxLength = Math.max(oldText.length, newText.length);
//     const scrambleChars = 'Wanna Explore the World?';
    
//     let scrambleInterval;
//     let startTime;

//     function scramble() {
//         const elapsed = Date.now() - startTime;
//         const progress = Math.min(elapsed / duration, 1);
//         const updatedText = newText.split('').map((char, index) => {
//             if (index < progress * newText.length) {
//                 return char;
//             }
//             const randomChar = scrambleChars[Math.floor(Math.random() * scrambleChars.length)];
//             return randomChar;
//         }).join('');
        
//         element.textContent = updatedText;
        
//         if (progress === 1) {
//             clearInterval(scrambleInterval);
//             element.textContent = newText;
//         }
//     }

//     function startScrambling() {
//         startTime = Date.now();
//         scrambleInterval = setInterval(scramble, scrambleSpeed);
//     }

//     startScrambling();
//   }

//   return (
//     <div>
//       <header>
//         <div className="logo">CultureConnect</div>
//         <nav>
//           <ul>
//             <li><Link to="/">Home</Link></li>
//             <li><Link to="/virtual-tour">Virtual Tour</Link></li>
//             <li><Link to="/language-practice">Language Practice</Link></li>
//             <li><Link to="/cultural-stories">Cultural Stories</Link></li>
//           </ul>
//         </nav>
//       </header>

//       <section id="virtual-tour">
//         <h2 id="testt">Wanna Explore the World</h2>

//         <div className="tour-content">
//           {
//              <section id="features">
//              <div className="feature" id="feature-tour">
//                <img src="https://allthatsinteresting.com/wordpress/wp-content/uploads/2015/02/rio-de-janeiro-carnival-incredible.jpg" alt="Virtual Tour" />
//                <h3>Brazil</h3>
//                <p>Experience the vibrant colors and rhythms of Carnival.</p>
//              </div>
//              <div className="feature" id="feature-language">
//                <img src="https://www.tripsavvy.com/thmb/68Wzh35v7kY28ypwbtiF2B8xTQI=/2116x1417/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-535155562-5931223e3df78c08aba1a24c.jpg" alt="Language Practice" />
//                <h3>India</h3>
//                <p>Discover the heritage, traditions, and arts of various regions and communities of India.</p>
//              </div>
//              <div className="feature" id="feature-stories">
//                <img src="https://www.helitaly.com/wp-content/uploads/venice-carnival-festival.jpg" alt="Cultural Stories" />
//                <h3>Italy</h3>
//                <p>Learn about the food, holidays, family, wedding, carnival, and festival traditions that make Italian culture so special. </p>
//              </div>
//              <div className="feature" id="feature-tour">
//                <img src="https://res.cloudinary.com/enchanting/f_auto,q_70,w_900,h_490,c_fill/et-web/2020/03/bullfight-in-spain.jpg" alt="Virtual Tour" />
//                <h3>Spain</h3>
//                <p>Spain - Culture, Cuisine, Traditions.</p>
//              </div>
//              <div className="feature" id="feature-language">
//                <img src="https://mnlop.com.ph/wp-content/uploads/2019/08/japan-culture.jpg" alt="Language Practice" />
//                <h3>Japan</h3>
//                <p>Japanese culture is based on social harmony, respect for nature, collective responsibility, and hard work.</p>
//              </div>
//              <div className="feature" id="feature-stories">
//                <img src="https://www.helitaly.com/wp-content/uploads/venice-carnival-festival.jpg" alt="Cultural Stories" />
//                <h3>Italy</h3>
//                <p>Learn about the food, holidays, family, wedding, carnival, and festival traditions that make Italian culture so special. </p>
//              </div>
//              <div className="feature" id="feature-tour">
//                <img src="https://allthatsinteresting.com/wordpress/wp-content/uploads/2015/02/rio-de-janeiro-carnival-incredible.jpg" alt="Virtual Tour" />
//                <h3>Brazil</h3>
//                <p>Experience the vibrant colors and rhythms of Carnival.</p>
//              </div>
//              <div className="feature" id="feature-language">
//                <img src="https://www.tripsavvy.com/thmb/68Wzh35v7kY28ypwbtiF2B8xTQI=/2116x1417/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-535155562-5931223e3df78c08aba1a24c.jpg" alt="Language Practice" />
//                <h3>India</h3>
//                <p>Discover the heritage, traditions, and arts of various regions and communities of India.</p>
//              </div>
//              <div className="feature" id="feature-stories">
//                <img src="https://www.helitaly.com/wp-content/uploads/venice-carnival-festival.jpg" alt="Cultural Stories" />
//                <h3>Italy</h3>
//                <p>Learn about the food, holidays, family, wedding, carnival, and festival traditions that make Italian culture so special. </p>
//              </div>
//            </section>
        
//           }
//         </div>
//       </section>

//       <footer>
//         <p>&copy; 2024 CultureConnect</p>
//       </footer>
//     </div>
//   );
// };

// export default VirtualTour;




// import React, { useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import './ExploreIndia.css'; // Update the CSS file name
// import { motion } from 'framer-motion'; // Import framer-motion for animations

// const ExploreIndia = () => {
//   useEffect(() => {
//     const element = document.getElementById('header-text');
//     if (element) {
//       scrambleText(element, "Explore India Virtually!", 2000, 50);
//     }
//   }, []);

//   function scrambleText(element, newText, duration, scrambleSpeed) {
//     const oldText = element.textContent;
//     const maxLength = Math.max(oldText.length, newText.length);
//     const scrambleChars = 'Explore India Virtually';
    
//     let scrambleInterval;
//     let startTime;

//     function scramble() {
//       const elapsed = Date.now() - startTime;
//       const progress = Math.min(elapsed / duration, 1);
//       const updatedText = newText.split('').map((char, index) => {
//         if (index < progress * newText.length) {
//           return char;
//         }
//         const randomChar = scrambleChars[Math.floor(Math.random() * scrambleChars.length)];
//         return randomChar;
//       }).join('');
      
//       element.textContent = updatedText;
      
//       if (progress === 1) {
//         clearInterval(scrambleInterval);
//         element.textContent = newText;
//       }
//     }

//     function startScrambling() {
//       startTime = Date.now();
//       scrambleInterval = setInterval(scramble, scrambleSpeed);
//     }

//     startScrambling();
//   }

//   const states = [
//     { name: 'Maharashtra', imgSrc: 'http://vignette2.wikia.nocookie.net/travel/images/c/ce/Maharashtra_Highlights.jpg/revision/latest?cb=20100409143301&path-prefix=en', description: 'Explore the rich culture of Maharashtra.' },
//     { name: 'Kerala', imgSrc: 'https://link-to-kerala-image.jpg', description: 'Discover God\'s Own Country.' },
//     // Add more states here...
//   ];

//   return (
//     <div className='bodyy'>
//       <header>
//         <div className="logo">CultureConnect</div>
//         <nav>
//           <ul>
//             <li><Link to="/">Home</Link></li>
//             <li><Link to="/explore-india">Explore India</Link></li>
//           </ul>
//         </nav>
//       </header>

//       <section id="explore-india">
//         <h2 id="header-text">Explore India</h2>



// <motion.div
//   initial={{ opacity: 0, y: 50 }}
//   animate={{ opacity: 1, y: 0 }}
//   transition={{ duration: 1 }}
//   className="india-intro"
// >
//   <p>India is a land of diversity, with rich cultural heritage, traditions, and vibrant history. From the Himalayas in the north to the coastal regions in the south, every state has its unique flavor and charm.</p>
  
 
//   <div className="intro-media">
//   <iframe 
//     width="100%" 
//     height="100%" 
//     src="https://www.youtube.com/embed/1K4fL_P5rQI?autoplay=1&loop=1&playlist=1K4fL_P5rQI" 
//     title="YouTube video player" 
//     frameBorder="0" 
//     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
//     allowFullScreen={true} 
//     className="intro-video"
//   ></iframe>
// </div>

// </motion.div>




//         {/* State Cards Section */}
//         <div className="state-cards">
//           {states.map((state, index) => (
//             <motion.div
//               key={index}
//               className="state-card"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.1 * index }}
//             >
//               <img src={state.imgSrc} alt={state.name} />
//               <h3>{state.name}</h3>
//               <p>{state.description}</p>
//             </motion.div>
//           ))}
//         </div>
//       </section>

//       <footer>
//         <p>&copy; 2024 CultureConnect. All rights reserved.</p>
//         <p>Designed by Isha Shukla</p>
//       </footer>
//     </div>
//   );
// };

// export default ExploreIndia;



// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import './ExploreIndia.css';
// import Header from './Header';
// import Footer from './Footer';
// import { motion } from 'framer-motion';

// const ExploreIndia = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   useEffect(() => {
//     const element = document.getElementById('header-text');
//     if (element) {
//       scrambleText(element, "Explore India Virtually!", 2000, 50);
//     }

//     const slideInterval = setInterval(() => {
//       setCurrentSlide((prevSlide) => (prevSlide + 1) % culturalPlaces.length);
//     }, 3000); // Auto-slide every 3 seconds

//     return () => clearInterval(slideInterval);
//   }, []);

//   function scrambleText(element, newText, duration, scrambleSpeed) {
//     const oldText = element.textContent;
//     const maxLength = Math.max(oldText.length, newText.length);
//     const scrambleChars = 'Explore India Virtually';
    
//     let scrambleInterval;
//     let startTime;

//     function scramble() {
//       const elapsed = Date.now() - startTime;
//       const progress = Math.min(elapsed / duration, 1);
//       const updatedText = newText.split('').map((char, index) => {
//         if (index < progress * newText.length) {
//           return char;
//         }
//         const randomChar = scrambleChars[Math.floor(Math.random() * scrambleChars.length)];
//         return randomChar;
//       }).join('');
      
//       element.textContent = updatedText;
      
//       if (progress === 1) {
//         clearInterval(scrambleInterval);
//         element.textContent = newText;
//       }
//     }

//     function startScrambling() {
//       startTime = Date.now();
//       scrambleInterval = setInterval(scramble, scrambleSpeed);
//     }

//     startScrambling();
//   }

//   const states = [
//     { name: 'Madhya Pradesh', imgSrc: 'https://www.humsamvet.com/uploads/images/2023/04/image_1200x675_643565540270b.jpg', description: 'Explore Maharashtra.' },
//     { name: 'Kerala', imgSrc: 'http://www.mnkindustry.com/wp-content/uploads/2017/11/dsc_0667.jpg', description: 'Discover Kerala.' },
//     { name: 'Maharashtra', imgSrc: 'https://rooftopapp.com/wp-content/uploads/2023/04/Tribal-Art-3.jpg', description: 'Explore Maharashtra.' },
//     { name: 'Rajasthan', imgSrc: 'https://routeprints.com/wp-content/uploads/2019/05/Rajasthan-Tradition-1.png', description: 'Discover Kerala.' },
//     { name: 'Tamil Nadu', imgSrc: 'https://i.pinimg.com/originals/1a/46/87/1a46879a050f9d5cb30acbc4fa4c9018.jpg', description: 'Explore Maharashtra.' },
//     { name: 'Himachal Pradesh', imgSrc: 'https://usercontent2.hubstatic.com/8590865_f260.jpg', description: 'Discover Kerala.' },
//     { name: 'Maharashtra', imgSrc: 'https://link-to-maharashtra-image.jpg', description: 'Explore Maharashtra.' },
//     { name: 'Kerala', imgSrc: 'https://link-to-kerala-image.jpg', description: 'Discover Kerala.' },
//   ];

//   const culturalPlaces = [
//     { name: 'Taj Mahal', imgSrc: 'https://cdn.mos.cms.futurecdn.net/asMq6cVwZsckf8sGUaRJU4.jpg', description: 'Iconic symbol of love.' },
//     { name: 'Jaipur City Palace', imgSrc: 'https://media.istockphoto.com/photos/jaipur-india-chandra-mahal-palace-within-the-city-palace-picture-id487804438?k=20&m=487804438&s=612x612&w=0&h=dzYikOteZfg0v95m02ScGsf5CXR1bDBYXNeqT4gSguk=', description: 'Royal grandeur of Jaipur.' },
//     { name: 'Mathura Temple', imgSrc: 'https://www.laurewanders.com/wp-content/uploads/2023/11/Cultural-destinations-in-India-10.jpg', description: 'Birthplace of Lord Krishna.' },
//     { name: 'Meenakshi Temple', imgSrc: 'https://www.laurewanders.com/wp-content/uploads/2023/06/Things-to-do-in-Madurai-92.jpg', description: 'Best Swachh Iconic Place.' },
//   ];

//   return (
//     <div className='explore-body'>
//       <Header/>

//       <section id="explore-india">
//         <h2 id="header-text">Explore India</h2>

//         <div className="state-cards">
//           {states.map((state, index) => (
//             <motion.div
//               key={index}
//               className="state-card"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.1 * index }}
//             >
//               <img src={state.imgSrc} alt={state.name} />
//               <h3>{state.name}</h3>
//               <p>{state.description}</p>
//             </motion.div>
//           ))}
//         </div>

//         {/* Larger Centered Image Slider */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 1 }}
//           className="cultural-places-slider"
//         >
//           <div className="slider-item">
//             <img src={culturalPlaces[currentSlide].imgSrc} alt={culturalPlaces[currentSlide].name} />
//             <div className="slider-text">
//               <h3>{culturalPlaces[currentSlide].name}</h3>
//               <p>{culturalPlaces[currentSlide].description}</p>
//             </div>
//           </div>
//         </motion.div>

//         {/* State Cards Section */}
       
//       </section>

//       <Footer/>
//     </div>
//   );
// };

// export default ExploreIndia;











// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import './ExploreIndia.css';
// import Header from './Header';
// import Footer from './Footer';
// import { motion } from 'framer-motion';
// import Navbar from './Navbar';  // Import the Navbar

// const ExploreIndia = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   useEffect(() => {
//     const element = document.getElementById('header-text');
//     if (element) {
//       scrambleText(element, "Explore India Virtually!", 2000, 50);
//     }

//     const slideInterval = setInterval(() => {
//       setCurrentSlide((prevSlide) => (prevSlide + 1) % culturalPlaces.length);
//     }, 3000); // Auto-slide every 3 seconds

//     return () => clearInterval(slideInterval);
//   }, []);
//   function scrambleText(element, newText, duration, scrambleSpeed) {
//         const oldText = element.textContent;
//         const maxLength = Math.max(oldText.length, newText.length);
//         const scrambleChars = 'Explore India Virtually';
        
//         let scrambleInterval;
//         let startTime;
    
//         function scramble() {
//           const elapsed = Date.now() - startTime;
//           const progress = Math.min(elapsed / duration, 1);
//           const updatedText = newText.split('').map((char, index) => {
//             if (index < progress * newText.length) {
//               return char;
//             }
//             const randomChar = scrambleChars[Math.floor(Math.random() * scrambleChars.length)];
//             return randomChar;
//           }).join('');
          
//           element.textContent = updatedText;
          
//           if (progress === 1) {
//             clearInterval(scrambleInterval);
//             element.textContent = newText;
//           }
//         }
    
//         function startScrambling() {
//           startTime = Date.now();
//           scrambleInterval = setInterval(scramble, scrambleSpeed);
//         }
    
//         startScrambling();
//       }
    
//       const states = [
//         { name: 'Madhya Pradesh', imgSrc: 'https://www.humsamvet.com/uploads/images/2023/04/image_1200x675_643565540270b.jpg', description: 'Explore Maharashtra.' },
//         { name: 'Kerala', imgSrc: 'http://www.mnkindustry.com/wp-content/uploads/2017/11/dsc_0667.jpg', description: 'Discover Kerala.' },
//         { name: 'Maharashtra', imgSrc: 'https://rooftopapp.com/wp-content/uploads/2023/04/Tribal-Art-3.jpg', description: 'Explore Maharashtra.' },
//         { name: 'Rajasthan', imgSrc: 'https://routeprints.com/wp-content/uploads/2019/05/Rajasthan-Tradition-1.png', description: 'Discover Kerala.' },
//         { name: 'Tamil Nadu', imgSrc: 'https://i.pinimg.com/originals/1a/46/87/1a46879a050f9d5cb30acbc4fa4c9018.jpg', description: 'Explore Maharashtra.' },
//         { name: 'Himachal Pradesh', imgSrc: 'https://usercontent2.hubstatic.com/8590865_f260.jpg', description: 'Discover Kerala.' },
//         { name: 'Maharashtra', imgSrc: 'https://link-to-maharashtra-image.jpg', description: 'Explore Maharashtra.' },
//         { name: 'Kerala', imgSrc: 'https://link-to-kerala-image.jpg', description: 'Discover Kerala.' },
//       ];
    
//       const culturalPlaces = [
//         { name: 'Taj Mahal', imgSrc: 'https://cdn.mos.cms.futurecdn.net/asMq6cVwZsckf8sGUaRJU4.jpg', description: 'Iconic symbol of love.' },
//         { name: 'Jaipur City Palace', imgSrc: 'https://media.istockphoto.com/photos/jaipur-india-chandra-mahal-palace-within-the-city-palace-picture-id487804438?k=20&m=487804438&s=612x612&w=0&h=dzYikOteZfg0v95m02ScGsf5CXR1bDBYXNeqT4gSguk=', description: 'Royal grandeur of Jaipur.' },
//         { name: 'Mathura Temple', imgSrc: 'https://www.laurewanders.com/wp-content/uploads/2023/11/Cultural-destinations-in-India-10.jpg', description: 'Birthplace of Lord Krishna.' },
//         { name: 'Meenakshi Temple', imgSrc: 'https://www.laurewanders.com/wp-content/uploads/2023/06/Things-to-do-in-Madurai-92.jpg', description: 'Best Swachh Iconic Place.' },
//       ];
    
 

//   return (
//     <div className='explore-body'>
//       <Header />
//       <Navbar /> {/* Add the Navbar here */}

//       <section id="explore-india">
//         <h2 id="header-text">Explore India</h2>
//         {/* Your state cards and other content */}
//       </section>
//       <div className='explore-body'>
// //       <Header/>

// //       <section id="explore-india">
// //         <h2 id="header-text">Explore India</h2>

// //         <div className="state-cards">
// //           {states.map((state, index) => (
//             <motion.div
//               key={index}
//               className="state-card"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.1 * index }}
//             >
//               <img src={state.imgSrc} alt={state.name} />
//               <h3>{state.name}</h3>
//               <p>{state.description}</p>
//             </motion.div>
//           ))}
//         </div>

//         {/* Larger Centered Image Slider */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 1 }}
//           className="cultural-places-slider"
//         >
//           <div className="slider-item">
//             <img src={culturalPlaces[currentSlide].imgSrc} alt={culturalPlaces[currentSlide].name} />
//             <div className="slider-text">
//               <h3>{culturalPlaces[currentSlide].name}</h3>
//               <p>{culturalPlaces[currentSlide].description}</p>
//             </div>
//           </div>
//         </motion.div>

//         {/* State Cards Section */}
       
//       </section>

//       <Footer/>
//     </div>
//       <Footer />
//     </div>
//   );
// };

// export default ExploreIndia;










// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import './ExploreIndia.css';
// import Header from './Header';
// import Footer from './Footer';
// import { motion } from 'framer-motion';
// import Navbar from './Navbar';  // Import the Navbar

// const ExploreIndia = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   useEffect(() => {
//     const element = document.getElementById('header-text');
//     if (element) {
//       scrambleText(element, "Explore India Virtually!", 2000, 50);
//     }

//     const slideInterval = setInterval(() => {
//       setCurrentSlide((prevSlide) => (prevSlide + 1) % culturalPlaces.length);
//     }, 3000); // Auto-slide every 3 seconds

//     return () => clearInterval(slideInterval);
//   }, []);

//   function scrambleText(element, newText, duration, scrambleSpeed) {
//     const oldText = element.textContent;
//     const maxLength = Math.max(oldText.length, newText.length);
//     const scrambleChars = 'Explore India Virtually';
    
//     let scrambleInterval;
//     let startTime;

//     function scramble() {
//       const elapsed = Date.now() - startTime;
//       const progress = Math.min(elapsed / duration, 1);
//       const updatedText = newText.split('').map((char, index) => {
//         if (index < progress * newText.length) {
//           return char;
//         }
//         const randomChar = scrambleChars[Math.floor(Math.random() * scrambleChars.length)];
//         return randomChar;
//       }).join('');
      
//       element.textContent = updatedText;
      
//       if (progress === 1) {
//         clearInterval(scrambleInterval);
//         element.textContent = newText;
//       }
//     }

//     function startScrambling() {
//       startTime = Date.now();
//       scrambleInterval = setInterval(scramble, scrambleSpeed);
//     }

//     startScrambling();
//   }

//   const states = [
//     { name: 'Madhya Pradesh', imgSrc: 'https://www.humsamvet.com/uploads/images/2023/04/image_1200x675_643565540270b.jpg', description: 'Explore the heart of India.' },
//     { name: 'Kerala', imgSrc: 'http://www.mnkindustry.com/wp-content/uploads/2017/11/dsc_0667.jpg', description: 'Discover the beauty of Kerala.' },
//     { name: 'Maharashtra', imgSrc: 'https://rooftopapp.com/wp-content/uploads/2023/04/Tribal-Art-3.jpg', description: 'Experience the culture of Maharashtra.' },
//     { name: 'Rajasthan', imgSrc: 'https://routeprints.com/wp-content/uploads/2019/05/Rajasthan-Tradition-1.png', description: 'Discover the royal heritage of Rajasthan.' },
//     { name: 'Tamil Nadu', imgSrc: 'https://i.pinimg.com/originals/1a/46/87/1a46879a050f9d5cb30acbc4fa4c9018.jpg', description: 'Explore the traditions of Tamil Nadu.' },
//     { name: 'Himachal Pradesh', imgSrc: 'https://usercontent2.hubstatic.com/8590865_f260.jpg', description: 'Discover the landscapes of Himachal Pradesh.' },
//   ];

//   const culturalPlaces = [
//     { name: 'Taj Mahal', imgSrc: 'https://cdn.mos.cms.futurecdn.net/asMq6cVwZsckf8sGUaRJU4.jpg', description: 'Iconic symbol of love.' },
//     { name: 'Jaipur City Palace', imgSrc: 'https://media.istockphoto.com/photos/jaipur-india-chandra-mahal-palace-within-the-city-palace-picture-id487804438?k=20&m=487804438&s=612x612&w=0&h=dzYikOteZfg0v95m02ScGsf5CXR1bDBYXNeqT4gSguk=', description: 'Royal grandeur of Jaipur.' },
//     { name: 'Mathura Temple', imgSrc: 'https://www.laurewanders.com/wp-content/uploads/2023/11/Cultural-destinations-in-India-10.jpg', description: 'Birthplace of Lord Krishna.' },
//     { name: 'Meenakshi Temple', imgSrc: 'https://www.laurewanders.com/wp-content/uploads/2023/06/Things-to-do-in-Madurai-92.jpg', description: 'Best Swachh Iconic Place.' },
//   ];

//   return (
//     <div className='explore-body'>
//       <Header />
//       <Navbar />

//       <section id="explore-india">
//         <h2 id="header-text">Explore India</h2>

//         <div className="state-cards">
//           {states.map((state, index) => (
//             <motion.div
//               key={index}
//               className="state-card"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.1 * index }}
//             >
//               <img src={state.imgSrc} alt={state.name} />
//               <h3>{state.name}</h3>
//               <p>{state.description}</p>
//             </motion.div>
//           ))}
//         </div>

//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 1 }}
//           className="cultural-places-slider"
//         >
//           <div className="slider-item">
//             <img src={culturalPlaces[currentSlide].imgSrc} alt={culturalPlaces[currentSlide].name} />
//             <div className="slider-text">
//               <h3>{culturalPlaces[currentSlide].name}</h3>
//               <p>{culturalPlaces[currentSlide].description}</p>
//             </div>
//           </div>
//         </motion.div>
//       </section>

//       <Footer />
//     </div>
//   );
// };

// export default ExploreIndia;










// import React, { useEffect, useState } from 'react';
// import { motion } from 'framer-motion';
// import Navbar from './Navbar';  // Import the Navbar
// import Footer from './Footer';
// import './ExploreIndia.css';

// const ExploreIndia = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   useEffect(() => {
//     const element = document.getElementById('header-text');
//     if (element) {
//       scrambleText(element, "Explore India Virtually!", 2000, 50);
//     }

//     const slideInterval = setInterval(() => {
//       setCurrentSlide((prevSlide) => (prevSlide + 1) % culturalPlaces.length);
//     }, 3000); // Auto-slide every 3 seconds

//     return () => clearInterval(slideInterval);
//   }, []);

//   function scrambleText(element, newText, duration, scrambleSpeed) {
//     const oldText = element.textContent;
//     const maxLength = Math.max(oldText.length, newText.length);
//     const scrambleChars = 'Explore India Virtually';
    
//     let scrambleInterval;
//     let startTime;

//     function scramble() {
//       const elapsed = Date.now() - startTime;
//       const progress = Math.min(elapsed / duration, 1);
//       const updatedText = newText.split('').map((char, index) => {
//         if (index < progress * newText.length) {
//           return char;
//         }
//         const randomChar = scrambleChars[Math.floor(Math.random() * scrambleChars.length)];
//         return randomChar;
//       }).join('');
      
//       element.textContent = updatedText;
      
//       if (progress === 1) {
//         clearInterval(scrambleInterval);
//         element.textContent = newText;
//       }
//     }

//     function startScrambling() {
//       startTime = Date.now();
//       scrambleInterval = setInterval(scramble, scrambleSpeed);
//     }

//     startScrambling();
//   }

//   const states = [
//     { name: 'Madhya Pradesh', imgSrc: 'https://www.humsamvet.com/uploads/images/2023/04/image_1200x675_643565540270b.jpg', description: 'Explore Madhya Pradesh.' },
//     { name: 'Kerala', imgSrc: 'http://www.mnkindustry.com/wp-content/uploads/2017/11/dsc_0667.jpg', description: 'Discover Kerala.' },
//     { name: 'Maharashtra', imgSrc: 'https://rooftopapp.com/wp-content/uploads/2023/04/Tribal-Art-3.jpg', description: 'Explore Maharashtra.' },
//     { name: 'Rajasthan', imgSrc: 'https://routeprints.com/wp-content/uploads/2019/05/Rajasthan-Tradition-1.png', description: 'Discover Rajasthan.' },
//     { name: 'Tamil Nadu', imgSrc: 'https://i.pinimg.com/originals/1a/46/87/1a46879a050f9d5cb30acbc4fa4c9018.jpg', description: 'Explore Tamil Nadu.' },
//     { name: 'Himachal Pradesh', imgSrc: 'https://usercontent2.hubstatic.com/8590865_f260.jpg', description: 'Discover Himachal Pradesh.' },
//   ];

//   const culturalPlaces = [
//     { name: 'Taj Mahal', imgSrc: 'https://cdn.mos.cms.futurecdn.net/asMq6cVwZsckf8sGUaRJU4.jpg', description: 'Iconic symbol of love.' },
//     { name: 'Jaipur City Palace', imgSrc: 'https://media.istockphoto.com/photos/jaipur-india-chandra-mahal-palace-within-the-city-palace-picture-id487804438?k=20&m=487804438&s=612x612&w=0&h=dzYikOteZfg0v95m02ScGsf5CXR1bDBYXNeqT4gSguk=', description: 'Royal grandeur of Jaipur.' },
//     { name: 'Mathura Temple', imgSrc: 'https://www.laurewanders.com/wp-content/uploads/2023/11/Cultural-destinations-in-India-10.jpg', description: 'Birthplace of Lord Krishna.' },
//     { name: 'Meenakshi Temple', imgSrc: 'https://www.laurewanders.com/wp-content/uploads/2023/06/Things-to-do-in-Madurai-92.jpg', description: 'Best Swachh Iconic Place.' },
//   ];

//   const festivals = [
//     { name: 'Diwali', imgSrc: 'https://images.lifestyleasia.com/wp-content/uploads/sites/7/2022/10/10141531/bandi-chhor-divas.jpeg', description: 'Festival of lights celebrated with fireworks and sweets.' },
//     { name: 'Holi', imgSrc: 'https://cdn.britannica.com/57/244757-131-EBAFDFE0/Hindu-Holi-Festival-Mathura-Uttar-Pradesh-India.jpg', description: 'Festival of colors, symbolizing the victory of good over evil.' },
//     // { name: 'Eid', imgSrc: 'https://example.com/eid.jpg', description: 'Celebration marking the end of Ramadan with feasts and prayers.' },
//     { name: 'Pongal', imgSrc: 'https://thefederal.com/h-upload/2024/01/12/392474-pongal.webp', description: 'Harvest festival celebrated in South India.' },
//   ];

//   return (
//     <div className='explore-body'>
//       <Navbar /> {/* Add the Navbar here */}
      
//       <section id="explore-india">
//         <h2 id="header-text">Explore India</h2>

//         <div className="state-cards">
//           {states.map((state, index) => (
//             <motion.div
//               key={index}
//               className="state-card"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.1 * index }}
//             >
//               <img src={state.imgSrc} alt={state.name} />
//               <h3>{state.name}</h3>
//               <p>{state.description}</p>
//             </motion.div>
//           ))}
//         </div>

//         {/* Larger Centered Image Slider */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 1 }}
//           className="cultural-places-slider"
//         >
//           <div className="slider-item">
//             <img src={culturalPlaces[currentSlide].imgSrc} alt={culturalPlaces[currentSlide].name} />
//             <div className="slider-text">
//               <h3>{culturalPlaces[currentSlide].name}</h3>
//               <p>{culturalPlaces[currentSlide].description}</p>
//             </div>
//           </div>
//         </motion.div>

//         {/* Festivals Section */}
//         <section className="festivals-section">
//           <h2 className="festival-header">Festivals of India</h2>
//           <div className="festivals-flow">
//             {festivals.map((festival, index) => (
//               <motion.div
//                 key={index}
//                 className="festival-item"
//                 initial={{ opacity: 0, x: 100 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 transition={{ delay: 0.2 * index }}
//               >
//                 <img src={festival.imgSrc} alt={festival.name} />
//                 <div className="festival-text">
//                   <h3>{festival.name}</h3>
//                   <p>{festival.description}</p>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </section>

//       </section>

//       <Footer />
//     </div>
//   );
// };

// export default ExploreIndia;












// import React, { useEffect, useState } from 'react';
// import { motion } from 'framer-motion';
// import Navbar from './Navbar';  // Import the Navbar
// import Footer from './Footer';
// import './ExploreIndia.css';

// const ExploreIndia = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   useEffect(() => {
//     const element = document.getElementById('header-text');
//     if (element) {
//       scrambleText(element, "Explore India Virtually!", 2000, 50);
//     }

//     const slideInterval = setInterval(() => {
//       setCurrentSlide((prevSlide) => (prevSlide + 1) % culturalPlaces.length);
//     }, 3000); // Auto-slide every 3 seconds

//     return () => clearInterval(slideInterval);
//   }, []);

//   function scrambleText(element, newText, duration, scrambleSpeed) {
//     const oldText = element.textContent;
//     const maxLength = Math.max(oldText.length, newText.length);
//     const scrambleChars = 'Explore India Virtually';
    
//     let scrambleInterval;
//     let startTime;

//     function scramble() {
//       const elapsed = Date.now() - startTime;
//       const progress = Math.min(elapsed / duration, 1);
//       const updatedText = newText.split('').map((char, index) => {
//         if (index < progress * newText.length) {
//           return char;
//         }
//         const randomChar = scrambleChars[Math.floor(Math.random() * scrambleChars.length)];
//         return randomChar;
//       }).join('');
      
//       element.textContent = updatedText;
      
//       if (progress === 1) {
//         clearInterval(scrambleInterval);
//         element.textContent = newText;
//       }
//     }

//     function startScrambling() {
//       startTime = Date.now();
//       scrambleInterval = setInterval(scramble, scrambleSpeed);
//     }

//     startScrambling();
//   }

//   const states = [
//     { name: 'Madhya Pradesh', imgSrc: 'https://www.humsamvet.com/uploads/images/2023/04/image_1200x675_643565540270b.jpg', description: 'Explore Madhya Pradesh.' },
//     { name: 'Kerala', imgSrc: 'http://www.mnkindustry.com/wp-content/uploads/2017/11/dsc_0667.jpg', description: 'Discover Kerala.' },
//     { name: 'Maharashtra', imgSrc: 'https://rooftopapp.com/wp-content/uploads/2023/04/Tribal-Art-3.jpg', description: 'Explore Maharashtra.' },
//     { name: 'Rajasthan', imgSrc: 'https://routeprints.com/wp-content/uploads/2019/05/Rajasthan-Tradition-1.png', description: 'Discover Rajasthan.' },
//     { name: 'Tamil Nadu', imgSrc: 'https://i.pinimg.com/originals/1a/46/87/1a46879a050f9d5cb30acbc4fa4c9018.jpg', description: 'Explore Tamil Nadu.' },
//     { name: 'Himachal Pradesh', imgSrc: 'https://usercontent2.hubstatic.com/8590865_f260.jpg', description: 'Discover Himachal Pradesh.' },
//   ];

//   const culturalPlaces = [
//     { name: 'Taj Mahal', imgSrc: 'https://cdn.mos.cms.futurecdn.net/asMq6cVwZsckf8sGUaRJU4.jpg', description: 'Iconic symbol of love.' },
//     { name: 'Jaipur City Palace', imgSrc: 'https://media.istockphoto.com/photos/jaipur-india-chandra-mahal-palace-within-the-city-palace-picture-id487804438?k=20&m=487804438&s=612x612&w=0&h=dzYikOteZfg0v95m02ScGsf5CXR1bDBYXNeqT4gSguk=', description: 'Royal grandeur of Jaipur.' },
//     { name: 'Mathura Temple', imgSrc: 'https://www.laurewanders.com/wp-content/uploads/2023/11/Cultural-destinations-in-India-10.jpg', description: 'Birthplace of Lord Krishna.' },
//     { name: 'Meenakshi Temple', imgSrc: 'https://www.laurewanders.com/wp-content/uploads/2023/06/Things-to-do-in-Madurai-92.jpg', description: 'Best Swachh Iconic Place.' },
//   ];

//   const festivals = [
//     { name: 'Diwali', imgSrc: 'https://images.lifestyleasia.com/wp-content/uploads/sites/7/2022/10/10141531/bandi-chhor-divas.jpeg', description: 'Festival of lights celebrated with fireworks and sweets.' },
//     { name: 'Holi', imgSrc: 'https://cdn.britannica.com/57/244757-131-EBAFDFE0/Hindu-Holi-Festival-Mathura-Uttar-Pradesh-India.jpg', description: 'Festival of colors, symbolizing the victory of good over evil.' },
//     { name: 'Pongal', imgSrc: 'https://thefederal.com/h-upload/2024/01/12/392474-pongal.webp', description: 'Harvest festival celebrated in South India.' },
//   ];

//   return (
//     <div className='explore-body'>
//       <Navbar /> {/* Add the Navbar here */}
      
//       <section id="explore-india">
//         <h2 id="header-text">Explore India</h2>

//         <div className="state-cards">
//           {states.map((state, index) => (
//             <motion.div
//               key={index}
//               className="state-card"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.1 * index }}
//             >
//               <img src={state.imgSrc} alt={state.name} />
//               <h3>{state.name}</h3>
//               <p>{state.description}</p>
//             </motion.div>
//           ))}
//         </div>

//         {/* Arrow to State Page */}
//         <div className="arrow-container">
//           <a href="/states" className="arrow-link">
//             <motion.div
//               initial={{ opacity: 0, x: -20 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.5 }}
//               className="arrow-icon"
//             >
//               &#8594;
//             </motion.div>
//             <span className="arrow-text">View All States</span>
//           </a>
//         </div>

//         {/* Larger Centered Image Slider */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 1 }}
//           className="cultural-places-slider"
//         >
//           <div className="slider-item">
//             <img src={culturalPlaces[currentSlide].imgSrc} alt={culturalPlaces[currentSlide].name} />
//             <div className="slider-text">
//               <h3>{culturalPlaces[currentSlide].name}</h3>
//               <p>{culturalPlaces[currentSlide].description}</p>
//             </div>
//           </div>
//         </motion.div>

//         {/* Festivals Section */}
//         <section className="festivals-section">
//           <h2 className="festival-header">Festivals of India</h2>
//           <div className="festivals-flow">
//             {festivals.map((festival, index) => (
//               <motion.div
//                 key={index}
//                 className="festival-item"
//                 initial={{ opacity: 0, x: 100 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 transition={{ delay: 0.2 * index }}
//               >
//                 <img src={festival.imgSrc} alt={festival.name} />
//                 <div className="festival-text">
//                   <h3>{festival.name}</h3>
//                   <p>{festival.description}</p>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </section>

//       </section>

//       <Footer />
//     </div>
//   );
// };

// export default ExploreIndia;



















// import React, { useEffect, useState } from 'react';
// import { motion } from 'framer-motion';
// import Navbar from './Navbar';  // Import the Navbar
// import Footer from './Footer';
// import './ExploreIndia.css';

// const ExploreIndia = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   useEffect(() => {
//     const element = document.getElementById('header-text');
//     if (element) {
//       scrambleText(element, "Explore India Virtually!", 2000, 50);
//     }

//     const slideInterval = setInterval(() => {
//       setCurrentSlide((prevSlide) => (prevSlide + 1) % culturalPlaces.length);
//     }, 3000); // Auto-slide every 3 seconds

//     return () => clearInterval(slideInterval);
//   }, []);

//   function scrambleText(element, newText, duration, scrambleSpeed) {
//     const oldText = element.textContent;
//     const maxLength = Math.max(oldText.length, newText.length);
//     const scrambleChars = 'Explore India Virtually';
    
//     let scrambleInterval;
//     let startTime;

//     function scramble() {
//       const elapsed = Date.now() - startTime;
//       const progress = Math.min(elapsed / duration, 1);
//       const updatedText = newText.split('').map((char, index) => {
//         if (index < progress * newText.length) {
//           return char;
//         }
//         const randomChar = scrambleChars[Math.floor(Math.random() * scrambleChars.length)];
//         return randomChar;
//       }).join('');
      
//       element.textContent = updatedText;
      
//       if (progress === 1) {
//         clearInterval(scrambleInterval);
//         element.textContent = newText;
//       }
//     }

//     function startScrambling() {
//       startTime = Date.now();
//       scrambleInterval = setInterval(scramble, scrambleSpeed);
//     }

//     startScrambling();
//   }

//   const states = [
//     { name: 'Madhya Pradesh', imgSrc: 'https://www.humsamvet.com/uploads/images/2023/04/image_1200x675_643565540270b.jpg', description: 'Explore Madhya Pradesh.' },
//     { name: 'Kerala', imgSrc: 'http://www.mnkindustry.com/wp-content/uploads/2017/11/dsc_0667.jpg', description: 'Discover Kerala.' },
//     { name: 'Maharashtra', imgSrc: 'https://rooftopapp.com/wp-content/uploads/2023/04/Tribal-Art-3.jpg', description: 'Explore Maharashtra.' },
//     { name: 'Rajasthan', imgSrc: 'https://routeprints.com/wp-content/uploads/2019/05/Rajasthan-Tradition-1.png', description: 'Discover Rajasthan.' },
//     { name: 'Tamil Nadu', imgSrc: 'https://i.pinimg.com/originals/1a/46/87/1a46879a050f9d5cb30acbc4fa4c9018.jpg', description: 'Explore Tamil Nadu.' },
//     { name: 'Himachal Pradesh', imgSrc: 'https://usercontent2.hubstatic.com/8590865_f260.jpg', description: 'Discover Himachal Pradesh.' },
//   ];

//   const culturalPlaces = [
//     { name: 'Taj Mahal', imgSrc: 'https://cdn.mos.cms.futurecdn.net/asMq6cVwZsckf8sGUaRJU4.jpg', description: 'Iconic symbol of love.' },
//     { name: 'Jaipur City Palace', imgSrc: 'https://media.istockphoto.com/photos/jaipur-india-chandra-mahal-palace-within-the-city-palace-picture-id487804438?k=20&m=487804438&s=612x612&w=0&h=dzYikOteZfg0v95m02ScGsf5CXR1bDBYXNeqT4gSguk=', description: 'Royal grandeur of Jaipur.' },
//     { name: 'Mathura Temple', imgSrc: 'https://www.laurewanders.com/wp-content/uploads/2023/11/Cultural-destinations-in-India-10.jpg', description: 'Birthplace of Lord Krishna.' },
//     { name: 'Meenakshi Temple', imgSrc: 'https://www.laurewanders.com/wp-content/uploads/2023/06/Things-to-do-in-Madurai-92.jpg', description: 'Best Swachh Iconic Place.' },
//   ];

//   const festivals = [
//     { name: 'Diwali', imgSrc: 'https://images.lifestyleasia.com/wp-content/uploads/sites/7/2022/10/10141531/bandi-chhor-divas.jpeg', description: 'Festival of lights celebrated with fireworks and sweets.' },
//     { name: 'Holi', imgSrc: 'https://cdn.britannica.com/57/244757-131-EBAFDFE0/Hindu-Holi-Festival-Mathura-Uttar-Pradesh-India.jpg', description: 'Festival of colors, symbolizing the victory of good over evil.' },
//     { name: 'Pongal', imgSrc: 'https://thefederal.com/h-upload/2024/01/12/392474-pongal.webp', description: 'Harvest festival celebrated in South India.' },
//   ];

//   return (
//     <div className='explore-body'>
//       <Navbar /> {/* Add the Navbar here */}
      
//       <section id="explore-india">
//         <h2 id="header-text">Explore India</h2>

//         <div className="state-cards">
//           {states.map((state, index) => (
//             <motion.div
//               key={index}
//               className="state-card"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.1 * index }}
//             >
//               <img src={state.imgSrc} alt={state.name} />
//               <h3>{state.name}</h3>
//               <p>{state.description}</p>
//             </motion.div>
//           ))}
//         </div>

//         <div className="view-all-states-section">
//           <a href="/states" className="view-all-states-link">
//             <div className="view-all-states">
//               <p>View All States</p>
//               <div className="arrow-circle">
//                 <motion.svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="40"
//                   height="40"
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth="2"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   className="feather feather-arrow-right-circle"
//                   whileHover={{ rotate: 360 }}
//                   transition={{ duration: 0.6 }}
//                 >
//                   <circle cx="12" cy="12" r="10" />
//                   <polyline points="12 16 16 12 12 8" />
//                   <line x1="8" y1="12" x2="16" y2="12" />
//                 </motion.svg>
//               </div>
//             </div>
//           </a>
//         </div>
//         {/* Larger Centered Image Slider */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 1 }}
//           className="cultural-places-slider"
//         >
//           <div className="slider-item">
//             <img src={culturalPlaces[currentSlide].imgSrc} alt={culturalPlaces[currentSlide].name} />
//             <div className="slider-text">
//               <h3>{culturalPlaces[currentSlide].name}</h3>
//               <p>{culturalPlaces[currentSlide].description}</p>
//             </div>
//           </div>
//         </motion.div>

//         {/* Festivals Section */}
//         <section className="festivals-section">
//           <h2 className="festival-header">Festivals of India</h2>
//           <div className="festivals-flow">
//             {festivals.map((festival, index) => (
//               <motion.div
//                 key={index}
//                 className="festival-item"
//                 initial={{ opacity: 0, x: 100 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 transition={{ delay: 0.2 * index }}
//               >
//                 <img src={festival.imgSrc} alt={festival.name} />
//                 <div className="festival-text">
//                   <h3>{festival.name}</h3>
//                   <p>{festival.description}</p>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </section>

//         {/* View All States with Beautiful Circular Arrow */}
        

//       </section>

//       <Footer />
//     </div>
//   );
// };

// export default ExploreIndia;







// import React, {useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import Navbar from './Navbar';  // Import Navbar component
// import Footer from './Footer';
// import './ExploreIndia.css';
// import State from './State';

// const ExploreIndia = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [festivalSlide, setFestivalSlide] = useState(0);  // State for the festival slider

//   useEffect(() => {
//     const element = document.getElementById('header-text');
//     if (element) {
//       scrambleText(element, "Explore India Virtually!", 2000, 50);
//     }

//     const slideInterval = setInterval(() => {
//       setCurrentSlide((prevSlide) => (prevSlide + 1) % culturalPlaces.length);
//     }, 3000); // Auto-slide for cultural places

//     return () => clearInterval(slideInterval);
//   }, []);

//   function scrambleText(element, newText, duration, scrambleSpeed) {
//     const oldText = element.textContent;
//     const maxLength = Math.max(oldText.length, newText.length);
//     const scrambleChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    
//     let scrambleInterval;
//     let startTime;

//     function scramble() {
//       const elapsed = Date.now() - startTime;
//       const progress = Math.min(elapsed / duration, 1);
//       const updatedText = newText.split('').map((char, index) => {
//         if (index < progress * newText.length) {
//           return char;
//         }
//         const randomChar = scrambleChars[Math.floor(Math.random() * scrambleChars.length)];
//         return randomChar;
//       }).join('');
      
//       element.textContent = updatedText;
      
//       if (progress === 1) {
//         clearInterval(scrambleInterval);
//         element.textContent = newText;
//       }
//     }

//     function startScrambling() {
//       startTime = Date.now();
//       scrambleInterval = setInterval(scramble, scrambleSpeed);
//     }

//     startScrambling();
//   }

//   const states = [
//     { name: 'Madhya Pradesh', imgSrc: 'https://www.humsamvet.com/uploads/images/2023/04/image_1200x675_643565540270b.jpg', description: 'Explore Madhya Pradesh.' },
//     { name: 'Kerala', imgSrc: 'http://www.mnkindustry.com/wp-content/uploads/2017/11/dsc_0667.jpg', description: 'Discover Kerala.' },
//     { name: 'Maharashtra', imgSrc: 'https://rooftopapp.com/wp-content/uploads/2023/04/Tribal-Art-3.jpg', description: 'Explore Maharashtra.' },
//     { name: 'Rajasthan', imgSrc: 'https://routeprints.com/wp-content/uploads/2019/05/Rajasthan-Tradition-1.png', description: 'Discover Rajasthan.' },
//     { name: 'Tamil Nadu', imgSrc: 'https://i.pinimg.com/originals/1a/46/87/1a46879a050f9d5cb30acbc4fa4c9018.jpg', description: 'Explore Tamil Nadu.' },
//     { name: 'Himachal Pradesh', imgSrc: 'https://usercontent2.hubstatic.com/8590865_f260.jpg', description: 'Discover Himachal Pradesh.' },
//   ];

//   const culturalPlaces = [
//     { name: 'Taj Mahal', imgSrc: 'https://cdn.mos.cms.futurecdn.net/asMq6cVwZsckf8sGUaRJU4.jpg', description: 'Iconic symbol of love.' },
//     { name: 'Jaipur City Palace', imgSrc: 'https://media.istockphoto.com/photos/jaipur-india-chandra-mahal-palace-within-the-city-palace-picture-id487804438?k=20&m=487804438&s=612x612&w=0&h=dzYikOteZfg0v95m02ScGsf5CXR1bDBYXNeqT4gSguk=', description: 'Royal grandeur of Jaipur.' },
//     { name: 'Mathura Temple', imgSrc: 'https://www.laurewanders.com/wp-content/uploads/2023/11/Cultural-destinations-in-India-10.jpg', description: 'Birthplace of Lord Krishna.' },
//     { name: 'Meenakshi Temple', imgSrc: 'https://www.laurewanders.com/wp-content/uploads/2023/06/Things-to-do-in-Madurai-92.jpg', description: 'Best Swachh Iconic Place.' },
//   ];

//   const festivals = [
//     { name: 'Diwali', imgSrc: 'https://images.lifestyleasia.com/wp-content/uploads/sites/7/2022/10/10141531/bandi-chhor-divas.jpeg', description: 'Festival of lights celebrated with fireworks and sweets.' },
//     { name: 'Holi', imgSrc: 'https://images.livemint.com/img/2023/03/06/1600x900/holi_2023_1678076615866_1678076616058_1678076616058.jpg', description: 'Festival of colors, symbolizing the victory of good over evil.' },
//     { name: 'Pongal', imgSrc: 'https://thefederal.com/h-upload/2024/01/12/392474-pongal.webp', description: 'Harvest festival celebrated in South India.' },
//     { name: 'Navratri', imgSrc: 'https://english.cdn.zeenews.com/sites/default/files/2023/10/15/1299249-navratri-garba.png', description: 'Durga Puja and Dussehra.' },
//     { name: 'Ganesh Chaturthi', imgSrc: 'https://images.news18.com/ibnlive/uploads/2022/08/ganesh-chaturthi-2022-rituals-1-166177702116x9.jpg', description: 'The spectacular 11-day Ganesh Chaturthi festival.' },
//     { name: 'Bihu', imgSrc: 'https://devlibrary.in/wp-content/uploads/2023/03/bihu-wishes.png', description: ' Bihu is a popular Assamese festival.' },
//     { name: 'Makar Sankranti', imgSrc: 'https://media.seniority.in/mageplaza/blog/post/ktpl_blog/makar_sankranti_main_image.jpg', description: 'Kite Festival in Gujarat and Lohri in North India.' },
    
    
//   ];

//   // Function to navigate to the next or previous festival card
//   const handlePrevFestival = () => {
//     setFestivalSlide((prevSlide) => (prevSlide === 0 ? festivals.length - 1 : prevSlide - 1));
//   };

//   const handleNextFestival = () => {
//     setFestivalSlide((prevSlide) => (prevSlide === festivals.length - 1 ? 0 : prevSlide + 1));
//   };

//   return (
//     <div className='explore-body'>
//       <Navbar /> {/* Add the Navbar here */}
      
//       <section id="explore-india">
//         <h2 id="header-text">Explore India</h2>

//         <div className="state-cards">
//           {states.map((state, index) => (
//             <motion.div
//               key={index}
//               className="state-card"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.1 * index }}
//             >
//               <img src={state.imgSrc} alt={state.name} />
//               <h3>{state.name}</h3>
//               <p>{state.description}</p>
//             </motion.div>
//           ))}
//         </div>

//         <div className="view-all-states-section">
//            <a href="/state" className="view-all-states-link">
        
         
//              <div className="view-all-states">
//                <p>View All States</p>
//                <div className="arrow-circle">
//                  <motion.svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="40"
//                   height="40"
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth="2"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   className="feather feather-arrow-right-circle"
//                   whileHover={{ rotate: 360 }}
//                   transition={{ duration: 0.6 }}
//                 >
//                   <circle cx="12" cy="12" r="10" />
//                   <polyline points="12 16 16 12 12 8" />
//                   <line x1="8" y1="12" x2="16" y2="12" />
//                 </motion.svg>
//               </div>
//             </div>
//           </a>
//         </div>

//         {/* Larger Centered Image Slider */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 1 }}
//           className="cultural-places-slider"
//         >
//           <div className="slider-item">
//             <img src={culturalPlaces[currentSlide].imgSrc} alt={culturalPlaces[currentSlide].name} />
//             <div className="slider-text">
//               <h3>{culturalPlaces[currentSlide].name}</h3>
//               <p>{culturalPlaces[currentSlide].description}</p>
//             </div>
//           </div>
//         </motion.div>

       
//         <section className="festivals-section">
//           <h2 className="festival-header">Festivals of India</h2>
//           <div className="festival-slider-container">
//             <button className="slider-arrow prev-arrow" onClick={handlePrevFestival}>&#8592;</button> 
//             <motion.div
//               className="festivals-slider"
//               initial={{ opacity: 0, x: 100 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 1 }}
//             >
//               <div className="slider-item-f">
//                 <img src={festivals[festivalSlide].imgSrc} alt={festivals[festivalSlide].name} />
//                 <div className="slider-text-f">
//                   <h3>{festivals[festivalSlide].name}</h3>
//                   <p>{festivals[festivalSlide].description}</p>
//                 </div>
//               </div>
//             </motion.div>
//             <button className="slider-arrow next-arrow" onClick={handleNextFestival}>&#8594;</button> {/* Right arrow */}
//           </div>
//         </section>

//       </section>

//       <Footer />
//     </div>
//   );
// };

// export default ExploreIndia;















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
    <div className='explore-body'>
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

















