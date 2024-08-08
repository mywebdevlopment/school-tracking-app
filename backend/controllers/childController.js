const Child = require('../models/Child');
const Notification = require('../models/Notification');

exports.addChild = async (req, res) => {
  const { name, grade, parent } = req.body;
  try {
    const child = new Child({ name, grade, parent });
    await child.save();
    res.json(child);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.getChildren = async (req, res) => {
  try {
    const children = await Child.find({ parent: req.user.id }).populate('parent', 'name');
    res.json(children);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.updateChildStatus = async (req, res) => {
  const { isInSchool } = req.body;
  try {
    const child = await Child.findById(req.params.id);
    if (!child) {
      return res.status(404).json({ msg: 'Child not found' });
    }

    child.isInSchool = isInSchool;
    await child.save();

    const message = isInSchool ? 'Child has entered the school' : 'Child has left the school';
    const notification = new Notification({
      child: child._id,
      message,
    });
    await notification.save();

    res.json(child);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};
