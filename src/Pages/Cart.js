// src/Pages/Cart.js
import React, { useEffect, useState, useMemo } from 'react';
import axios from 'axios';
import '../styles/cart.css';
import { useNavigate } from 'react-router-dom';


export default function Cart({ user }) {
  const [cartItems, setCartItems] = useState([]);
  const [message, setMessage]   = useState('');
  const navigate                = useNavigate();

  /* ───────────────────────────────────
     Fetch cart on mount / user change
  ─────────────────────────────────── */
  useEffect(() => {
    if (!user) {
      navigate('/login');
      return;
    }

    axios
      .get(`http://localhost:5000/api/cart/${user.id}`)
      .then(res => setCartItems(res.data))
      .catch(() => setMessage('Failed to fetch cart items.'));
  }, [user, navigate]);

  /* ───────────────────────────────────
     Remove an item from the cart
  ─────────────────────────────────── */
  const removeItem = async productId => {
    try {
      await axios.delete(
        `http://localhost:5000/api/cart/${user.id}/${productId}`
      );
      setCartItems(ci => ci.filter(item => item.productId !== productId));
    } catch {
      setMessage('Failed to remove item');
    }
  };

  /* ───────────────────────────────────
     Checkout
  ─────────────────────────────────── */
  const checkout = async () => {
    try {
      await axios.post('http://localhost:5000/api/buy', { userId: user.id });
      setCartItems([]);
      setMessage('Purchase successful!');
    } catch {
      setMessage('Purchase failed.');
    }
  };

  /* ───────────────────────────────────
     Total price (memoised)
  ─────────────────────────────────── */
  const total = useMemo(
    () =>
      cartItems.reduce(
        (sum, item) =>
          sum + (item.productId?.price || item.price) * (item.quantity || 1),
        0
      ),
    [cartItems]
  );

  /* ───────────────────────────────────
     Render
  ─────────────────────────────────── */
  return (
    <div className="cart-container">
        
      <h2>Your Cart</h2>

      {cartItems.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        <ul>
          {cartItems.map(item => {
            const product = item.productId || item; // handle populated vs flat
            return (
              <li className="cart-item" key={product._id}>
                <img src={product.image} alt={product.name} />
                <div className="cart-details">
                  <h4>{product.name}</h4>
                  <p>Price: ₹{product.price}</p>
                  {item.quantity && <p>Qty: {item.quantity}</p>}
                </div>
                <div className="cart-actions">
                  <button onClick={() => removeItem(product._id)}>
                    Remove
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      )}

      {/* total & checkout */}
      {cartItems.length > 0 && (
        <>
          <div className="total-section">Total: ₹{total.toLocaleString()}</div>
          <button className="checkout-btn" onClick={checkout}>
            Buy Now
          </button>
        </>
      )}

      {message && <p>{message}</p>}
    </div>
  );
}
