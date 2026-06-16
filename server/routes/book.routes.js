const express = require("express");
const router = express.Router();
const {
  handleBookStoreController,
  handleBookListController,
} = require("../controller/book.controller");

// Create a new book
router.post("/addBooks", handleBookStoreController);
router.get("/bookList", handleBookListController);

module.exports = router;
