import React from "react";

const ProfileBar = () => {
  return (
    <div className="h-[100px] w-[65%] sticky top-[4%] left-0 right-0 mx-auto bg-green-100 rounded-2xl flex items-center">
      <div className="h-[90px] w-[50%]">
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className="h-[90px] w-[50%] flex flex-row justify-center items-center ">
        <div className="h-[90px] flex-[2] flex justify-center items-center text-center bg-yellow-300 text-2xl">
          V SUTHESH PRAVIN
        </div>
        <div
          className="relative left-4 h-[150px] w-[150px] bg-white rounded-full flex justify-center items-center"
          style={{
            boxShadow:
              "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
          }}
        ></div>
      </div>
    </div>
  );
};

export default ProfileBar;
