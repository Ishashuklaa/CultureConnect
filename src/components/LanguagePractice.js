import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './LanguagePractice.css';
import Header  from '../components/Header';

const statesWithLanguages = {
  "Uttar Pradesh": ["Hindi", "Urdu", "Awadhi"],
  "Maharashtra": ["Marathi", "Hindi"],
  "Tamil Nadu": ["Tamil", "English"],
  "Punjab": ["Punjabi", "Hindi"],
  "Kerala": ["Malayalam", "English"],
};

const LanguagePractice = () => {
  const [inputText, setInputText] = useState('');
  const [selectedLang, setSelectedLang] = useState('hi');
  const [translatedText, setTranslatedText] = useState('');

  const languageMap = {
    "Hindi": "hi",
    "Urdu": "ur",
    "Awadhi": "hi",
    "Marathi": "mr",
    "Tamil": "ta",
    "Punjabi": "pa",
    "Malayalam": "ml",
    "English": "en"
  };

  const handleTranslate = async () => {
    if (!inputText.trim()) {
      setTranslatedText("Please enter text to translate");
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/api/translate', {
        q: inputText,
        source: 'en',
        target: selectedLang,
      });
      setTranslatedText(response.data.translatedText);
    } catch (error) {
      console.error("Translation Error:", error);
      setTranslatedText("❌ Translation failed. Check input and language.");
    }
  };

  return (
    <div>
      <Header />

      <section id="language-practice">
        <h1>Language Practice Sessions</h1>

        {/* Translator */}
        <div className="translator-section">
          <h3>Real-time Translator</h3>
          <input
            type="text"
            placeholder="Type a word or sentence"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          />
          <select value={selectedLang} onChange={(e) => setSelectedLang(e.target.value)}>
            {Object.entries(languageMap).map(([label, code]) => (
              <option key={code} value={code}>{label}</option>
            ))}
          </select>
          <button onClick={handleTranslate}>Translate</button>
          <p className="translated-output">{translatedText}</p>
        </div>

        {/* State-wise Language Explorer */}
        <div className="language-lessons">
          <h3>Explore Languages by Region</h3>
          <ul>
            {Object.entries(statesWithLanguages).map(([state, langs]) => (
              <li key={state}>
                <strong>
                  <Link to="/explore-india">{state}</Link>:
                </strong> {langs.join(', ')}
              </li>
            ))}
          </ul>
        </div>

        {/* Sign Language */}
        <div className="sign-language">
          <h3>Indian Sign Language (ISL)</h3>
          <p>Learn common gestures and alphabets used in ISL.</p>
          <img src="https://i.pinimg.com/originals/e9/d1/c7/e9d1c752dd7f49ed4d2c54b7cfa81020.jpg"
               alt="Indian Sign Language Alphabet"
               style={{ maxWidth: '100%' }} />
        </div>
      </section>

      <footer>
        <p>&copy; 2024 CultureConnect. All rights reserved.</p>
        <p>Designed by Isha Shukla</p>
      </footer>
    </div>
  );
};

export default LanguagePractice;

