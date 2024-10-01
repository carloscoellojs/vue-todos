const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const app = express();
const PORT = process.env.PORT;

mongoose.connect(
  `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@${process.env.SERVERLESS_INSTANCE}`
);

app.use(express.static(path.join(__dirname, "/dist")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const UserController = require("./controllers/UserController");
app.use("/auth", UserController);

app.use(function(err, req, res, next) {
  if (err) {
    res.status(400).send({
      success: err.success,
      message: err.message
    });
  }
});

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "/dist/index.html"));
});

app.listen(PORT, () => console.log(`listening on ${PORT}`));
