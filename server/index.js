const express = require("express");
const connectDB = require("./database");
const app = express();
app.use(express.json());

// Connect to database
connectDB();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
