require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const storyRoutes = require('./routes/stories');

const app = express();
const PORT = process.env.PORT || 3021;

app.use(express.json());

mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('✅ MongoDB connected for story-service'))
  .catch(err => console.error('❌ DB connection error:', err));

app.get('/', (req, res) => {
  res.json({ message: 'Story Service running' });
});

app.use('/api/v1/stories', storyRoutes);

app.listen(PORT, () => {
  console.log(`🚀 Story Service running on port ${PORT}`);
});
