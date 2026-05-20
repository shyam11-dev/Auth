const mongoose = require("mongoose");
const bookSchema = new mongoose.Schema(
  {
    BookName: {
      type: String,
      required: true,
    },
    BookTitle: {
      type: String,
      required: true,
    },
    BookAuthor: {
      type: String,
      required: true,
    },
    BookPrice: {
      type: Number,
      required: true,
    },
    publishedDate: {
      type: Date,
    },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model("Books", bookSchema);
