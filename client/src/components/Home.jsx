function Home() {
  return (
    <div className="w-full px-5 min-h-[calc(100vh-60px)]">
      <div className="w-full grid grid-cols-5">
        <div>
          <label htmlFor="">Book Name :</label>
          <input
            type="text"
            placeholder="Book Name"
            className="w-ful border border-gray-100 rounded-sm outline-1"
          />
        </div>
        <div>
          <label htmlFor="">Book title :</label>
          <input
            type="text"
            placeholder="Book Title"
            className="w-ful border border-gray-100 rounded-sm outline-1"
          />
        </div>
        <div>
          <label htmlFor="">Author :</label>
          <input
            type="text"
            placeholder="Book Author"
            className="w-ful border border-gray-100 rounded-sm outline-1"
          />
        </div>
        <div>
          <label htmlFor="">Selling Price :</label>
          <input
            type="text"
            placeholder="Selling price"
            className="w-ful border border-gray-100 rounded-sm outline-1"
          />
        </div>
        <div>
          <label htmlFor="">Publish Date :</label>
          <input
            type="date"
            placeholder="Publish Date"
            className="w-ful border border-gray-100 rounded-sm outline-1"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
