const express = require("express");

const router = express.Router();

const {
  protect,
} = require("../middleware/authMiddleware");

const {
  getAIRecommendation,
} = require("../controllers/aiController");



// AI RECOMMENDATION ROUTE
router.post(
  "/recommend",
  protect,
  getAIRecommendation
);


module.exports = router;