// src/Pages/UploadProduct.js
import React, { useState } from 'react';
import axios from 'axios';
import '../styles/upload.css'; // Optional custom styles

export default function UploadProduct({ user }) {
  const [product, setProduct] = useState({
    name: '',
    price: '',
    description: '',
    state: '',
    image: ''
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user) return alert('Please log in to upload a product.');

    try {
      await axios.post('http://localhost:5000/api/products', {
        ...product,
        userId: user.id,
      });
      setMessage('Product uploaded successfully!');
      setProduct({ name: '', price: '', description: '', state: '', image: '' });
    } catch (err) {
      setMessage('Failed to upload product.');
    }
  };

  return (
    <div className="upload-container">
      <h2>Upload Your Product</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Product Name" required value={product.name} onChange={handleChange} />
        <input name="price" type="number" placeholder="Price" required value={product.price} onChange={handleChange} />
        <input name="state" placeholder="State" required value={product.state} onChange={handleChange} />
        <input name="image" placeholder="Image URL" required value={product.image} onChange={handleChange} />
        <textarea name="description" placeholder="Description" required value={product.description} onChange={handleChange} />
        <button type="submit">Upload</button>
      </form>
      {message && <p className="upload-message">{message}</p>}
    </div>
  );
}
