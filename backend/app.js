const express = require("express");
const mongoose = require("mongoose");
const url = "mongodb://localhost/briandaPratas";

const app = express();

mongoose.connect(url, { useNewUrlParser: true });
const con = mongoose.connection;

con.on("open", () => {
  console.log("Conectado....");
});

app.use(express.json())

const userRouter = require('./routes/users');
app.use("/users", userRouter);

app.listen(3000, () => {
  console.log("Server iniciado....");
});
