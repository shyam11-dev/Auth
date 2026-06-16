import { useState, useEffect } from "react";
import { bookBaseUrl } from "../../axiosInstance";
import { FaPen } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

function Home() {
  const [books, setBooks] = useState({
    BookName: "",
    BookTitle: "",
    BookAuthor: "",
    BookPrice: "",
    publishedDate: "",
  });
  const [bookList, setBookList] = useState([]);

  const handleChange = (e) => {
    setBooks({ ...books, [e.target.name]: e.target.value });
  };

  console.log("books", books);

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const response = await bookBaseUrl.post("/addBooks", books);
  //     console.log("response", response);
  //   } catch (error) {
  //     console.log("error", error);
  //   }
  // };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await bookBaseUrl.post("/addBooks", books);

      console.log("response", response);
      alert("Book added successfully!");
      getBooks(); // Refresh the book list after adding a new book
      setBooks({
        BookName: "",
        BookTitle: "",
        BookAuthor: "",
        BookPrice: "",
        publishedDate: "",
      }); // Clear the form after submission time
    } catch (error) {
      console.log("error", error);
      alert("Failed to add book. Please try again.");
    }
  };
  // get all books
  const getBooks = async () => {
    try {
      const response = await bookBaseUrl.get("/bookList");
      setBookList(response?.data?.bookList);
      console.log("response", response);
    } catch (error) {
      console.log("error", error);
    }
  };
  const handleDelete = async (_id) => {
    try {
      const response = await bookBaseUrl.post("/bookDelete", { _id });

      console.log("response", response.data);
      alert("Book deleted successfully!");
      getBooks();
    } catch (error) {
      console.log("error", error.response?.data);
      alert("Failed to delete book. Please try again.");
    }
  };
  useEffect(() => {
    getBooks();
  }, []);
  const handleUpdate = async (_id) => {};
  return (
    <div className="w-full px-5 min-h-[calc(100vh-60px)]">
      <div className="w-full grid grid-cols-5 gap-4 my-4">
        <div className="w-full flex flex-col gap-2">
          <label htmlFor="">Book Name :</label>
          <input
            type="text"
            placeholder="Book Name"
            name="BookName"
            value={books.BookName}
            onChange={handleChange}
            className="w-ful border border-gray-500 rounded-sm h-8 px-2"
          />
        </div>
        <div className="w-full flex flex-col gap-2">
          <label htmlFor="">Book title :</label>
          <input
            type="text"
            placeholder="Book Title"
            name="BookTitle"
            value={books.BookTitle}
            onChange={handleChange}
            className="w-ful border border-gray-500 rounded-sm h-8 px-2"
          />
        </div>
        <div className="w-full flex flex-col gap-2">
          <label htmlFor="">Author :</label>
          <input
            type="text"
            placeholder="Book Author"
            name="BookAuthor"
            value={books.BookAuthor}
            onChange={handleChange}
            className="w-ful border border-gray-500 rounded-sm h-8 px-2"
          />
        </div>
        <div className="w-full flex flex-col gap-2">
          <label htmlFor="">Selling Price :</label>
          <input
            type="text"
            placeholder="Selling price"
            name="BookPrice"
            value={books.BookPrice}
            onChange={handleChange}
            className="w-ful border border-gray-500 rounded-sm h-8 px-2"
          />
        </div>
        <div className="w-full flex flex-col gap-2">
          <label htmlFor="">Publish Date :</label>
          <input
            type="date"
            placeholder="Publish Date"
            name="publishedDate"
            value={books.publishedDate}
            onChange={handleChange}
            className="w-ful border border-gray-500 rounded-sm h-8 px-2"
          />
        </div>
      </div>
      <div className="w-full flex justify-end">
        <button
          onClick={handleSubmit}
          className="bg-blue-500 text-white px-4 py-2 rounded-sm"
        >
          Add Book
        </button>
      </div>
      <div className="mt-10 w-full">
        <div className="w-full">
          <table className="w-full bg-white divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="tracing-wider px-6 py-3 text-left text-xs font-bold text-gray-600 uppercase">
                  Book Name
                </th>
                <th className="tracing-wider px-6 py-3 text-left text-xs font-bold text-gray-600 uppercase">
                  Book Title
                </th>
                <th className="tracing-wider px-6 py-3 text-left text-xs font-bold text-gray-600 uppercase">
                  Author
                </th>
                <th className="tracing-wider px-6 py-3 text-left text-xs font-bold text-gray-600 uppercase">
                  Selling Price
                </th>
                <th className="tracing-wider px-6 py-3 text-left text-xs font-bold text-gray-600 uppercase">
                  Publish Date
                </th>
                <th className="tracing-wider px-6 py-3 text-left text-xs font-bold text-gray-600 uppercase ">
                  action
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {bookList.map((book) => (
                <tr key={book._id} className="hover:bg-gray-200">
                  <td className="px-6 py-4 whitespace-nowrap">
                    {book.BookName}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {book.BookTitle}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {book.BookAuthor}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {book.BookPrice}
                  </td>

                  <td className="px-6 py-4 whitespace-nowrap">
                    {book.publishedDate
                      ? new Date(book.publishedDate).toLocaleDateString()
                      : "-"}
                  </td>
                  <td className="px-6 py-3 whitespace-nowrap">
                    <div className="w-20 flex justify-center item-center gap-5">
                      <div
                        className="h-8 w-8 flex justify-center items-center bg-red-100 text-red-600 rounded text-lg cursor-pointer"
                        onClick={() => handleDelete(book._id)}
                      >
                        <span>
                          <MdDelete />
                        </span>
                      </div>
                      <div className="h-8 w-8 flex justify-center items-center bg-green-100 text-green-600 rounded text-lg cursor-pointer">
                        <span>
                          <FaPen />
                        </span>
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Home;
