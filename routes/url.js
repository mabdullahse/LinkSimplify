const express = require("express");

const {
  hanleGenerateNewShortURL,
  handleGetShortURL,
  handleGetAnalyticsURL,
} = require("../controllers/url");

const router = express.Router();

router.post("/", hanleGenerateNewShortURL);
router.get("/:urlid", handleGetShortURL);
router.get("/analytic/:shorturlid", handleGetAnalyticsURL);

module.exports = router;
