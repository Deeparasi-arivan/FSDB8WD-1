const Notification = require("../models/notificationModel");

const getNotifications = async (req, res) => {
  try {
    const notifications = await Notification.find({
      user: req.user.userId,
    });
    res.status(200).json(notifications);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

const markNotificationAsRead = async (req, res) => {
  try {
    const notification = await Notification.findByIdAndUpdate(
      req.params.id,
      { read: true },
      { new: true }
    );
    if (!notification) {
      return res.status(404).json({ error: "Notification not found" });
    }
    res.status(200).json(notification);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};
module.exports = {
  getNotifications,
  markNotificationAsRead,
};
