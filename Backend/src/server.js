const express = require("express");
const userRouter = require("./routes/user.routes");
const connectDB = require("./config/dbConfig");
const server = express();
const PORT = 8081;

server.use(express.json());

server.use("/api/v1/user", userRouter);

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  connectDB();
});
