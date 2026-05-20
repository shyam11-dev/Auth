const Book = require("../model/book.model");
const handleBookStoreController = async (req, res) => {
  try {
    const { BookName, BookTitle, BookAuthor, BookPrice } = req.body;
    if (!BookName || !BookTitle || !BookAuthor || !BookPrice) {
      return res.status(400).json({
        message: "Please provide all required fields",
        success: false,
      });
    }

    const addBook = await Book.create({
      BookName,
      BookTitle,
      BookAuthor,
      BookPrice,
    });
    console.log("addBook", addBook);
    if (addBook) {
      return res
        .status(201)

        .json({
          message: "Book added successfully",
          success: true,
          Id: addBook._id,
          addBook,
        });
    } else {
      return res
        .status(500)
        .json({ message: "Failed to add book", success: false });
    }
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Server error", success: false, error: error.message });
  }
};

module.exports = { handleBookStoreController };
