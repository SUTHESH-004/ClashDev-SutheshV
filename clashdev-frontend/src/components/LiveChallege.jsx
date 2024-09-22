import React from "react";

const LiveChallege = () => {
  const value = 1;
  if (value === 1)
    return (
      <div>
        <p>Live</p> <span className="h-1 w-1 bg-blue-700 rounded-full"></span>
      </div>
    );
  else if (value === 2)
    return (
      <>
        <div className=" h-[100%] w-[100%] flex justify-center items-center text-2xl">
          Currently No Challenges Right Now ..!
        </div>
      </>
    );
};

export default LiveChallege;
