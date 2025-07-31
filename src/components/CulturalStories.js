
import './CulturalStories.css';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
// import './ExploreIndia.css';
// index.js or App.js
import "slick-carousel/slick/slick.css";

const CulturalStories = () => {
  const [stories, setStories] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [newStory, setNewStory] = useState({
    title: '',
    image: '',
    content: ''
  });

 
  const [expandedStoryId, setExpandedStoryId] = useState(null);

  useEffect(() => {
    
    axios.get('http://localhost:5000/api/stories')
      .then(response => {
        setStories(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the stories!', error);
      });
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewStory({ ...newStory, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/api/stories', newStory)
      .then(response => {
        
        setStories([...stories, response.data]);
        
        setNewStory({ title: '', image: '', content: '' });
        setShowForm(false);
      })
      .catch(error => {
        console.error('There was an error adding the story!', error);
      });
  };

  const handleDelete = (storyId) => {
    axios.delete(`http://localhost:5000/api/stories/${storyId}`)
      .then(() => {
      
        setStories(stories.filter(story => story._id !== storyId));
      })
      .catch(error => {
        console.error('There was an error deleting the story!', error);
      });
  };

  const toggleContent = (storyId) => {
    setExpandedStoryId(expandedStoryId === storyId ? null : storyId);
  };

  return (
    <div>
      {/* <header>
        <div className="logo">CultureConnect</div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/virtual-tour">Virtual Tour</Link></li>
            <li><Link to="/language-practice">Language Practice</Link></li>
            <li><Link to="/cultural-stories">Cultural Stories</Link></li>
          </ul>
        </nav>
      </header> */}
       <Header />

      <section id="cultural-stories">
        <h2>Cultural Stories from Around the World</h2>
        <div className="stories-content">
          {stories.map(story => (
            <div key={story._id} className="story-card">
              <h3>{story.title}</h3>
              <img src={story.image} alt={story.title} />
              <div className="story-content">
                {expandedStoryId === story._id ?
                  <p>{story.content}</p> :
                  <p>{story.content.length > 100 ? `${story.content.substring(0, 100)}...` : story.content}</p>}
              </div>
              <span className="read-more" onClick={() => toggleContent(story._id)}>
                {expandedStoryId === story._id ? 'Show Less' : 'Read More'}
              </span>
              <button onClick={() => handleDelete(story._id)}>Delete Story</button>
            </div>
          ))}
        </div>

        <h2>Share Your Story</h2>
        <button onClick={() => setShowForm(true)}>Add Your Story</button>

        {showForm && (
          <div className="form-container">
            <div className="form-overlay" onClick={() => setShowForm(false)}></div>
            <div className="form-wrapper">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="title">Story Title</label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    value={newStory.title}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="image">Image URL</label>
                  <input
                    type="url"
                    id="image"
                    name="image"
                    value={newStory.image}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="content">Your Story</label>
                  <textarea
                    id="content"
                    name="content"
                    rows="5"
                    value={newStory.content}
                    onChange={handleInputChange}
                    required
                  ></textarea>
                </div>
                <button type="submit">Share Story</button>
                <button type="button" onClick={() => setShowForm(false)}>Close</button>
              </form>
            </div>
          </div>
        )}
      </section>

      <footer>
        <p>&copy; 2024 CultureConnect. All rights reserved.</p>
        <p>Designed by Isha Shukla</p>
      </footer>
    </div>
  );
};

export default CulturalStories;
