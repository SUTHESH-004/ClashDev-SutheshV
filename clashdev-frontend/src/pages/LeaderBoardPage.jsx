import React from "react";

const LeaderBoardPage = () => {
  return (
    <div className="min-h-screen w-100vw bg-black p-10">
      <div className="h-[90vh] w-[90vw] mx-auto rounded-2xl flex">
        <div className="h-[100%] w-[50%] rounded-2xl flex flex-col items-center ">
          <div className="h-[75%] w-[75%] bg-white mt-4 rounded-[50%]"></div>
          <div className="h-[20%] w-[90%] bg-white rounded-2xl"></div>
        </div>
        <div className="h-[100%] w-[50%] bg-red-600 rounded-2xl flex flex-col items-center pt-8">
          <div className="h-[80px] w-[90%] flex flex-row relative items-center">
            <div className="h-[100%] w-[100%] bg-white relative">
              <div className="h-[150px] w-[150px] bg-red-900 absolute right-0"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeaderBoardPage;
