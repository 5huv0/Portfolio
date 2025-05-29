// src/components/Navbar.jsx
import { useState } from "react";

const Navbar = () => {
  const [isDark, setIsDark] = useState(true);

  return (
    <div className="w-full flex justify-center">
      <div className="bg-black rounded-full h-20 w-200 justify-center mt-4 py-2 flex items-center gap-6 text-white shadow-md">
        <button className="hover:underline">Home</button>
        <button className="hover:underline">About Me</button>
        <button className="hover:underline">Social</button>

        {/* Toggle Switch */}
        {/* <div
          onClick={() => setIsDark(!isDark)}
          className={`ml-4 w-10 h-5 flex items-center bg-gray-500 rounded-full cursor-pointer px-1 transition-all duration-300 ${
            isDark ? "justify-end" : "justify-start"
          } `}
        >
          <div className="w-4 h-4 bg-white rounded-full shadow-md"></div>
        </div> */}
      </div>
    </div>
  );
};

export default Navbar;
