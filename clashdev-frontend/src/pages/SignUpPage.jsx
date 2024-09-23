import React from "react";
import { assets } from "../assets/assests";

const SignUpPage = () => {
  return (
    <div
      className="h-screen w-screen flex items-center justify-center"
      style={{
        backgroundImage:
          "radial-gradient(122.23% 100% at 0 100%, #5bc5e8 0, #3780bd 24.76%, #103a8b 55.66%, #021847 100%)",
      }}
    >
      <div className="bg-gray-800 rounded-lg shadow-lg p-10 w-full max-w-md">
        <div className="text-center flex items-center">
          <img
            src={assets.shelly}
            alt="Clash Royale Logo"
            className="mb-6 w-32 h-32 rounded-full"
          />
          <h2 className="text-white text-3xl font-bold text-center mb-6 pl-14">
            Sign Up
          </h2>
        </div>

        <form className="space-y-4">
          <div>
            <input
              type="text"
              placeholder="Username"
              className="w-full px-4 py-3 text-lg rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-4 focus:ring-yellow-500"
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-3 text-lg rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-4 focus:ring-yellow-500"
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-3 text-lg rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-4 focus:ring-yellow-500"
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full px-4 py-3 text-lg rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-4 focus:ring-yellow-500"
            />
          </div>

          <div>
            <button
              type="submit"
              className="w-full px-4 py-3 bg-yellow-500 hover:bg-yellow-600 text-white font-bold text-lg rounded-lg shadow-md hover:shadow-xl transition duration-300"
            >
              Sign Up
            </button>
          </div>
        </form>
        <p className="text-center text-white mt-6">
          Already have an account?{" "}
          <a
            href="/sign-in"
            className="text-yellow-500 hover:text-yellow-600 font-bold"
          >
            Sign In
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignUpPage;
