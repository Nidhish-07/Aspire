import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthConsumer from "../hooks/useAuth";
import newRequest from "../utils/newRequest";
import Login from "./Login";

const Navbar = () => {
  const { authed, logout } = AuthConsumer();
  const [navbar, setNavbar] = useState(false);

  const navigate = useNavigate();

  const handleLogout = async () => {
    // logout();
    try {
      await newRequest.post("/auth/logout");
      localStorage.removeItem("currentUser", null);

      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <nav className="w-full bg-blue-500 shadow">
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div className="flex flex-1">
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <a href="javascript:void(0)">
              <h2 className="text-2xl font-bold text-white">
                {" "}
                <Link to="/">Aspire</Link>
              </h2>
            </a>
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-white"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-[2] justify-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <ul className="items-center justify-center space-y-8 md:flex md:space-x-16 md:space-y-0">
              <li className="text-white hover:text-indigo-200">
                <Link to="/mentor">Mentors</Link>
              </li>
              <li className="text-white hover:text-indigo-200">
                <Link to="/sessions">Sessions</Link>
              </li>
              {localStorage.getItem("currentUser") && (
                <li className="text-white hover:text-indigo-200">
                  <Link to="/add-job">Add Session</Link>
                </li>
              )}
              {localStorage.getItem("currentUser") && (
                <li className="text-white hover:text-indigo-200">
                  <Link to="/profile">Profile </Link>
                </li>
              )}
            </ul>

            {/* <div className="mt-3 space-y-2 lg:hidden md:inline-block">
              <a>
                {authed ? (
                  <a
                    className="inline-block w-full px-4 py-2 text-center text-white bg-gray-600 rounded-md shadow hover:bg-gray-800 cursor-pointer"
                    onClick={handleLogout}
                  >
                    Logout
                  </a>
                ) : (
                  <Login />
                )}
              </a>
            </div> */}
          </div>
        </div>
        <div className="flex  space-x-2  flex-1 justify-end">
          <div>
            <Link
              to="/singup"
              className="inline-block w-full px-4 py-2 text-center text-white bg-blue-600 rounded-md shadow hover:bg-gray-800 cursor-pointer"
            >
              <span>Sign up</span>
            </Link>
          </div>
          <div className="hidden space-x-2 md:inline-block">
            {localStorage.getItem("currentUser") != null || (
              <Link
                to="/signin"
                className="inline-block w-full px-4 py-2 text-center text-white bg-gray-600 rounded-md shadow hover:bg-gray-800 cursor-pointer"
              >
                Log in
              </Link>
            )}
          </div>
          <div className="hidden space-x-2 md:inline-block">
            {localStorage.getItem("currentUser") == null || (
              <a
                className="inline-block w-full px-4 py-2 text-center text-white bg-gray-600 rounded-md shadow hover:bg-gray-800 cursor-pointer"
                onClick={handleLogout}
              >
                Logout
              </a>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

// {authed ? <button onClick={handleLogout}>Logout</button> : <Login/>}
