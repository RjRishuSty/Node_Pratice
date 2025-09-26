
const { createUser, getUsers, userUpdate, deleteUserById } = require("../services/user.services");

//! Get all user handler .....................
const handleGetAlluser = async (req, res) => {
  try {
    const users = await getUsers();
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
  try {
    const createdUser = await createUser(fullname, email, phone, password);
    res.status(201).json({ message: "User created successfully", data: createdUser });
  } catch (error) {
    console.log("Error", error);
    res.status(400).json({ message: error.message }); 
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
    const updatedUser = await userUpdate(id,updated);
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
    const deletedUser = await deleteUserById(id);
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
