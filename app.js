
const cardRoute = require("./routers/cardRoute");
const bannerRoute = require("./routers/bannerRoute");

const express = require('express');
const mongoose = require('mongoose');
const cors = require("cors");
const cookieParser = require('cookie-parser');
require("dotenv").config();

const app = express();
const port = process.env.PORT || 3030;

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to mongoDB.");
  } catch (error) {
    throw error;
  }
};

mongoose.connection.on("disconnected", () => {
  console.log("mongoDB disconnected!");
});

app.use(express.json());
app.use(cors());
app.use(cookieParser());


  app.use("/cardRoute", cardRoute);
  app.use("/bannerRoute", bannerRoute);

  
  app.use((err, req, res, next) => {
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "Something went wrong!";
    return res.status(errorStatus).json({
      success: false,
      status: errorStatus,
      message: errorMessage,
      stack: err.stack,
    });
  });
  
  
  app.get("/", (req, res) => {
    res.send(`Server is Running on port ${port}`);
  });
  
  app.listen(port, () => {
    connect();
    console.log(`Server is Running on port ${port}`);
  });