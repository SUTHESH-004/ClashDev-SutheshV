import Navbar from "../components/Navbar";
import ProfileBar from "../components/ProfileBar";
import LeaderBoardBar from "../components/LeaderBoardBar";
import LiveChallege from "../components/LiveChallege";
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
            <div className="h-[70%] w-[90%] bg-green-100 rounded-2xl">
              <LiveChallege />
            </div>
          </div>
          <div className="h-[50%] w-[100%] flex flex-row justify-center align-middle gap-5">
            <div className="h-[80%] w-[40%] bg-green-100 rounded-2xl"></div>
            <div className="h-[80%] w-[40%] bg-green-100 rounded-2xl"></div>
          </div>
        </div>
      </div>
    </>
  );
};
export default HomePage;
