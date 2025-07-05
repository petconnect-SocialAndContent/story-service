const mongoose = require('mongoose');

const storySchema = new mongoose.Schema({
  user_id: { type: String, required: true },
  media_url: { type: String, required: true },
  caption: { type: String },
  created_at: { type: Date, default: Date.now },
  expires_at: { type: Date, required: true }
});

module.exports = mongoose.model('Story', storySchema);
