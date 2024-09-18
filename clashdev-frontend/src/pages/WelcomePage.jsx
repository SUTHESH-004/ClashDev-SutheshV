import { assets } from "../assets/assests";

import Navbar from "../components/Navbar";

const WelcomePage = () => {
  return (
    <>
      <Navbar />
      {/* <div
        className="h-[200vh] w-full"
        style={{
          backgroundImage: `url(${assets.pkvmg})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      ></div> */}

      <div
        className="h-[100vh] w-full "
        style={{
          background: "linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)",
        }}
      ></div>

      {/* <div className="h-screen w-full bg-[#007AFF]"></div> */}
    </>
  );
};
export default WelcomePage;
