import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
const VerifyPage = () => {
  const [code, setcode] = useState("");
  const inputRefs = useRef([]);
  const navigate = useNavigate();
  return (
    <div
      className="h-screen w-screen flex justify-center items-center "
      style={{
        backgroundImage:
          "radial-gradient(122.23% 100% at 0 100%, #5bc5e8 0, #3780bd 24.76%, #103a8b 55.66%, #021847 100%)",
      }}
    >
      <div className="p-8 w-[80%] md:w-[30%] bg-white rounded-lg">
        <h2 className="text-center text-lg">Verify your Email address</h2>
        <p className="text-center p-4 m-4 text-sm text-gray-600">
          {" "}
          Enter your verification code - it is send to your gmail account
        </p>
        <form className=" m-4 flex items-center justify-center">
          <input
            type="number"
            value={code}
            placeholder="Enter your code"
            onChange={(e) => setcode(e.target.value)}
            className="border-yellow-400 p-2 m-2"
          />
          <button className=" p-4 bg-yellow-400 hover:bg-blue-300 rounded-2xl">
            confirm
          </button>
        </form>
      </div>
    </div>
  );
};

export default VerifyPage;
