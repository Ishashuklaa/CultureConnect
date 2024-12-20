// import React from 'react';
// import './ArtGallery.css';
// import Navbar from './Navbar';

// const artData = [
//   {
//     title: 'Madhubani Painting',
//     place: 'Bihar, India',
//     century: '7th century',
//     colors: 'Vibrant colors, usually natural dyes',
//     description: 'Traditional Indian folk art known for intricate designs.',
//     imageUrl: 'https://www.caleidoscope.in/wp-content/uploads/2019/05/Madhubani_Paintings-1068x609.jpg', // Replace with actual image URLs
//   },
//   {
//     title: 'Warli Art',
//     place: 'Maharashtra, India',
//     century: '10th century',
//     colors: 'Monochrome (typically white on a mud background)',
//     description: 'Tribal art famous for its geometric patterns depicting daily life.',
//     imageUrl: 'https://example.com/warli.jpg',
//   },
//   {
//     title: 'Pattachitra',
//     place: 'Odisha & West Bengal, India',
//     century: '12th century',
//     colors: 'Rich natural hues with a red background',
//     description: 'Ancient scroll painting rich in mythological themes.',
//     imageUrl: 'https://example.com/pattachitra.jpg',
//   },
//   {
//     title: 'Tanjore Painting',
//     place: 'Tamil Nadu, India',
//     century: '16th century',
//     colors: 'Bright and rich colors, often gold foil',
//     description: 'South Indian art characterized by compact composition.',
//     imageUrl: 'https://example.com/tanjore.jpg',
//   },
//   // Add more art items as needed
// ];

// const ArtGallery = () => {
//   return (
//     <div className="gallery-container">
//       <Navbar/>
//       <h1 className="gallery-title">Art Gallery of India</h1>
//       <div className="gallery-grid">
//         {artData.map((art, index) => (
//           <div className="gallery-item" key={index}>
//             <img src={art.imageUrl} alt={art.title} className="gallery-image" />
//             <div className="overlay">
//               <h2 className="art-title">{art.title}</h2>
//               <p className="art-place">{art.place}</p>
//               <p className="art-century">Century: {art.century}</p>
//               <p className="art-colors">Colors Used: {art.colors}</p>
//               <p className="art-description">{art.description}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ArtGallery;

import React from 'react';
import './ArtGallery.css';
import Navbar from '../components/Navbar';

const artData = [
  {
    title: 'Madhubani Painting',
    place: 'Bihar, India',
    century: '7th century',
    colors: 'Vibrant colors, usually natural dyes',
    description: 'Traditional Indian folk art known for intricate designs.',
    imageUrl: 'https://www.caleidoscope.in/wp-content/uploads/2019/05/Madhubani_Paintings-1068x609.jpg', // Replace with actual image URLs
  },
  {
    title: 'Warli Art',
    place: 'Maharashtra, India',
    century: '10th century',
    colors: 'Monochrome (typically white on a mud background)',
    description: 'Tribal art famous for its geometric patterns depicting daily life.',
    imageUrl: 'https://www.todaystraveller.net/wp-content/uploads/2021/05/Aadivasi-varli-painting-179629-pixahive-1536x793.jpg',
  },
  {
    title: 'Pattachitra',
    place: 'Odisha & West Bengal, India',
    century: '12th century',
    colors: 'Rich natural hues with a red background',
    description: 'Ancient scroll painting rich in mythological themes.',
    imageUrl: 'https://content.thisday.app/uploads/medium_Jagannatha_Pattachitra_Painting_f9690ee8cb.jpg',
  },
  {
    title: 'Tanjore Painting',
    place: 'Tamil Nadu, India',
    century: '16th century',
    colors: 'Bright and rich colors, often gold foil',
    description: 'South Indian art characterized by compact composition.',
    imageUrl: 'https://img1.wsimg.com/isteam/ip/bd95d888-15fd-4e22-9514-3b3e7856faa7/ols/ranganathar%20new.jpg/:/rs=w:1200,h:1200',
  },
  {
    title: 'Miniature Painting',
    place: 'Rajasthan, Deccan, Kangra, Malwa, Pahadi, etc.',
    century: '16th century',
    colors: 'Natural stone colours are used in a paper-based “wasli”',
    description: 'The miniature paintings illustrate a combination of Indian, Islamic and Persian art styles.',
    imageUrl: 'https://images.saymedia-content.com/.image/c_limit%2Ccs_srgb%2Cq_auto:eco%2Cw_700/MTc1MjY4OTc0OTQ5NDQyOTQy/art-forms-of-india-that-have-survived-generations.webp', // Replace with actual image URLs
  },
  {
    title: 'Kalamkari',
    place: ' Andhra Pradesh, India',
    century: '10th century',
    colors: 'Monochrome (typically white on a mud background)',
    description: 'Kalamkari derives its name from kalam or pen, and it means ‘drawings with a pen.’',
    imageUrl: 'https://images.saymedia-content.com/.image/c_limit%2Ccs_srgb%2Cq_auto:eco%2Cw_700/MTc1MjY4OTc0OTQ5MzExODcw/art-forms-of-india-that-have-survived-generations.webp',
  },
  {
    title: 'Gond Painting',
    place: ' Madhya Pradesh, India',
    century: '1400 years old',
    colors: 'Natural colours derived from plant sap, charcoal, coloured soil, cow dung, leaves, etc.',
    description: 'This simple art form created with dots and lines was made as an offering to Mother Nature in earlier days.',
    imageUrl: 'https://images.saymedia-content.com/.image/c_limit%2Ccs_srgb%2Cq_auto:eco%2Cw_700/MTc1MjY4OTc0OTQ5ODM2MTU4/art-forms-of-india-that-have-survived-generations.webp',
  },
  {
    title: 'Kalighat Painting',
    place: 'Bengal, India',
    century: '19th century ',
    colors: ' water based, opaque colours on papers',
    description: 'These paintings were made on cloth or patas and often depicted images of gods, goddesses and scenes from epics.',
    imageUrl: 'https://images.saymedia-content.com/.image/c_limit%2Ccs_srgb%2Cq_auto:eco%2Cw_640/MTc1MjY4OTc0OTQ5NTc0MDE0/art-forms-of-india-that-have-survived-generations.webp',
  },
  {
    title: 'Phad',
    place: 'Rajasthan, India',
    century: '7th century',
    colors: 'Red, yellow and orange colours ',
    description: 'The depictions usually include battlefield scenes, adventure stories, legendary romances, etc. ',
    imageUrl: 'https://images.saymedia-content.com/.image/c_limit%2Ccs_srgb%2Cq_auto:eco%2Cw_700/MTc1MjY4OTc0OTQ5NTA4NDc4/art-forms-of-india-that-have-survived-generations.webp', // Replace with actual image URLs
  },
  {
    title: 'Cheriyal Scrolls',
    place: ' Telangana, India',
    century: '10th century',
    colors: 'bright hues, with red as a dominating background.',
    description: 'The scrolls are generally 40 to 45 feet in length, and the themes are mainly centred on Indian mythology and folk traditions. ',
    imageUrl: 'https://images.saymedia-content.com/.image/c_limit%2Ccs_srgb%2Cq_auto:eco%2Cw_700/MTc1MjY4OTc0OTQ5NzA1MDg2/art-forms-of-india-that-have-survived-generations.webp',
  },
 
];

const ArtGallery = () => {
  return (
    <div className="gallery-container">
      <Navbar />
      <h1 className="gallery-title">Art Gallery of India</h1>
      <p className='para'><b><i>India, a land of vibrant cultures and rich heritage, boasts a treasure trove of traditional art forms that have transcended generations. From the intricate Madhubani paintings of Bihar to the majestic Tanjore paintings of Tamil Nadu, each art form carries its own unique history, reflecting the diversity and creativity inherent in Indian artistry.</i></b></p>

      <h3 className='hd'>10 Forms of Indian Art That Have Survived Generations</h3>
              <div className="gallery-grid">
        {artData.map((art, index) => (
          <div className="gallery-item" key={index}>
            <img src={art.imageUrl} alt={art.title} className="gallery-image" />
            <div className="gallery-content">
              <h2 className="art-title">{art.title}</h2>
              <p className="art-description">{art.description}</p>
              <div className="art-details">
                <p><strong>Place:</strong> {art.place}</p>
                <p><strong>Century:</strong> {art.century}</p>
                <p><strong>Colors:</strong> {art.colors}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArtGallery;
