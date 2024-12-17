import React from "react";
import { Search } from "lucide-react";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const MpPage = () => {
  const navigationItems = ["EXPLORE", "BLOGS"];
  const categories = ["ART AND CRAFT", "CUISINE", "HERITAGE", "SPIRITUALITY"];

  
  const socialFeeds = [
    {
      id: 1,
      image: "https://www.clubmahindra.com/blog/media/section_images/desktop23-f54e6ac343dbfab.jpg",
      title: "Heritage Architecture"
    },
    {
      id: 2,
      image: "https://vajiramandravi.s3.us-east-1.amazonaws.com/media/2023/11/14/13/18/50/99.jpg",
      title: "Birsa Munda"
    },
    {
      id: 3,
      image: "https://www.indiantravelwaves.com/wp-content/uploads/2019/03/Ranthambore-Tiger-Safari-1024x683-1-compressed.jpg",
      title: "Jungle Adventures"
    },
    {
      id: 4,
      image: "http://www.kitesholidayexpert.com/wp-content/uploads/2022/01/ujjain.jpg",
      title: "Spiritual Heritage"
    },
    {
      id: 5,
      image: "https://www.clubmahindra.com/blog/media/section_images/madhyaprad-7205fc24ac463bb.jpg",
      title: "Cultural Heritage"
    },
    {
      id: 6,
      image: "https://live.staticflickr.com/7410/11273796895_e4f5782ef7_b.jpg",
      title: "Historical Sites"
    }
  ];

  const citiesCulture = [
    { id: 1, image: "https://i.ytimg.com/vi/ti5BGmBQDxk/hqdefault.jpg", city: "Indore", description: "Food Paradise" },
    { id: 2, image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/d9/90/ac/img-20190317-wa0012-largejpg.jpg?w=1200&h=1200&s=1", city: "Bhopal", description: "City of Lakes" },
    { id: 3, image: "https://mediaindia.eu/wp-content/uploads/2020/12/Markets-of-Gwalior-scaled.jpg", city: "Gwalior", description: "Historic Forts" },
    { id: 5, image: "https://www.traveldealsfinder.com/wp-content/uploads/Boating-in-Bhedaghat.jpg", city: "Jabalpur", description: "Marble Rocks" },
    { id: 4, image: "https://www.shrineyatra.com/wp-content/uploads/2022/12/Ujjain-Kumbh.jpg", city: "Ujjain", description: "Spiritual City" },
    
    { id: 6, image: "https://magikindia.com/wp-content/uploads/2017/05/khajuraho-1.jpg", city: "Khajuraho", description: "Temples and Art" },
  ];




  const artCraft = [
    { id: 1, image: "https://inifdahmedabad.com/wp-content/uploads/2020/11/process-of-manufacture-of-chanderi-1.png", title: "Chanderi Sarees" },
    { id: 2, image: "https://media.cntraveller.in/wp-content/uploads/2016/12/bamboo-art.jpg", title: "Wooden Crafts" },
    { id: 3, image: "http://www.indiainch.org/wp-content/uploads/2012/02/Indigenous_TribalArtManandAnimalFormsLadoc20thcentury.jpg", title: "Tribal Paintings" },
    { id: 4, image: "https://i.pinimg.com/originals/54/a0/71/54a0719e5bb795adfd8bf4401a074f6c.jpg", title: "Zari and Zardozi" },
    { id: 5, image: "https://farm4.staticflickr.com/3173/3059293511_c85d6cf813_z.jpg", title: "Bamboo and Cane Craft" },
  
  ];

  const cuisine = [
    { id: 1, image: "https://static.toiimg.com/photo/76195669.cms", title: "Poha-Jalebi" },
    { id: 2, image: "https://www.culturalindia.net/iliimages/Daulat-ke-chaat-in-Ujjain.jpg", title: "Daal Bafla" },
    { id: 3, image: "https://www.hellotravel.com/stories/thumb/places-to-eat-best-malpuas-in-india-6.jpg", title: "Malpua" },
  ];

  // const heritage = [
  //   { id: 1, image: "https://www.templepurohit.com/wp-content/uploads/2017/06/Khajuraho-temples.jpg", title: "Khajuraho Temples" },
  //   { id: 2, image: "https://upload.wikimedia.org/wikipedia/commons/f/f4/Sanchi_stupa_panorama.jpg", title: "Sanchi Stupa" },
  //   { id: 3, image: "https://upload.wikimedia.org/wikipedia/commons/e/ea/Mandu_palace.jpg", title: "Mandu Fort" },
  // ];

  // const spirituality = [
  //   { id: 1, image: "https://www.shreepeeth.com/images/gallery/ujjain-mahakal/ujjain-mahakal-shiva.jpg", title: "Mahakaleshwar Temple" },
  //   { id: 2, image: "https://www.holidify.com/images/compressed/798.jpg", title: "Omkareshwar" },
  //   { id: 3, image: "https://upload.wikimedia.org/wikipedia/commons/2/22/Amarkantak.jpg", title: "Amarkantak" },
  // ];
  const spirituality = [
    { id: 1, image: "https://www.shreepeeth.com/images/gallery/ujjain-mahakal/ujjain-mahakal-shiva.jpg", title: "Mahakaleshwar Temple" },
    { id: 2, image: "https://www.holidify.com/images/compressed/798.jpg", title: "Omkareshwar" },
    { id: 3, image: "https://upload.wikimedia.org/wikipedia/commons/2/22/Amarkantak.jpg", title: "Amarkantak" },
  ];
  
  const spiritualitySliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const Section = ({ title, items }) => (
    <section className="py-16 px-8">
      <h2 className="text-4xl font-serif text-center mb-12">{title}</h2>
      <div className="grid grid-cols-3 gap-6 max-w-6xl mx-auto">
        {items.map((item) => (
          <div key={item.id} className="bg-white text-black rounded-lg overflow-hidden shadow-lg">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-bold">{item.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
// Sample Heritage Data
const heritage = [
  {
    id: 1,
    title: "Khajuraho Temples",
    location: "Khajuraho",
    image: "path/to/khajuraho.jpg",
  },
  {
    id: 2,
    title: "Sanchi Stupa",
    location: "Sanchi",
    image: "path/to/sanchi.jpg",
  },
  {
    id: 3,
    title: "Gwalior Fort",
    location: "Gwalior",
    image: "path/to/gwalior.jpg",
  },
  {
    id: 4,
    title: "Bhimbetka Caves",
    location: "Raisen",
    image: "path/to/bhimbetka.jpg",
  },
  {
    id: 5,
    title: "Orchha Fort",
    location: "Orchha",
    image: "path/to/orchha.jpg",
  },
];

// Slider Settings
const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

  

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-transparent">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="w-20">
              <img
                src="https://iconape.com/wp-content/files/uh/182987/svg/182987.svg"
                alt="MP Tourism Logo"
                className="w-full bg-red-900 rounded-lg"
              />
            </div>
            <div className="flex items-center space-x-8">
              {navigationItems.map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-sm hover:text-red-500 transition-colors"
                >
                  {item}
                </a>
              ))}
              <div className="flex items-center">
                <Search className="w-5 h-5" />
                <span className="ml-2">SEARCH</span>
              </div>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0">
          <img
            src="https://incrediblemadhyapradesh.com/wp-content/uploads/slider/cache/43f62db6cc2a1b471a479e3f48145c00/1572436388_madhya_pradesh_web.jpg"
            alt="Tiger in wild"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="flex justify-center space-x-12">
            {categories.map((category) => (
              <button
                key={category}
                className="px-8 py-4 bg-white text-black hover:bg-red-900 hover:text-white transition-colors"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16 px-8">
        <h2 className="text-4xl font-serif text-center mb-12">SOCIAL FEEDS</h2>
         <div className="grid grid-cols-3 gap-6 max-w-6xl mx-auto">
           {socialFeeds.map((feed) => (
            <div key={feed.id} className="relative group">
              <img
                src={feed.image}
                alt={feed.title}
                className="w-full h-64 object-cover"
              />
              <div className="absolute top-4 right-4">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                  <div className="w-4 h-4 border-2 border-gray-600 rounded-full" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      <section className="relative h-screen">
  <div className="absolute inset-0">
    <img 
      src="https://i.pinimg.com/originals/19/72/bc/1972bceb0f38cd45ef0d418f126ef218.jpg" 
      alt="Culture Of MP" 
      className="w-full h-full object-cover"
    />
  </div>
  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50" />
  {/* texttt */}
  <div className="absolute bottom-28 left-0 right-0 flex justify-center items-center">
    <h1 className="text-4xl md:text-6xl font-bold text-white text-center">
      Explore Culture of MP
    </h1>
  </div>
</section>


      {/* City Culture Section */}
      <section className="py-16 px-8">
        <h2 className="text-4xl font-serif text-center mb-12">CULTURE OF CITIES</h2>
        <div className="grid grid-cols-3 gap-6 max-w-6xl mx-auto">
          {citiesCulture.map((city) => (
            <div key={city.id} className="bg-white text-black rounded-lg overflow-hidden shadow-lg">
              <img
                src={city.image}
                alt={city.city}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold">{city.city}</h3>
                <p className="text-gray-700">{city.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <button className="flex items-center space-x-2 px-8 py-4 bg-red-900 text-white rounded-lg shadow-lg hover:bg-red-700 transition">
            <span>Explore More Cities</span>
            <span>&rarr;</span>
          </button>
        </div>
      </section>

     
      {/* Art and Craft Section */}
      {/* <Section title="ART AND CRAFT OF MP" items={artCraft} /> */}
{/*      
<section className="relative py-16 bg-gradient-to-r from-yellow-400 via-red-500 to-purple-600 text-white">
  <h2 className="text-4xl font-serif text-center mb-12">ART AND CRAFT OF MP</h2>
  <div className="relative flex items-center justify-center overflow-hidden">
    <div className="relative w-96 h-96 rounded-full border-4 border-white flex items-center justify-center animate-spin-slow">
      
      {artCraft.map((item, index) => (
        <div
          key={item.id}
          className={`absolute w-24 h-24 transform origin-center 
                      rotate-[${(360 / artCraft.length) * index}deg]`}
          style={{
            transformOrigin: "50% 200px",
            transform: `rotate(${(360 / artCraft.length) * index}deg) translateY(-50%)`,
          }}
        >
          <div className="relative w-60 h-60 bg-white text-black rounded-full shadow-lg hover:scale-110 transition-transform">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full rounded-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
              <p className="text-xs text-white text-center px-2">{item.title}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black opacity-50 pointer-events-none" />
  </div>
</section> */}
<section className="relative py-20 bg-gradient-to-r from-brown-600 via-yellow-700 to-green-600

 text-white">
  <h2 className="text-4xl font-bold text-center mb-12 drop-shadow-lg">
    ART AND CRAFT OF MP
  </h2>
  <div className="relative flex items-center justify-center overflow-hidden mb-16">
    {/* Rotating Wheel */}
    <div className="relative w-[500px] h-[500px] rounded-full flex items-center justify-center animate-spin-slow">
      {/* Rotating wheel with items */}
      {artCraft.map((item, index) => {
        const angle = (360 / artCraft.length) * index; // Calculate angle for even spacing
        const rotationStyle = {
          transform: `rotate(${angle}deg) translate(0, -250px) rotate(-${angle}deg)`, // Increased translate value for more space
        };

        return (
          <div
            key={item.id}
            className="absolute w-56 h-56 bg-white rounded-full shadow-xl transform hover:scale-110 transition-transform"
            style={rotationStyle}
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full rounded-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
              <p className="text-md text-white text-center px-2">{item.title}</p>
            </div>
          </div>
        );
      })}
    </div>
  </div>

  {/* Explore City Wise Button */}
  <div className="flex justify-center">
    <button className="px-8 py-3 bg-gradient-to-r from-teal-500 to-cyan-600 text-white font-semibold text-lg rounded-lg shadow-xl hover:bg-gradient-to-r hover:from-teal-400 hover:to-cyan-500 transition-all">
      Explore City Wise
    </button>
  </div>

  {/* Subtle background gradient */}
  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900 opacity-40 pointer-events-none" />
</section>




      {/* Cuisine Section */}
      {/* <Section title="CUISINE OF MP" items={cuisine} /> */}
      <section className="py-16 px-8">
  <h2 className="text-4xl font-serif text-center mb-12">CUISINE OF MP</h2>
  <Slider
    dots={true}
    infinite={true}
    speed={500}
    slidesToShow={3}
    slidesToScroll={1}
    autoplay={true}
    autoplaySpeed={3000}
    responsive={[
      {
        breakpoint: 1024, // For tablets
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 600, // For mobile devices
        settings: { slidesToShow: 1 },
      },
    ]}
    className="max-w-6xl mx-auto"
  >
    {cuisine.map((dish) => (
      <div key={dish.id} className="p-4">
        <div className="bg-white text-black rounded-lg overflow-hidden shadow-lg">
          <img
            src={dish.image}
            alt={dish.title}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-bold">{dish.title}</h3>
          </div>
        </div>
      </div>
    ))}
  </Slider>
</section>


      {/* Heritage Section */}
      {/* <Section title="HERITAGE OF MP" items={heritage} /> */}

      {/* Heritage Section */}
      <section className="py-16 px-8 bg-gray-55">
      <h2 className="text-4xl font-serif text-center mb-12 text-white">HERITAGE OF MP</h2>

        <Slider {...sliderSettings}>
          {heritage.map((place) => (
            <div key={place.id} className="p-4">
              <div className="relative group overflow-hidden rounded-lg shadow-lg">
                {/* Background Image */}
                <img
                  src={place.image}
                  alt={place.title}
                  className="w-full h-64 object-cover transform group-hover:scale-105 transition duration-500"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-500 flex flex-col justify-center items-center text-white">
                  <h3 className="text-2xl font-bold mb-2">{place.title}</h3>
                  <p className="text-sm">{place.location}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </section>

      {/* Spirituality Section */}
      {/* <Section title="SPIRITUALITY IN MP" items={spirituality} /> */}
      <section className="py-16 px-8 bg-black text-white">
      <h2 className="text-4xl font-serif text-center mb-12">SPIRITUALITY</h2>
      <div className="relative">
        <Slider {...spiritualitySliderSettings}>
          {spirituality.map((item) => (
            <div key={item.id} className="relative">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50" />
              <div className="absolute bottom-4 left-4 text-white text-3xl font-bold z-10">
                {item.title}
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
    </div>
  );
};

export default MpPage;












 {/* <div className="flex justify-center space-x-8">
            {['ART AND CRAFT', 'CUISINE', 'SOUND & LIGHT SHOW', 'WALKS AND TRAILS'].map((item) => (
              <button
                key={item}
                className="px-6 py-3 bg-transparent border border-white text-white hover:bg-red-900 hover:border-red-900 transition-colors"
              >
                {item}
              </button>
            ))}
          </div> */}