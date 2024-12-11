const express = require("express");
const {
  getNotifications,
  markNotificationAsRead,
} = require("../controllers/notificationController");
const authMiddleware = require("../middleware/authMiddleware");
const router = express.Router();

router.get("/getnotifications", authMiddleware, getNotifications);
router.put(
  "/marknotificationasread/:id",
  authMiddleware,
  markNotificationAsRead
);

module.exports = router;
