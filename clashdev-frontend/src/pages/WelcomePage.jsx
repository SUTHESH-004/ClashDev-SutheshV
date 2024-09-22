import React from "react";

const WelcomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b text-white font-sans">
      <nav className="flex justify-between items-center p-6">
        <div className="text-3xl font-bold text-yellow-300">
          <span className="text-blue-100">Clash</span>Dev
        </div>
        <div className="space-x-6">
          <button className="px-6 py-2 bg-yellow-300 text-blue-900 rounded-md hover:bg-yellow-300">
            Sign In
          </button>
          <button className="px-6 py-2 bg-yellow-600 text-blue-900 rounded-md hover:bg-yellow-500">
            Sign Up
          </button>
        </div>
      </nav>
      <section className="text-center py-20">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
          Enter the <span className="text-yellow-300">Arena</span> of Code!
        </h1>
        <p className="text-xl md:text-2xl mb-8">
          Battle other coders in PvP, take on live challenges, and claim the top
          spot on the leaderboard!
        </p>
        <button className="px-8 py-4 bg-yellow-500 text-blue-900 text-xl font-semibold rounded-md hover:bg-yellow-300">
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
        <p className="text-yellow-300"> Developer - Suthesh pravin V</p>
      </footer>
    </div>
  );
};

export default WelcomePage;
