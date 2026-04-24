import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'Server is running', timestamp: new Date().toISOString() });
});

// Connect to MongoDB
const MONGO_URI = process.env.MONGO_URI || 'mongodb+srv://sankalpa_poudel:sankalpa%4010%23@sankalpa-admin1.umhkomd.mongodb.net/portfolio-contact?retryWrites=true&w=majority&appName=Sankalpa-admin1';
console.log('Attempting to connect to MongoDB with URI:', MONGO_URI.substring(0, 50) + '...');
mongoose.connect(MONGO_URI)
  .then(() => {
    console.log('✅ Connected to MongoDB!');
    app.get('/db-status', (req, res) => {
      res.status(200).json({ status: 'MongoDB is connected', message: 'Database is ready' });
    });
  })
  .catch(err => {
    console.error('❌ MongoDB connection error:', err.message);
    app.get('/db-status', (req, res) => {
      res.status(500).json({ status: 'MongoDB connection failed', error: err.message });
    });
  });

// ========== SCHEMAS ==========

// Contact Schema
const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

// User Schema
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String },
  authProvider: { type: String, enum: ['email', 'github', 'google'], default: 'email' },
  providerId: { type: String },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

const Contact = mongoose.model('Contact', contactSchema);
const User = mongoose.model('User', userSchema);

// ========== CONTACT ROUTES ==========

// API Route to Handle Form Submission
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;
    
    // Save to database
    const newContact = new Contact({ name, email, phone, message });
    await newContact.save();
    
    res.status(201).json({ success: true, message: 'Message sent successfully!' });
  } catch (error) {
    console.error('Error saving contact:', error);
    res.status(500).json({ success: false, error: 'Failed to send message.' });
  }
});

// GET API for Admin Panel (Retrieve all messages, newest first)
app.get('/api/contact', async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, data: contacts });
  } catch (error) {
    console.error('Error fetching contacts:', error);
    res.status(500).json({ success: false, error: 'Failed to fetch messages.' });
  }
});

// DELETE Contact Message (Delete by ID)
app.delete('/api/contact/:id', async (req, res) => {
  try {
    const deletedContact = await Contact.findByIdAndDelete(req.params.id);
    if (!deletedContact) return res.status(404).json({ success: false, error: 'Message not found.' });
    res.status(200).json({ success: true, message: 'Message deleted successfully.' });
  } catch (error) {
    console.error('Error deleting contact:', error);
    res.status(500).json({ success: false, error: 'Failed to delete message.' });
  }
});

// ========== AUTHENTICATION ROUTES ==========

// Email Login
app.post('/api/auth/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find user
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ success: false, error: 'Invalid email or password' });
    }

    // Check password (basic comparison - in production use bcrypt)
    if (user.password !== password) {
      return res.status(401).json({ success: false, error: 'Invalid email or password' });
    }

    // Generate token (simple JWT-like token - in production use proper JWT)
    const token = Buffer.from(JSON.stringify({ userId: user._id, email: user.email })).toString('base64');

    res.status(200).json({
      success: true,
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email
      }
    });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ success: false, error: 'Login failed' });
  }
});

// Email Signup
app.post('/api/auth/signup', async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check if user exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ success: false, error: 'Email already registered' });
    }

    // Create new user
    const newUser = new User({
      name,
      email,
      password, // In production, hash with bcrypt
      authProvider: 'email'
    });

    await newUser.save();

    // Generate token
    const token = Buffer.from(JSON.stringify({ userId: newUser._id, email: newUser.email })).toString('base64');

    res.status(201).json({
      success: true,
      token,
      user: {
        id: newUser._id,
        name: newUser.name,
        email: newUser.email
      }
    });
  } catch (error) {
    console.error('Signup error:', error);
    res.status(500).json({ success: false, error: 'Signup failed' });
  }
});

// GitHub OAuth Callback
app.post('/api/auth/github/callback', async (req, res) => {
  try {
    const { name, email, githubId } = req.body;

    let user = await User.findOne({ email });

    if (!user) {
      user = new User({
        name,
        email,
        authProvider: 'github',
        providerId: githubId
      });
      await user.save();
    }

    const token = Buffer.from(JSON.stringify({ userId: user._id, email: user.email })).toString('base64');

    res.status(200).json({
      success: true,
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email
      }
    });
  } catch (error) {
    console.error('GitHub auth error:', error);
    res.status(500).json({ success: false, error: 'GitHub authentication failed' });
  }
});

// Google OAuth Callback
app.post('/api/auth/google/callback', async (req, res) => {
  try {
    const { name, email, googleId } = req.body;

    let user = await User.findOne({ email });

    if (!user) {
      user = new User({
        name,
        email,
        authProvider: 'google',
        providerId: googleId
      });
      await user.save();
    }

    const token = Buffer.from(JSON.stringify({ userId: user._id, email: user.email })).toString('base64');

    res.status(200).json({
      success: true,
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email
      }
    });
  } catch (error) {
    console.error('Google auth error:', error);
    res.status(500).json({ success: false, error: 'Google authentication failed' });
  }
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Backend server is running on port ${PORT}`);
});
