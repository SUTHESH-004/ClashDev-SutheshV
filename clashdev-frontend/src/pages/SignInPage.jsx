import React, { useState } from "react";
import { assets } from "../assets/assests";
import { useNavigate } from "react-router-dom";

const SignInPage = () => {
  const [name, setname] = useState("");
  const [password, setpassword] = useState("");
  const nav = useNavigate();
  const handlesub = (event) => {
    event.preventDefault();
    nav("/verify");
  };
  return (
    <div
      className="h-screen w-screen flex justify-center items-center"
      style={{
        backgroundImage:
          "radial-gradient(122.23% 100% at 0 100%, #5bc5e8 0, #3780bd 24.76%, #103a8b 55.66%, #021847 100%)",
      }}
    >
      <div className="bg-gray-800 rounded-lg shadow-lg p-10 w-full max-w-md">
        <div className="text-center flex items-center ">
          <img
            src={assets.barbarian}
            alt="Clash Royale Logo"
            className=" mb-6 w-32 h-32"
          />
          <h2 className="text-white text-3xl font-bold text-center mb-6 pl-10">
            Sign In
          </h2>
        </div>

        <form className="space-y-6">
          <div>
            <input
              type="text"
              placeholder="Username"
              value={name}
              className="w-full px-4 py-3 text-lg rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-4 focus:ring-yellow-500"
              onChange={(e) => setname(e.target.value)}
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              value={password}
              className="w-full px-4 py-3 text-lg rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-4 focus:ring-yellow-500"
              onChange={(e) => setpassword(e.target.value)}
            />
          </div>
          <p className="ml-2">
            <a
              href="/sign-up"
              className="text-yellow-500 hover:text-yellow-600 font-bold mt-4 text-sm"
            >
              forgot password ?
            </a>
          </p>
          <div>
            <button
              type="submit"
              onClick={() => handlesub(event)}
              className="w-full px-4 py-3 bg-yellow-500 hover:bg-yellow-600 text-white font-bold text-lg rounded-lg shadow-md hover:shadow-xl transition duration-300"
            >
              Log In
            </button>
          </div>
        </form>
        <p className="text-center text-white mt-6">
          Don't have an account?{" "}
          <a
            href="/sign-up"
            className="text-yellow-500 hover:text-yellow-600 font-bold"
          >
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignInPage;
