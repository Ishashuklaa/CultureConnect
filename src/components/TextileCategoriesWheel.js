import React from 'react';

const TextileCategoriesWheel = () => {
  const categories = [
    { title: 'HISTORY', color: '#e91e63', image: 'https://www.iiad.edu.in/wp-content/uploads/2024/01/img1-5-1.webp' },
    { title: 'TRADE', color: '#9c27b0', image: 'https://www.thehindubusinessline.com/opinion/whmlnh/article29766693.ece/alternates/LANDSCAPE_615/BL22THINKTRADE' },
    { title: 'TYPE OF TEXTILE', color: '#673ab7', image: 'https://mmabudhabi.com/wp-content/uploads/2022/07/image0-3.jpeg' },
    { title: 'TEXTILE TALES', color: '#3f51b5', image: 'https://www.iiad.edu.in/wp-content/uploads/2024/01/img1-5-1.webp' },
    { title: 'MANUFACTURING PROCESS', color: '#2196f3', image: 'https://www.hrinasia.com/wp-content/uploads/2016/10/Textile-manufacturing-women-employees-India.jpg' },
    { title: 'ARTISANS', color: '#03a9f4', image: 'https://www.desiblitz.com/wp-content/uploads/2019/10/Famous-Traditional-Crafts-of-Rajasthan-in-India-Dhurrie.jpg' },
    { title: 'TEXTILES AND FABRICS OF INDIAN STATES', color: '#00bcd4', image: 'https://i.pinimg.com/originals/58/08/ea/5808eae622b535bcfc8363d36346db17.jpg' }
  ];

  return (
    <div>
      {/* Heading at the top */}
      <div className="text-center mb-4 mt-4">
        <h1 className="text-4xl font-bold text-purple-900 mb-2">Textiles and Fabrics Of India</h1>
        <p className="text-lg text-gray-700">Discover, Learn, and Connect</p>
      </div>

      {/* Main content section with reduced gap */}
      <div className="flex flex-col lg:flex-row items-center justify-center w-full min-h-screen bg-transparent px-2 py-2 gap-6">
        {/* Wheel Section */}
        <div className="flex flex-col items-center">
          <div className="relative w-[600px] h-[600px]">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-center">
              <h2 className="text-2xl font-bold text-purple-800">Textiles and<br />Fabrics of India</h2>
            </div>
            {/* Wheel Animation */}
            <div className="w-full h-full relative animate-spin-slow">
              {categories.map((category, index) => {
                const angle = (index * 360) / categories.length;
                const radius = 200;
                const x = radius * Math.cos((angle * Math.PI) / 180);
                const y = radius * Math.sin((angle * Math.PI) / 180);

                return (
                  <div
                    key={category.title}
                    className="absolute bg-white rounded-lg shadow-lg w-32 h-32 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer hover:scale-110 transition-transform duration-300"
                    style={{
                      left: `calc(50% + ${x}px)`,
                      top: `calc(50% + ${y}px)`,
                      transform: `translate(-50%, -50%) rotate(${-angle}deg)`
                    }}
                  >
                    <div className="p-2 h-full flex flex-col items-center justify-center text-center">
                      <div
                        className="w-16 h-16 mb-3 rounded-lg bg-cover bg-center"
                        style={{
                          backgroundColor: category.color,
                          backgroundImage: `url(${category.image})`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center'
                        }}
                      />
                      <p className="text-xs font-semibold leading-tight">{category.title}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Manufacturing Process Section */}
        <div className="w-full lg:w-1/2 max-w-lg overflow-hidden bg-white rounded-lg shadow-lg">
          <div className="relative">
            <div className="w-full h-64 bg-purple-200" />
            <div className="absolute inset-0 bg-purple-900/70 text-white p-4">
              <h3 className="text-3xl font-bold mb-3">MANUFACTURING PROCESS</h3>
              <p className="mb-3">
                Ever wondered how weaving is done on handlooms or how is a fabric printed and dyed? Find out the
                manufacturing techniques of different kinds of textiles in this section through interesting videos.
              </p>
              <button className="bg-white text-purple-900 px-6 py-2 rounded-md font-semibold hover:bg-purple-100 transition-colors">
                Explore
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextileCategoriesWheel;











// import React from 'react';

// const TextileCategoriesWheel = () => {
//   const categories = [
//     { title: 'HISTORY', color: '#e91e63', image: 'path/to/history-image.jpg' },
//     { title: 'TRADE', color: '#9c27b0', image: 'path/to/trade-image.jpg' },
//     { title: 'TYPE OF TEXTILE', color: '#673ab7', image: 'path/to/type-textile-image.jpg' },
//     { title: 'TEXTILE TALES', color: '#3f51b5', image: 'path/to/textile-tales-image.jpg' },
//     { title: 'MANUFACTURING PROCESS', color: '#2196f3', image: 'path/to/manufacturing-process-image.jpg' },
//     { title: 'ARTISANS', color: '#03a9f4', image: 'path/to/artisans-image.jpg' },
//     { title: 'TEXTILES AND FABRICS OF INDIAN STATES', color: '#00bcd4', image: 'path/to/indian-states-image.jpg' }
//   ];

//   return (
//     <div className="flex flex-col items-center w-full min-h-screen bg-gray-100 p-8">
//       <div className="text-center mb-12">
//         <h1 className="text-4xl font-bold text-purple-900 mb-4">Textiles and Fabrics Of India</h1>
//         <p className="text-lg text-gray-700">Discover, Learn, and Connect</p>
//       </div>

//       <div className="relative w-[600px] h-[600px]">
//         <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-center">
//           <h2 className="text-2xl font-bold text-purple-800">Textiles and<br />Fabrics of India</h2>
//         </div>

//         <div className="w-full h-full relative animate-spin-slow">
//           {categories.map((category, index) => {
//             const angle = (index * 360) / categories.length;
//             const radius = 250;
//             const x = radius * Math.cos((angle * Math.PI) / 180);
//             const y = radius * Math.sin((angle * Math.PI) / 180);

//             return (
//               <div
//                 key={category.title}
//                 className="absolute bg-white rounded-lg shadow-lg w-32 h-32 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer hover:scale-110 transition-transform duration-300"
//                 style={{
//                   left: `calc(50% + ${x}px)`,
//                   top: `calc(50% + ${y}px)`,
//                   transform: `translate(-50%, -50%) rotate(${-angle}deg)`
//                 }}
//               >
//                 <div className="p-2 h-full flex flex-col items-center justify-center text-center">
//                   <div 
//                     className="w-16 h-16 mb-2 rounded-lg bg-cover bg-center"
//                     style={{
//                       backgroundColor: category.color,
//                       backgroundImage: `url(${category.image})`,
//                       backgroundSize: 'cover',
//                       backgroundPosition: 'center'
//                     }}
//                   />
//                   <p className="text-xs font-semibold leading-tight">{category.title}</p>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>

//       <div className="mt-12 w-full max-w-3xl overflow-hidden bg-white rounded-lg shadow-lg">
//         <div className="relative">
//           <div className="w-full h-64 bg-purple-200" />
//           <div className="absolute inset-0 bg-purple-900/70 text-white p-8">
//             <h3 className="text-3xl font-bold mb-4">MANUFACTURING PROCESS</h3>
//             <p className="mb-4">Ever wondered how weaving is done on handlooms or how is a fabric printed and dyed? Find out the manufacturing techniques of different kinds of textiles in this section through interesting videos.</p>
//             <button className="bg-white text-purple-900 px-6 py-2 rounded-md font-semibold hover:bg-purple-100 transition-colors">
//               Explore
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TextileCategoriesWheel;
