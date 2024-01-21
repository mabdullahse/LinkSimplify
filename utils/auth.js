const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const comparePasswords = (password, hash) => {
  return bcrypt.compare(password, hash);
};

const hashPassword = async (password) => {
  return await bcrypt.hash(password, 5);
};

const createJWT = (user) => {
  const token = jwt.sign(
    {
      id: user._id,
      username: user.username,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "7d",
    }
  );
  return token;
};

const protect = (req, res, next) => {
  const bearer = req.headers.authorization;

  if (!bearer) {
    res.status(401);
    res.json({ message: "not authorized" });
    return;
  }

  const [, token] = bearer.split(" ");

  if (!token) {
    res.status(401);
    res.json({ message: "not valid token" });
    return;
  }

  try {
    const user = jwt.verify(token, process.env.JWT_SECRET);
    req.user = user;
    next();
  } catch (e) {
    console.error(e);
    res.status(401);
    res.json({ message: "not valid token" });
    return;
  }
};

module.exports = {
  comparePasswords,
  hashPassword,
  createJWT,
  protect,
};
