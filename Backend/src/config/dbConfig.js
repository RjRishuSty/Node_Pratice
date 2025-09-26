const mongoose = require("mongoose");
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("✅ MongoDB connection successful");
  } catch (error) {
    console.log("❌ MongoDB connection failed.");
  }
};

module.exports = connectDB;