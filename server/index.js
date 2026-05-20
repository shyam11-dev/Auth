const express = require("express");
const connectDB = require("./database");
const app = express();
const bookRoutes = require("./routes/book.routes");

// Middleware
app.use(express.json());
// Routes
app.use("/api/books", bookRoutes);
// Connect to database
connectDB();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
