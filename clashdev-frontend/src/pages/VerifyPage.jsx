import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const VerifyPage = () => {

  const [code,setcode] = useState(["","","","","",""]);
  const inputRefs = useRef([]);
  const navigate = useNavigate();
  return (
    <div
      className="h-screen w-screen flex justify-center items-center "
      style={{
        backgroundImage:
          "radial-gradient(122.23% 100% at 0 100%, #5bc5e8 0, #3780bd 24.76%, #103a8b 55.66%, #021847 100%)",
      }}>
      <div className="p-8 h-[50%] w-[80%] md:w-[30%] bg-white rounded-lg">
        <div className="text-center text-lg">Verify your Email address</div>
        <p className="text-center p-4 text-sm">
          {" "}
          Enter your verification code - it is send to your gmail account
        </p>
      </div>
    </div>
  );
};

export default VerifyPage;
