const Book = require("../model/book.model");
const handleBookStoreController = async (req, res) => {
  try {
    const { BookName, BookTitle, BookAuthor, BookPrice, publishedDate } =
      req.body; // frontend mathina data receive karaneka (req.body)
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
      publishedDate,
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

const handleBookListController = async (req, res) => {
  try {
    const bookList = await Book.find();
    if (bookList) {
      return res.status(200).json({
        message: "Book list retrieved successfully",
        success: true,
        count: bookList.length,
        bookList,
      });
    }

    return res.status(404).json({ message: "No books found", success: false });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Server error", success: false, error: error.message });
  }
};

// const handleBookDeleteController = async (req, res) => {
//   try {
//     // const { id } = req.query; // Get the book ID from the query parameters
//     const { _id } = req.body;
//     const deletedBook = await Book.findByIdAndDelete(_id);

//     if (!deletedBook) {
//       return res
//         .status(404)
//         .json({ message: "Book not found", success: false });
//     }

//     return res
//       .status(200)
//       .json({ message: "Book deleted successfully", success: true });
//   } catch (error) {
//     return res
//       .status(500)
//       .json({ message: "Server error", success: false, error: error.message });
//   }
// };

const handleBookDeleteController = async (req, res) => {
  try {
    console.log("BODY:", req.body);

    const { _id } = req.body;

    const deletedBook = await Book.findByIdAndDelete(_id);

    console.log("DELETED:", deletedBook);

    if (!deletedBook) {
      return res.status(404).json({
        message: "Book not found",
        success: false,
      });
    }

    return res.status(200).json({
      message: "Book deleted successfully",
      success: true,
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      message: "Server error",
      success: false,
      error: error.message,
    });
  }
};

const handleBookUpdateController = async (req, res) => {
  try {
    const { _id, BookName, BookTitle, BookAuthor, BookPrice, publishedDate } =
      req.body;
    const updatedBook = await Book.findByIdAndUpdate(
      _id,
      { BookName, BookTitle, BookAuthor, BookPrice, publishedDate },
      { new: true },
    );
    if (!updatedBook) {
      return res
        .status(404)
        .json({ message: "Book not found", success: false });
    }
    return res.status(200).json({
      message: "Book updated successfully",
      success: true,
      updatedBook,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Server error", success: false, error: error.message });
  }
};

module.exports = {
  handleBookStoreController,
  handleBookListController,
  handleBookDeleteController,
  handleBookUpdateController,
};
