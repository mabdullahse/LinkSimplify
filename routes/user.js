const express = require("express");

const { createNewUser, signin } = require("../controllers/user");
const { protect } = require("../utils/auth");

const router = express.Router();

router.post("/create-user", createNewUser);
router.post("/login", signin);

module.exports = router;
