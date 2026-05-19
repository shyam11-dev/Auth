function Navbar() {
  return (
    <div className="w-full flex justify-between h-15 shadow px-5 items-center bg-gray-200">
      <div className="w-[10%] h-full flex items-center">
        <h1 className="font-bold text-zinc-800">LOGO</h1>
      </div>
      <div className="w-[50%] h-full">
        <ul className="flex  h-full gap-6 w-full items-center list-none text-zinc-800 font-medium  ">
          <li className="cursor-pointer">Home</li>
          <li className="cursor-pointer">About</li>
          <li className="cursor-pointer">Contact</li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
