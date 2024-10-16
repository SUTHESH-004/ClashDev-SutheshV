import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import WelcomePage from "./pages/WelcomePage";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import VerifyPage from "./pages/verifyPage";
import LiveChallengesPage from "./pages/LiveChallengesPage";
import LeaderBoardPage from "./pages/LeaderBoardPage";
import CoursesPage from "./pages/Coursespage";
import { UserContextProvider } from "./context/UserContext.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <UserContextProvider>
      <ToastContainer></ToastContainer>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/welcome" element={<WelcomePage />} />
          <Route path="/sign-in" element={<SignInPage />} />
          <Route path="/sign-up" element={<SignUpPage />} />
          <Route path="/verifypage" element={<VerifyPage />} />
          <Route path="/livechallengespage" element={<LiveChallengesPage />} />
          <Route path="/leaderboardpage" element={<LeaderBoardPage />} />
          <Route path="/coursepage" element={<CoursesPage />} />
        </Routes>
      </Router>
    </UserContextProvider>
  );
}

export default App;
