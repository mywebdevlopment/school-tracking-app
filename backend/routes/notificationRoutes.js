const express = require('express');
const router = express.Router();
const { getNotifications } = require('../controllers/notificationController');
const auth = require('../middleware/authMiddleware');

// @route    GET api/notifications/:childId
// @desc     Get notifications for a child
// @access   Private
router.get('/:childId', auth, getNotifications);

module.exports = router;
