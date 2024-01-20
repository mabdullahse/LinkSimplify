require("dotenv").config();

const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const { connectToMongoDB } = require("./utils/db");
const urlRouter = require("./routes/url");
const userRouter = require("./routes/user");

const app = express();
const PORT = process.env.PORT || 5000;

console.log(process.env.DATABASE_URL);
connectToMongoDB(process.env.DATABASE_URL).then(() => {
  console.log("mongodb connected");
});

//middleware
app.use(cors());
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/url", urlRouter);
app.use("/user", userRouter);

app.listen(PORT, () => {
  console.log(`App is running at port ${PORT}`);
});
