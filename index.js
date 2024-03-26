const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();
const bodyParser = require("body-parser");
const cors = require("cors");
const authRoutes = require("./routes/auth");
const messageRoutes = require("./routes/messageRoutes");
const commentRoutes = require("./routes/commentRoutes");
const UserDataRoutes = require("./routes/userdataRoutes");

const port = process.env.PORT || 5000;
//mongodb-connection------------------------------------------------
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Database connected successfully"))
  .catch((err) => console.log("here is the error", err));

app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello Worl!");
});

//importing and using routes-------------

app.use("/auth", authRoutes);
app.use("/message", messageRoutes);
app.use("/comment", commentRoutes);
app.use("/userdata", UserDataRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
