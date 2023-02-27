import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [top, setTop] = useState(true);

  // detect whether user has scrolled the page down by 10px
  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 10 ? setTop(false) : setTop(true);
    };
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [top]);

  return (
    <>
      <ul className="flex gap-5 flex-grow justify-end flex-wrap items-center">
        <li>
          <Link
            to="/signin"
            className="inline-block w-full px-4 py-2 text-center text-white bg-gray-600 rounded-md shadow hover:bg-gray-800 cursor-pointer"
          >
            Sign in
          </Link>
        </li>
        <li>
          <Link
            to="/singup"
            className="inline-block w-full px-4 py-2 text-center text-white bg-blue-600 rounded-md shadow hover:bg-gray-800 cursor-pointer"
          >
            <span>Sign up</span>
          </Link>
        </li>
      </ul>
    </>
  );
};

export default Header;
