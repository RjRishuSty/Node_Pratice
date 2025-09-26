const userModel = require("../model/user.model");

const isEmailExist = async (email) => {
  const response = await userModel.findOne({ email });
  if (response) throw new Error("Email already exists.");
};

const isPhoneExist = async (phone)=>{
    const response =  await userModel.findOne({ phone });
if (response) throw new Error("Phone number already exists.");

}

module.exports = { isEmailExist, isPhoneExist };
