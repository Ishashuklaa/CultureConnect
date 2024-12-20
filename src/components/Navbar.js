import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Pages/ExploreIndia.css';

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    // Add your search logic here
    console.log('Search term:', searchTerm);
  };

  return (
    <div className="navbar">
      <Link to="/" className="active">Home</Link>
      {/* <Link to="/states">States</Link> */}
      <Link to="/about">Festivals</Link>
      <Link to="/about">Places</Link>
      <Link to="/about">Museums</Link>
      <Link to="/about">Events</Link>
      <Link to="/art-gallery">Art Gallery</Link>
 
      {/* <Link to="/about">About</Link> */}
      {/* <Link to="/contact">Contact</Link> */}
      
      <div className="search-container">
        <input 
          type="text" 
          placeholder="Search.." 
          value={searchTerm} 
          onChange={(e) => setSearchTerm(e.target.value)} 
        />
        <button onClick={handleSearch}>Search</button>
      </div>
    </div>
  );
};

export default Navbar;
