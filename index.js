require("dotenv").config();

const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const { connectToMongoDB } = require("./utils/db");
const { protect } = require("./utils/auth");

const urlRouter = require("./routes/url");
const userRouter = require("./routes/user");

const app = express();
const PORT = process.env.PORT || 5000;

connectToMongoDB(process.env.DATABASE_URL)
  .then(() => {
    console.log("mongodb connected");
  })
  .catch((error) => {
    console.error(error);
  });

//middleware
app.use(cors());
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/url", protect, urlRouter);
app.use("/user", userRouter);

app.listen(PORT, () => {
  console.log(`App is running at port ${PORT}`);
});
