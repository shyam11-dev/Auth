import { useState } from "react";

function Home() {
  const [books, setBooks] = useState({
    BookName: "",
    BookTitle: "",
    BookAuthor: "",
    BookPrice: "",
    publishedDate: "",
  });

  const handleChange = (e) => {
    setBooks({ ...books, [e.target.name]: e.target.value });
  };

  console.log("books", books);
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
        <button className="bg-blue-500 text-white px-4 py-2 rounded-sm">
          Add Book
        </button>
      </div>
      <div className="mt-10 w-full">
        <div className="w-full">
          <table className="w-full bg-white divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="tracing-wider px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Book Name
                </th>
                <th className="tracing-wider px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Book Title
                </th>
                <th className="tracing-wider px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Author
                </th>
                <th className="tracing-wider px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Selling Price
                </th>
                <th className="tracing-wider px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Publish Date
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr className="hover:bg-gray-200">
                <td className="px-6 py-4 whitespace-nowrap">Book 1</td>
                <td className="px-6 py-4 whitespace-nowrap">Title 1</td>
                <td className="px-6 py-4 whitespace-nowrap">Author 1</td>
                <td className="px-6 py-4 whitespace-nowrap">Price 1</td>
                <td className="px-6 py-4 whitespace-nowrap">Date 1</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Home;
