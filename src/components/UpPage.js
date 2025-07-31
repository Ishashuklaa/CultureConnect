import React from "react";
import { Search } from "lucide-react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const UpPage = () => {
  const navigationItems = ["EXPLORE", "BLOGS"];
  const categories = ["ART AND CRAFT", "CUISINE", "HERITAGE", "SPIRITUALITY"];

  const citiesCulture = [
    { id: 1, image: "https://www.holidify.com/images/bgImages/VARANASI.jpg", city: "Varanasi", description: "Spiritual Capital" },
    { id: 2, image: "https://images.ixigo.com/image/upload/t_thumb,f_auto/taj-mahal-images-photos-56f8c663bad3eb6e7214124a.jpg", city: "Agra", description: "Land of the Taj" },
    { id: 3, image: "https://www.lavacanza.in/imghandler.ashx?image=/UserUploads/Blog/2015/02/Chhota_imambara_Lucknow.jpg&width=1400&height=0", city: "Lucknow", description: "City of Nawabs" },
    { id: 4, image: "https://www.travelingtoworld.com/wp-content/uploads/2016/08/places-to-visit-in-mathura-768x569.jpg", city: "Mathura", description: "Birthplace of Lord Krishna" },
    { id: 5, image: "https://www.adotrip.com/public/images/events/5c5d27851db3d-Prayagraj%20kumbh%20mela%20Trip.jpg", city: "Prayagraj", description: "Sangam City" },
  ];

  const artCraft = [
    { id: 1, image: "http://cdn.shopify.com/s/files/1/0612/3670/7497/articles/fyrjdrtdr_chikankari_embroidery_a2154a27-907a-407b-84aa-2ad25d567f86.png?v=1675872939", title: "Chikankari Embroidery" },
    { id: 2, image: "https://im.rediff.com/money/2021/jul/18moradabad-brass.jpg", title: "Moradabad Brassware" },
    { id: 3, image: "http://3.bp.blogspot.com/-co-hHKqjNec/UX_Mu21dx_I/AAAAAAAADdk/x6buAjjani0/s1600/green-chanderi-banarasi-saree-with-paisley.jpg", title: "Banarasi Sarees" },
    { id: 4, image: "https://vajiramandravi.s3.us-east-1.amazonaws.com/media/2020/5/3/10/19/33/gorakhpur_terracottaa.jpg", title: "Gorakhpur Terracotta" },
    { id: 5, image: "http://www.filmingindo.com/wp-content/uploads/2020/07/Firozabad-the-City-of-Glass-4.jpg", title: "Glassware of Firozabad" },
  ];

  const cuisine = [
    { id: 1, image: "http://indiancookingmanual.com/wp-content/uploads/2015/09/20150810_083706.jpg", title: "Chaulai (Amaranth) Ka Saag Green" },
    { id: 2, image: "https://www.manjulaskitchen.com/wp-content/uploads/khasta_kachori_besan.jpg", title: "Kachori Sabzi" },
    { id: 3, image: "https://thecookingmaster.com/wp-content/uploads/2022/06/Vegetable-Biryani-Tehri.jpg", title: "Tehri (Veg Biryani)" },
  ];

  const heritage = [
    {
      id: 1,
      title: "Taj Mahal",
      location: "Agra",
      image: "https://moderntrekker.com/wp-content/uploads/2018/08/Agra-Taj-Mahal-e1534419073760.jpg",
    },
    {
      id: 2,
      title: "Buddhist pilgrimage site",
      location: "Sarnath",
      image: "https://www.trawell.in/admin/images/upload/468456692Sarnath_Main.jpg",
    },
    {
      id: 3,
      title: "Pandeshwar Temple",
      location: "Hastinapur",
      image: "https://www.trawell.in/admin/images/upload/155703284Main.jpg",
    },
  ];

  const spirituality = [
    {
      id: 1,
      title: "Kashi Vishwanath Temple",
      image: "https://temple.yatradham.org/public/Product/temple/temple_To4YlfIJ_202308271009080.jpg",
    },
    {
      id: 2,
      title: "Prem Mandir",
      image: "https://1.bp.blogspot.com/-8d0or8U6oqQ/XRiMl36QpAI/AAAAAAAACR0/WlgIuzX49rwpUN-XDpO8r890YDRDLnJ1gCEwYBhgL/s1600/IMG_20190630_151448.jpg",
    },
    {
      id: 3,
      title: "Shri Ram Janma Bhoomi Temple",
      image: "https://ayodhyacity.co.in/wp-content/uploads/2024/01/Shree_Ram_Janmaboomi_Temple_in_Ayodhya.jpg",
    },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 1 },
      },
    ],
  };

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

  return (
    <div className="min-h-screen bg-black text-white">
      <header className="fixed top-0 w-full z-50 bg-transparent">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="w-20">
              <img
                src="http://3.bp.blogspot.com/-bMA-5v4zkUw/T-f1-FzAg7I/AAAAAAAABPM/7LQd4FTqQwc/s1600/UP+Tourism+logo10.jpg"
                alt="UP Logo"
                className="w-full bg-yellow-900 rounded-lg"
              />
            </div>
            <div className="flex items-center space-x-8">
              {navigationItems.map((item) => (
                <a key={item} href="#" className="text-sm hover:text-yellow-400 transition-colors">
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
         <img
    src="https://blogmedia.testbook.com/blog/wp-content/uploads/2023/07/amazing-up-6777cdc3.png"
    alt="UP Tourism"
    className="absolute inset-0 w-full h-full object-contain"
  />
        <div className="absolute bottom-0 left-0 right-0 p-8 flex justify-center space-x-8">
          {categories.map((cat) => (
            <button
              key={cat}
              className="px-8 py-4 bg-white text-black hover:bg-yellow-700 hover:text-white transition-colors"
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* City Culture Section */}
      <section className="py-16 px-8">
        <h2 className="text-4xl font-serif text-center mb-12">CULTURE OF CITIES</h2>
        <div className="grid grid-cols-3 gap-6 max-w-6xl mx-auto">
          {citiesCulture.map((city) => (
            <div key={city.id} className="bg-white text-black rounded-lg overflow-hidden shadow-lg">
              <img src={city.image} alt={city.city} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-bold">{city.city}</h3>
                <p className="text-gray-700">{city.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Art and Craft */}
<section className="relative py-20 bg-gradient-to-r from-black via-gray-900 to-black text-white">

        <h2 className="text-4xl font-bold text-center mb-12 drop-shadow-lg">ART AND CRAFT OF UP</h2>
        <div className="relative flex items-center justify-center overflow-hidden mb-16">
          <div className="relative w-[500px] h-[500px] rounded-full flex items-center justify-center animate-spin-slow">
            {artCraft.map((item, index) => {
              const angle = (360 / artCraft.length) * index;
              const style = {
                transform: `rotate(${angle}deg) translate(0, -250px) rotate(-${angle}deg)`,
              };
              return (
                <div key={item.id} className="absolute w-56 h-56 bg-white rounded-full shadow-xl" style={style}>
                  <img src={item.image} alt={item.title} className="w-full h-full rounded-full object-cover" />
                  <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                    <p className="text-md text-white text-center px-2">{item.title}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Cuisine */}
      <section className="py-16 px-8">
        <h2 className="text-4xl font-serif text-center mb-12">CUISINE OF UP</h2>
        <Slider {...sliderSettings} className="max-w-6xl mx-auto">
          {cuisine.map((dish) => (
            <div key={dish.id} className="p-4">
              <div className="bg-white text-black rounded-lg overflow-hidden shadow-lg">
                <img src={dish.image} alt={dish.title} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="text-xl font-bold">{dish.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </section>

      {/* Heritage */}
      <section className="py-16 px-8 bg-gray-800">
        <h2 className="text-4xl font-serif text-center mb-12 text-white">HERITAGE OF UP</h2>
        <Slider {...sliderSettings}>
          {heritage.map((place) => (
            <div key={place.id} className="p-4">
              <div className="relative group overflow-hidden rounded-lg shadow-lg">
                <img src={place.image} alt={place.title} className="w-full h-64 object-cover group-hover:scale-105 transition duration-500" />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-500 flex flex-col justify-center items-center text-white">
                  <h3 className="text-2xl font-bold mb-2">{place.title}</h3>
                  <p className="text-sm">{place.location}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </section>

      {/* Spirituality */}
      <section className="py-16 px-8 bg-black text-white">
        <h2 className="text-4xl font-serif text-center mb-12">SPIRITUALITY</h2>
        <div className="relative">
          <Slider {...spiritualitySliderSettings}>
            {spirituality.map((item) => (
              <div key={item.id} className="relative">
                <img src={item.image} alt={item.title} className="w-full h-[600px] object-cover" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50" />
                <div className="absolute bottom-4 left-4 text-white text-3xl font-bold z-10">{item.title}</div>
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </div>
  );
};

export default UpPage;
