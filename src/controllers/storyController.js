const Story = require('../models/storyModels');

exports.createStory = async (req, res) => {
  try {
    const story = new Story(req.body);
    await story.save();
    res.status(201).json(story);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getUserStories = async (req, res) => {
  try {
    const { user_id } = req.params;
    const now = new Date();
    const stories = await Story.find({
      user_id,
      expires_at: { $gt: now }
    });
    res.json(stories);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteStory = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Story.findByIdAndDelete(id);
    if (result) {
      res.json({ message: 'Story deleted' });
    } else {
      res.status(404).json({ error: 'Story not found' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
