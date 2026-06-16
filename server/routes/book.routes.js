const express = require("express");
const router = express.Router();
const {
  handleBookStoreController,
  handleBookListController,
  handleBookDeleteController,
} = require("../controller/book.controller");

// Create a new book
router.post("/addBooks", handleBookStoreController);
router.get("/bookList", handleBookListController);
router.post("/bookDelete", handleBookDeleteController);
router.post("/bookUpdate", handleBookUpdateController);

module.exports = router;
