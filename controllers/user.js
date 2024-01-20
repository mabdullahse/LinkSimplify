const { comparePasswords, createJWT, hashPassword } = require("../utils/auth");
const User = require("../models/user");

const createNewUser = async (req, res) => {
  if (!req.body.username || !req.body.password) {
    return res.status(404).json({ error: "username or password is missing" });
  }

  let user;
  try {
    user = await User.create({
      username: req.body.username,
      password: await hashPassword(req.body.password),
    });
  } catch (error) {
    if (error.code === 11000) {
      // This is a duplicate key error
      res.status(409).json({ message: "Username already exists" });
    } else {
      // For other types of errors, you might want to send a different response
      res.status(500).json({ message: "Internal server error" });
    }
  }

  const token = createJWT(user);
  res.status(201).json({ token });
};

const signin = async (req, res) => {
  if (!req.body.username) {
    return res.status(404).json({ error: "username  is missing" });
  }

  const user = await User.findOne({
    username: req.body.username,
  });

  if (!user) {
    return res.status(401).json({ error: "User is not authenticated" });
  }
  const isValid = await comparePasswords(req.body.password, user.password);

  if (!isValid) {
    res.status(401);
    res.json({ error: "User is not authenticated" });
    return;
  }

  const token = createJWT(user);
  res.json({ token });
};

module.exports = {
  signin,
  createNewUser,
};
