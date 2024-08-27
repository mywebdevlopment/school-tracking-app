const Notification = require('../models/Notification');


exports.getNotifications = async (req, res) => {
  try {
    const notifications = await Notification.find({ child: req.params.childId }).sort({ date: -1 });
    res.json(notifications);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};
