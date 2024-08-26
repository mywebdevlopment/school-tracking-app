const express = require('express');
const router = express.Router();
const { addChild, getChildren, updateChildStatus } = require('../controllers/childController');
const auth = require('../middleware/authMiddleware');

// @route    POST api/children
// @desc     Add a new child
// @access   Private
router.post('/', auth, addChild);

// @route    GET api/children
// @desc     Get all children for the logged-in parent
// @access   Private
router.get('/', auth, getChildren);

// @route    PUT api/children/:id/status
// @desc     Update child's status (in school or not)
// @access   Private
router.put('/:id/status', auth, updateChildStatus);


module.exports = router;
