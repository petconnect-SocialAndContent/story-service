const express = require('express');
const router = express.Router();
const controller = require('../controllers/storyController');

router.post('/', controller.createStory);
router.get('/:user_id', controller.getUserStories);
router.delete('/:id', controller.deleteStory);

module.exports = router;
