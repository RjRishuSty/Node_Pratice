const userModel = require("../model/user.model");

//! Get all user handler .....................
const handleGetAlluser = async (req, res) => {
  try {
    const users = await userModel.find();
    if (users.length === 0) {
      res.status(404).json({ message: "User not found", data: [] });
    }
    res.status(200).json({ message: "Fetch all user data", data: users });
  } catch (error) {
    console.log("Error", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

//! Create new user handler ................
const handleCreateUser = async (req, res) => {
  const { fullname, email, phone, password } = req.body;
  if (!fullname)
    return res.status(400).json({ message: "Fullname is required." });
  if (!email) return res.status(400).json({ message: "Email is required." });
  if (!phone)
    return res.status(400).json({ message: "Phone Numbare is required." });
  if (phone.length !== 10)
    return res
      .status(400)
      .json({ message: "Phone Numbare must be 10 Characters." });
  if (!password)
    return res.status(400).json({ message: "Password is required." });
  if (password.length < 6)
    return res
      .status(400)
      .json({ message: "Password must be at least 6 characters long" });
  try {
    const existEmail = await userModel.findOne({ email });
    const existPhone = await userModel.findOne({ phone });
    if (existEmail)
      return res
        .status(409)
        .json({ message: "Email is  already exits. please use other email" });
    if (existPhone)
      return res.status(409).json({
        message:
          "Phone Number is  already exits. please use other phone number",
      });
    const newUser = await userModel.create({
      fullname,
      email,
      phone,
      password,
    });
    res
      .status(201)
      .json({ message: "User created successfully", data: newUser });
  } catch (error) {
    console.log("Error", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

//! Update exist user handler..............
const handleUpdateUser = async (req, res) => {
  const { id } = req.params;
  const updated = req.body;
  if (!id)
    return res
      .status(400)
      .json({ message: "Invalid request. User ID is required" });
  try {
    const updatedUser = await userModel.findByIdAndUpdate(
      id,
      { $set: updated },
      { new: true, runValidators: true }
    );
    if (!updatedUser) {
      return res.status(404).json({
        message: "User not found",
      });
    }
    res.status(200).json({ message: "Update successful", data: updatedUser });
  } catch (error) {
    console.log("Error", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

//! Delete exist user handler ...............
const handleDeleteUser = async (req, res) => {
  const { id } = req.params;
  if (!id)
    return res
      .status(400)
      .json({ message: "Invalid request. User ID is requireds" });
  try {
    const deletedUser = await userModel.findByIdAndDelete(id);
    if (!deletedUser)
      return res.status(404).json({ message: "User not found" });
    res
      .status(200)
      .json({ message: "User Delete successful", data: deletedUser });
  } catch (error) {
    console.log("Error", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = {
  handleCreateUser,
  handleGetAlluser,
  handleUpdateUser,
  handleDeleteUser,
};
