import React from "react";
import leaderBoardData from "../serverData/data";
const LeaderBoardBar = () => {
  return (
    <>
      <div className="h-[90%] w-[90%] rounded-2xl flex flex-col bg-green-100 rounded-r-2xl justify-center items-center gap-2">
        {/* {leaderBoardData.map((entry, index) => {
          if (index > 5) {
            return;
          }
          return (
            <div className="h-10 w-[90%] bg-black text-white flex items-center"></div>
          );
        })} */}
      </div>
    </>
  );
};

export default LeaderBoardBar;
