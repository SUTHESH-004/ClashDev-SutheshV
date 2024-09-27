import React, { useState } from "react";
import { assets } from "../assets/assests";
const ProfileBar = () => {
  const [name, setName] = useState("V SUTHESH PRAVIN");
  return (
    <div className="h-[100px] w-[85%] md:w-[65%] absolute top-[4%] left-0 right-0 mx-auto bg-green-100 rounded-2xl flex items-center">
      <div className="h-[90px] w-[33%] md:w-[50%]">
        <div className="h-[100%] w-[100%] flex items-center pl-10 text-black font-medium">
          Clash Dev
        </div>
      </div>
      <div className="h-[90px] w-[67%] md:w-[50%] flex flex-row justify-center items-center ">
        <div className="h-[90px] w-[60%] flex justify-center items-center text-center bg-yellow-300 text-2xl">
          V SUTHESH PRAVIN
        </div>
        <div
          className="relative left-4 md:left-10 h-[150px] w-[150px] bg-white rounded-full flex justify-center items-center bg-no-repeat "
          style={{
            boxShadow:
              "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
            backgroundImage: `url(${assets.profile}
          )`,
            backgroundSize: "contain",
          }}
        ></div>
      </div>
    </div>
  );
};

export default ProfileBar;
