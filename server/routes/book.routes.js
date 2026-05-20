const express = require("express");
const router = express.Router();
const { handleBookStoreController } = require("../controller/book.controller");

// Create a new book
router.post("/addBooks", handleBookStoreController);

module.exports = router;
