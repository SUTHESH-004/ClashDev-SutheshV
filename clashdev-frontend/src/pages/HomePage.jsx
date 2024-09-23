import Navbar from "../components/Navbar";
import ProfileBar from "../components/ProfileBar";
import LeaderBoardBar from "../components/LeaderBoardBar";
import LiveChallege from "../components/LiveChallege";
import PvPBar from "../components/PvPBar";
import Courses from "../components/courses";
import { assets } from "../assets/assests";
const HomePage = () => {
  return (
    <>
      <div className="h-[20vh] w-[100v] flex justify-center">
        <ProfileBar></ProfileBar>
      </div>
      <div className="h-[80vh] w-[100vw] flex flex-col md:flex-row ">
        <div className="h-[100%] flex-[3] flex justify-center items-center">
          <LeaderBoardBar></LeaderBoardBar>
        </div>
        <div className="h-[100%] flex-[4]  flex flex-col">
          <div className="h-[50%] w-[100%] flex justify-center items-center">
            <div
              className="h-[70%] w-[90%] bg-green-100 bg-cover bg-no-repeat rounded-2xl  flex justify-center items-center text-2xl "
              style={{
                backgroundImage: `url(${assets.bargrp})`,
                backgroundPosition: "center -105px",
              }}
            >
              <LiveChallege />
            </div>
          </div>
          <div className="h-[50%] w-[100%] flex flex-row justify-center align-middle gap-5">
            <div
              className="h-[80%] w-[40%] bg-green-100 bg-contain rounded-2xl flex justify-center items-center text-2xl"
              style={{ backgroundImage: `url(${assets.computer})` }}
            >
              <Courses />
            </div>
            <div
              className="h-[80%] w-[40%] bg-green-100 text-white rounded-2xl flex justify-center items-center text-2xl bg-cover bg-no-repeat "
              style={{ backgroundImage: `url(${assets.PvsM})` }}
            >
              <PvPBar></PvPBar>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default HomePage;
