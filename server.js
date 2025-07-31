const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 5000;
const JWT_SECRET = "your_jwt_secret";

app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/cultureconnect', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');
}).catch(err => {
  console.error('MongoDB connection error:', err);
});

// Mongo Schemas
const storySchema = new mongoose.Schema({
  title: String,
  image: String,
  content: String,
});
const Story = mongoose.model('Story', storySchema);

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
});
const User = mongoose.model('User', userSchema);

// Routes: Stories
app.get('/api/stories', async (req, res) => {
  const stories = await Story.find();
  res.json(stories);
});

app.post('/api/stories', async (req, res) => {
  const newStory = new Story(req.body);
  await newStory.save();
  res.json(newStory);
});

app.delete('/api/stories/:id', async (req, res) => {
  try {
    const story = await Story.findByIdAndDelete(req.params.id);
    if (!story) {
      return res.status(404).json({ message: 'Story not found' });
    }
    res.status(200).json({ message: 'Story deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting story', error });
  }
});

// Routes: Auth
app.post('/api/signup', async (req, res) => {
  const { name, email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    const user = new User({ name, email, password: hashedPassword });
    await user.save();
    res.status(201).json({ message: "User registered successfully" });
  } catch (err) {
    res.status(400).json({ error: "Email already in use or invalid data" });
  }
});

app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.status(401).json({ error: "Invalid email or password" });
  }

  const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: "1h" });
  res.json({ token, user: { id: user._id, name: user.name, email: user.email } });
});

// ✅ Language Translate Proxy Route
app.post('/api/translate', async (req, res) => {
  const { q, source, target } = req.body;

  try {
    const response = await axios.post('https://translate.astian.org/translate', {
      q,
      source,
      target,
      format: 'text',
    }, {
      headers: { 'Content-Type': 'application/json' }
    });

    res.json({ translatedText: response.data.translatedText });
  } catch (error) {
    console.error("Translation API Error:", error.message);
    res.status(500).json({ error: 'Translation failed' });
  }
});

// Server listen
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Product Schema
const productSchema = new mongoose.Schema({
  name: String,
  description: String,
  image: String,
  price: Number,
  state: String,
  seller: String,
});

const Product = mongoose.model('Product', productSchema);

// Cart Schema (user-specific)
const cartItemSchema = new mongoose.Schema({
  userId: mongoose.Schema.Types.ObjectId,
  productId: mongoose.Schema.Types.ObjectId,
  quantity: Number,
});

const CartItem = mongoose.model('CartItem', cartItemSchema);
const products = [
  {
    id: 1,
    name: "Handcrafted Terracotta Pot",
    price: 350,
    image: "https://www.englishsalvage.co.uk/upload/images/shopprod/lovely-large-handmade-terracotta-pots_29656_pic4_size3.jpg",
    state: "Madhya Pradesh"
  },
  {
    id: 2,
    name: "Chikankari Kurti",
    price: 1200,
    image: "https://i.pinimg.com/originals/db/b3/c0/dbb3c02e1eb5e3d736ee417c223fc680.jpg",
    state: "Uttar Pradesh"
  },
  {
    id: 3,
    name: "Wrought Iron Wall Art",
    price: 900,
    image: "https://foter.com/photos/300/l1000-jpg-359.jpg",
    state: "Madhya Pradesh"
  },
  {
    id: 4,
    name: "Zardozi Embroidery Box",
    price: 800,
    image: "https://i.pinimg.com/originals/64/9c/fd/649cfdf5ba93286ea7c3b0491abb867f.jpg",
    state: "Uttar Pradesh"
  }
];

app.get('/api/products', (req, res) => {
  const state = req.query.state;
  if (state) {
    const filtered = products.filter(product => product.state === state);
    return res.json(filtered);
  }
  res.json(products);
});

// Routes for products
// app.get('/api/products', async (req, res) => {
//   const { state } = req.query;
//   const products = state ? await Product.find({ state }) : await Product.find();
//   res.json(products);
// });

app.post('/api/products', async (req, res) => {
  const newProduct = new Product(req.body);
  await newProduct.save();
  res.status(201).json(newProduct);
});

// Routes for Cart
app.get('/api/cart/:userId', async (req, res) => {
  const cart = await CartItem.find({ userId: req.params.userId }).populate('productId');
  res.json(cart);
});

app.post('/api/cart', async (req, res) => {
  const { userId, productId, quantity } = req.body;
  const existingItem = await CartItem.findOne({ userId, productId });

  if (existingItem) {
    existingItem.quantity += quantity;
    await existingItem.save();
    return res.json(existingItem);
  }

  const newItem = new CartItem({ userId, productId, quantity });
  await newItem.save();
  res.status(201).json(newItem);
});

app.post('/api/buy', async (req, res) => {
  const { userId } = req.body;
  await CartItem.deleteMany({ userId });
  res.json({ message: "Purchase successful!" });
});
