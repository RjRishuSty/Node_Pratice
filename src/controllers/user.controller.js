const userModel = require("../model/user.model");

//! Read all user hander ............
const handlerGetAllUser = async (req, res) => {
  try {
    const userData = await userModel.find({});
    if (userData.length === 0) {
      res
        .status(404)
        .json({ message: "No users found", status: false, data: [] });
    }
    res
      .status(200)
      .json({ message: "Fetch all user data", status: true, data: userData });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message, status: false });
  }
};

//! Create new user handler ..........
const handlerCreateUser = async (req, res) => {
  const { fullname, email, password } = req.body;
  if (!fullname)
    return res
      .status(400)
      .json({ message: "Fullname is required.", status: false });
  if (!email)
    return res
      .status(400)
      .json({ message: "Email is required.", status: false });
  if (!password)
    return res
      .status(400)
      .json({ message: "Password is required.", status: false });
  try {
    const newUser = { fullname, email, password };
    await userModel.create(newUser);
    res.status(201).json({
      message: "Registration successful",
      status: true,
      data: newUser,
    });
  } catch (error) {
    console.log(error);
    if (error.code === 11000) {
      res.status(400).json({
        message: "Email already exists, please use a different one.",
        status: false,
      });
    }
    return res.status(500).json({ message: error.message, status: false });
  }
};

//! Update exist user handler..............
const handlerUpdateUserByID = async(req,res)=>{
    const {id} = req.parse
    console.log("id is ",id);
}

module.exports = { handlerGetAllUser, handlerCreateUser ,handlerUpdateUserByID};
