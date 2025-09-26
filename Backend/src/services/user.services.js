const { isEmailExist, isPhoneExist } = require("../helpers/checkExist");
const userModel = require("../model/user.model");
const bcrypt = require("bcrypt");

//* Created user handler.........
const createUser = async (fullname, email, phone, password) => {
  // Basic validations
  if (!fullname) throw new Error("Fullname is required.");
  if (!email) throw new Error("Email is required.");
  if (!phone) throw new Error("Phone Number is required.");
  if (phone.length !== 10) throw new Error("Phone Number must be 10 digits.");
  if (!password) throw new Error("Password is required.");
  if (password.length < 6)
    throw new Error("Password must be at least 6 characters.");

  // Check email or phone is  existing
  await isEmailExist(email);
  await isPhoneExist(phone);

  //* Hashed Password........
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  // Create user
  const newUser = await userModel.create({
    fullname,
    email,
    phone,
    password: hashedPassword,
  });
  return newUser;
};

//* Get all user data ............
const getUsers = async()=>{
  const allUsers = await userModel.find();
  return allUsers;
}

//* Update user by id...............

const userUpdate = async(id,updatedData)=>{
  if(updatedData.password){
    delete updatedData.password;
  }
  const updatedUser = await userModel.findByIdAndUpdate(id,{$set:updatedData},{new:true},{ runValidators: true });
  return updatedUser;
}

//* Delete user by id ...............
const deleteUserById = async (id)=>{
  const deletedUser = await userModel.findByIdAndDelete(id);
  return deletedUser;
}
module.exports = { createUser,getUsers,userUpdate,deleteUserById };
