import React from "react";

const LiveChallege = () => {
  const value = 1;
  if (value === 1)
    return (
      <div className="pb-4">
        <p className="text-center">
          Live <br />
          Challenges
        </p>
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
