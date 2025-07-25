import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Shop.css';
import { useNavigate, Link } from 'react-router-dom'; // ← Link added
import Header  from '../components/Header';

export default function Shop({ user }) {
  const [products, setProducts] = useState([]);
  const [selectedState, setSelectedState] = useState('');
  const [cartMessage, setCartMessage] = useState('');
  const navigate = useNavigate();

  const states = ["Uttar Pradesh", "Maharashtra", "Rajasthan", "Tamil Nadu", "Madhya Pradesh"];

  useEffect(() => {
    axios.get(`http://localhost:5000/api/products${selectedState ? `?state=${selectedState}` : ''}`)
      .then(res => setProducts(res.data))
      .catch(err => console.error(err));
  }, [selectedState]);

  const addToCart = async (productId) => {
    if (!user) return navigate('/login');
    try {
      await axios.post('http://localhost:5000/api/cart', {
        userId: user.id,
        productId,
        quantity: 1
      });
      setCartMessage('Item added to cart!');
    } catch (err) {
      setCartMessage('Failed to add to cart');
    }
  };

  const buyNow = async () => {
    if (!user) return navigate('/login');
    try {
      await axios.post('/api/buy', { userId: user.id });
      alert("Purchase successful!");
    } catch (err) {
      alert("Purchase failed");
    }
  };

  return (
    <div className='shop-container'>
        <Header />
      {/* HEADER WITH CART LINK */}
      <div className="shop-header">
        <h1>Shop Local Artisan Products</h1>
        <Link to="/cart" className="cart-link">Go to Cart 🛒</Link>
      </div>

      {/* State filter dropdown */}
      <select value={selectedState} onChange={(e) => setSelectedState(e.target.value)}>
        <option value=''>All States</option>
        {states.map(state => <option key={state} value={state}>{state}</option>)}
      </select>

      {cartMessage && <div className="cart-msg">{cartMessage}</div>}

      <div className="product-grid">
        {products.map(product => (
          <div className="product-card" key={product._id}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>₹{product.price}</p>
            <p className='text-sm'>{product.description}</p>
            <button onClick={() => addToCart(product._id)}>Add to Cart</button>
          </div>
        ))}
      </div>

      {user && (
        <div className='buy-section'>
          <button onClick={buyNow} className="buy-button">Buy Now</button>
        </div>
      )}
    </div>
  );
}
