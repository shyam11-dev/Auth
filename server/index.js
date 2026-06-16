const express = require("express");
const cors = require("cors");
const connectDB = require("./database");
const app = express();
const bookRoutes = require("./routes/book.routes");

// Middleware
app.use(express.json());
// Enable CORS for all routes
app.use(cors());

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
