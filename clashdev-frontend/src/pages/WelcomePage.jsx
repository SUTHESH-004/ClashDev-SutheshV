import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { assets } from "../assets/assests";
import { Link } from "react-router-dom";
import { useUser } from "../context/UserContext";
const WelcomePage = () => {
  const { UserStatus } = useUser();
  const navigate = useNavigate();
  const handleJoinBattle = (event) => {
    event.preventDefault();
    if (UserStatus) {
      navigate("/");
    } else {
      navigate("/sign-in");
    }
  };

  return (
    <div
      className="min-h-screen text-white font-font2"
      style={{
        backgroundImage:
          "radial-gradient(122.23% 100% at 0 100%, #5bc5e8 0, #3780bd 24.76%, #103a8b 55.66%, #021847 100%)",
      }}
    >
      <nav className="flex justify-between items-center p-6">
        <div className="text-3xl font-bold text-yellow-300">
          <span className="text-blue-100 font-font1">Clash</span>Dev
        </div>
        <div className="space-x-6">
          <Link to="/sign-in">
            <button className="px-6 py-2 bg-yellow-300 text-blue-900 rounded-xl hover:bg-yellow-300 font-font1">
              Sign In
            </button>
          </Link>
          <Link to="/sign-up">
            <button className="px-6 py-2 bg-yellow-600 text-blue-900 rounded-xl hover:bg-yellow-500 font-font1">
              Sign Up
            </button>
          </Link>
        </div>
      </nav>
      <section
        className="text-center py-20 bg-contain"
        // style={{ backgroundImage: `url(${assets.bargrp})` }}
      >
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
          Enter the <span className="text-yellow-300">Arena</span> of Code!
        </h1>
        <p className="text-xl md:text-2xl mb-8">
          Battle other coders in PvP, take on live challenges, and claim the top
          spot on the leaderboard!
        </p>
        <button
          onClick={handleJoinBattle}
          className="px-8 py-4 bg-yellow-500 text-blue-900 text-xl font-semibold rounded-md hover:bg-yellow-300 hover:rounded-xl hover:px-6 "
        >
          Join the Battle
        </button>
      </section>
      <section className="py-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 px-4">
          <div className="bg-blue-500 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-2xl font-bold text-yellow-300 mb-4">
              PvP Battles
            </h3>
            <p>
              Challenge fellow coders and fight in real-time coding duels to
              show who's the best!
            </p>
          </div>
          <div className="bg-blue-500 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-2xl font-bold text-yellow-300 mb-4">
              Live Challenges
            </h3>
            <p>
              Compete in time-limited challenges and see who can solve problems
              faster.
            </p>
          </div>
          <div className="bg-blue-500 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-2xl font-bold text-yellow-300 mb-4">
              Leaderboard
            </h3>
            <p>
              Climb to the top and claim your title as the best coder in the
              arena!
            </p>
          </div>
        </div>
      </section>
      <footer className="bg-black text-center py-8 flex justify-between px-10">
        <p className="text-yellow-300">© 2024 ClashDev - All Rights Reserved</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-github"
        >
          <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
          <path d="M9 18c-4.51 2-5-2-7-2" />
        </svg>
        <p className="text-yellow-300"> Developer - Suthesh pravin V</p>
      </footer>
    </div>
  );
};

export default WelcomePage;
