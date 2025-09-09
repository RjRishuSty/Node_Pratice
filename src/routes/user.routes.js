const express = require("express");
const {
  handlerGetAllUser,
  handlerCreateUser,
  handlerUpdateUserByID,
} = require("../controllers/user.controller");
const router = express.Router();

router.get("/", handlerGetAllUser);
router.post("/create-user", handlerCreateUser);
router.put("/:id", handlerUpdateUserByID);

module.exports = router;
