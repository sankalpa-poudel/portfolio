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

// Create Contact Schema
const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

const Contact = mongoose.model('Contact', contactSchema);

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

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Backend server is running on port ${PORT}`);
});
