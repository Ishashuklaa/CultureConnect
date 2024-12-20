
import React from "react";
import Slider from "react-slick";
import { ArrowLeft, ArrowRight } from "lucide-react";
import "./CardList.css";

const cardData = [
  {
    title: "Diwali",
    description: "A vibrant celebration in Goa with colorful parades, music, and festivities",
    imageUrl: "https://images.lifestyleasia.com/wp-content/uploads/sites/7/2022/10/10141531/bandi-chhor-divas.jpeg",
    tags:  ["Festival", "Culture"],
    featured: false
  },
  {
    title: "Holi",
    description: "A traditional harvest festival celebrated with kite flying, bonfires, and cultural activities",
    imageUrl: "https://www.sivola.it/media/cache/header/rc/BMzoNa5t/85/e0/c5d0f9c1f09fdbc1bec67abdfcff.jpeg",
    tags:  ["Festival", "Culture"],
    featured: true
  },
  {
    title: "Onam",
    description: "Kerala's harvest festival featuring boat races, traditional dance, and elaborate feasts",
    imageUrl: "https://static-ai.asianetnews.com/images/01ef3nsxxehcaqabq19gb60bgz/onam-jpg_1200x630xt.jpg",
    tags: ["Festival", "Culture"],
    featured: false
  },
  {
    title: "Navratri",
    description: "A vibrant celebration in Goa with colorful parades, music, and festivities",
    imageUrl: "https://prod-c2i.s3.amazonaws.com/articles/150599089859c398f203679.jpg",
    tags: ["Festival", "Culture"],
    featured: false
  },
  {
    title: "Pongal",
    description: "A traditional harvest festival celebrated with kite flying, bonfires, and cultural activities",
    imageUrl: "https://thefederal.com/h-upload/2024/01/12/392474-pongal.webp",
    tags:  ["Festival", "Culture"],
  },
  {
    title: "Raksha Bandhan",
    description: "Kerala's harvest festival featuring boat races, traditional dance, and elaborate feasts",
    imageUrl: "https://gumlet.assettype.com/sinceindependence/2023-08/6aef735e-0e76-4fb9-9356-918f13eeb865/Raksha_Bandhan_2023.jpg?auto=format%2Ccompress&w=1200",
    tags: ["Festival", "Culture"],
    featured: false
  },
];

const FestiveCard = ({ title, description, imageUrl }) => {
  return (
    <div className="relative w-full p-4 h-[400px]"> {/* Fixed height for uniformity */}
      <div className={`relative overflow-hidden rounded-lg group h-full`}>
   
        <div className="absolute inset-0">
          <img 
            src={imageUrl} 
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <h2 className="text-2xl font-bold mb-2">{title}</h2>
          <p className="text-sm mb-4 opacity-90">{description}</p>
          
          <button className="px-4 py-2 rounded-lg bg-white text-black hover:bg-gray-100 transition-colors flex items-center gap-2">
            Know More
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

const CardList = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NavigationArrow direction="next" />,
    prevArrow: <NavigationArrow direction="prev" />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <div className="px-8 py-12">
      <h1 className="text-3xl font-bold text-center">Festivals Of India</h1>
      <div className="flex justify-between items-center  mb-8">
    

        <div className="text-sm">
          <span className="mr-2">02</span>
          /
          <span className="ml-2">06</span>
        </div>
      </div>

      <Slider {...settings}>
        {cardData.map((card, index) => (
          <FestiveCard
            key={index}
            {...card}
          />
        ))}
      </Slider>
    </div>
  );
};

const NavigationArrow = ({ className, onClick, direction }) => {
  return (
    <button
      className={`
        w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center
        absolute top-1/2 -translate-y-1/2 z-10 hover:bg-gray-50 transition-colors
        ${direction === 'prev' ? 'left-4' : 'right-4'}
        ${className}
      `}
      onClick={onClick}
    >
      {direction === 'prev' ? (
        <ArrowLeft className="w-6 h-6" />
      ) : (
        <ArrowRight className="w-6 h-6" />
      )}
    </button>
  );
};

export default CardList;

