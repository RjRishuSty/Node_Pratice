const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/Crud_Operation");
    console.log("✅ MongoDB connection successful");
  } catch (error) {
    console.log("❌ MongoDB connection failed.");
  }
};

module.exports = connectDB;