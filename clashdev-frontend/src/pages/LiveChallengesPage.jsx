import React from "react";

const LiveChallengesPage = () => {
  const challenges = [
    {
      name: "Algorithm Mastery Challenge",
      startTime: "Sep 28, 12:00 PM",
      endTime: "Sep 28, 3:00 PM",
      duration: "3 hours",
      battlePoints: 500,
      image: "algorithm-mastery-icon.png", // Path to the challenge image
      progress: 50, // Percentage of time elapsed
    },
    {
      name: "Data Structure Showdown",
      startTime: "Sep 29, 10:00 AM",
      endTime: "Sep 29, 1:00 PM",
      duration: "3 hours",
      battlePoints: 300,
      image: "data-structure-showdown-icon.png",
      progress: 75,
    },
    {
      name: "Code Optimization War",
      startTime: "Sep 30, 5:00 PM",
      endTime: "Sep 30, 8:00 PM",
      duration: "3 hours",
      battlePoints: 600,
      image: "code-optimization-war-icon.png", // Replace with the path to your image
      progress: 30,
    },
    {
      name: "Bug Bash Raid",
      startTime: "Oct 1, 2:00 PM",
      endTime: "Oct 1, 5:00 PM",
      duration: "3 hours",
      battlePoints: 450,
      image: "bug-bash-raid-icon.png", // Replace with the path to your image
      progress: 60,
    },
    {
      name: "Full Stack Harvest",
      startTime: "Oct 2, 9:00 AM",
      endTime: "Oct 2, 12:00 PM",
      duration: "3 hours",
      battlePoints: 200,
      image: "full-stack-harvest-icon.png", // Replace with the path to your image
      progress: 80,
    },
    {
      name: "Debugging Sprint Challenge",
      startTime: "Oct 3, 4:00 PM",
      endTime: "Oct 3, 7:00 PM",
      duration: "3 hours",
      battlePoints: 700,
      image: "debugging-sprint-icon.png", // Replace with the path to your image
      progress: 45,
    },
  ];

  return (
    <div className="bg-gray-900 text-white min-h-screen p-6">
      <h1 className="text-4xl font-bold text-center mb-10">Live Challenges</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {challenges.map((challenge, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-lg shadow-lg p-6 relative"
          >
            <div className="mb-4">
              <h3 className="text-xl font-bold mb-2">{challenge.name}</h3>
              <img
                src={challenge.image}
                alt={challenge.name}
                className="w-full h-32 object-cover rounded-md"
              />
            </div>
            <div className="space-y-2">
              <p>Start: {challenge.startTime}</p>
              <p>End: {challenge.endTime}</p>
              <p>Duration: {challenge.duration}</p>
              <p>
                Battle Points:{" "}
                <span className="font-bold text-yellow-500">
                  {challenge.battlePoints}
                </span>
              </p>
              <div className="bg-gray-700 rounded-full h-2 w-full mt-4">
                <div
                  className="bg-yellow-500 h-full rounded-full"
                  style={{ width: `${challenge.progress}%` }}
                ></div>
              </div>
            </div>
            <div className="mt-6 flex justify-between">
              <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded">
                Join Now
              </button>
              <button className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LiveChallengesPage;
