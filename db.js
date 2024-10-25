const mongoose = require("mongoose");
require("dotenv").config();
const uri = process.env.MONGO_URL;

async function mongoConnect() {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB with Mongoose");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
}

module.exports = { mongoConnect };
