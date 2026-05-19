const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://shyam_db:pVQTTb0maW9hSUpc@cluster0.oyibmvj.mongodb.net/crud-auth",
    );

    console.log("MongoDB connected");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
