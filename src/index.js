const express = require('express');
const userRouter = require("./routes/user.routes");
const connectDB = require('./config/dbConfig');
const app = express();
const PORT = 8081;

//* MIDDLEWARE..........
app.use(express.json());
app.use("/api/v1/user",userRouter);

app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
    connectDB();
})