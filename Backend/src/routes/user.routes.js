const express = require("express");
const { handleGetAlluser, handleCreateUser, handleUpdateUser, handleDeleteUser } = require("../controller/user.controllers");
const router = express.Router();

router.get("/", handleGetAlluser);
router.post("/create-user", handleCreateUser);
router.patch("/:id", handleUpdateUser);
router.delete("/:id", handleDeleteUser);

module.exports = router;
