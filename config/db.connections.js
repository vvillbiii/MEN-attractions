const mongoose = require("mongoose");
require("dotenv").config();
const connectionStr = process.env.MONGO_URI;

mongoose.connect(connectionStr);

mongoose.connection.on("connected", () => {
  console.log(`MongoDB connected at ${new Date().toLocaleTimeString()}`);
});
mongoose.connection.on("error", (error) => {
  console.log("MongoDB connection error", error);
});
mongoose.connection.on("disconnected", () =>
  console.log("MongoDB disconnected")
);
