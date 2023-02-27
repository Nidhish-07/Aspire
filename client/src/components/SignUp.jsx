import React from "react";
import { Link } from "react-router-dom";

import Header from "./Header";
import axios from "axios";
import newRequest from "../utils/newRequest";

const SignUp = () => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [organization, setOrganization] = React.useState("");

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const res = await newRequest.post("/auth/register", {
        username,
        email,
        password,
        organization,
      });

      console.log(res.data);
    } catch (error) {
      console.log(error.response.data);
    }
  };

  return (
    <div className="flex flex-col min-h-screen overflow-hidden mt-5 pl-10 pr-20 ">
      {/*  Site header */}
      {/* <Header /> */}

      {/*  Page content */}
      <main className="flex-grow mt-5">
        <section className="bg-white">
          <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
            <aside className="relative block h-16 lg:order-last lg:col-span-5 lg:h-full xl:col-span-6">
              <img
                alt="Pattern"
                src="https://images.unsplash.com/photo-1605106702734-205df224ecce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                className="absolute inset-0 h-3/4 w-full object-cover my-auto"
              />
            </aside>

            <main
              aria-label="Main"
              className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:py-12 lg:px-16 xl:col-span-6"
            >
              <div className="max-w-xl lg:max-w-3xl">
                <h1 className="mt-6 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
                  Welcome to Aspire
                </h1>

                <p className="mt-4 leading-relaxed text-gray-500">
                  Where dreams come true.
                </p>

                <form
                  action="#"
                  className="mt-8 grid grid-cols-6 gap-6"
                  onSubmit={submitHandler}
                >
                  <div class="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="FirstName"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Name
                    </label>

                    <input
                      type="text"
                      id="FirstName"
                      name="first_name"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm py-2 px-1"
                    />
                  </div>

                  <div className="col-span-6">
                    <label
                      htmlFor="Email"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Email
                    </label>

                    <input
                      type="email"
                      id="Email"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm py-2 px-1"
                    />
                  </div>

                  <div class="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="Password"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Password
                    </label>

                    <input
                      type="password"
                      id="Password"
                      name="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm py-2 px-1"
                    />
                  </div>
                  <div class="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="Organization"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Organization
                    </label>

                    <input
                      type="organization"
                      id="Organization"
                      name="organization"
                      value={organization}
                      onChange={(e) => setOrganization(e.target.value)}
                      className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm py-2 px-1"
                    />
                  </div>

                  <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                    <button className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500">
                      Create an account
                    </button>

                    <p className="mt-4 text-sm text-gray-500 sm:mt-0">
                      Already have an account?
                      <a href="/signin" className="text-blue-700 underline">
                        Log in
                      </a>
                    </p>
                  </div>
                </form>
              </div>
            </main>
          </div>
        </section>
      </main>
    </div>
  );
};

export default SignUp;
