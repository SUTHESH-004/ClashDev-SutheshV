import React from "react";
import leaderBoardData from "../serverData/data";
const LeaderBoardBar = () => {
  return (
    <>
      <div className="h-[90%] w-[90%] p-4 rounded-2xl flex flex-col bg-green-100 rounded-r-2xl  justify-center items-center gap-2">
        <div className="text-center h-[10%] px-10 text-white bg-black/90 flex justify-center items-center rounded-2xl">
          Leader Board
        </div>
        <div className="h-[90%] w-[100%]  flex flex-col items-center pt-2 gap-2">
          {leaderBoardData.map((entry, index) => {
            if (index > 7) {
              return;
            }
            return (
              <div className="h-12 w-[100%] bg-black text-white flex items-center rounded-2xl"></div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default LeaderBoardBar;
