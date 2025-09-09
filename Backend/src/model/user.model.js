const mongoose = require("mongoose");
const userSchema = new mongoose.Schema(
  {
    fullname: { type: String, required: true, trim: true },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      match: [/^\S+@\S+\.\S+$/, "Please enter a valid email address"],
    },
    phone: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      minlength: 10,
      maxlength: 10,
    },
    profilePic: { type: String, default: "" },
    password: { type: String, required: true, trim: true, minlength: 6 },
  },
  { timestamps: true }
);

const userModel = mongoose.model("User", userSchema);

module.exports = userModel;
