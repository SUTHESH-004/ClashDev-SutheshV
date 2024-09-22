import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import WelcomePage from "./pages/WelcomePage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/welcome" element={<WelcomePage />} />
          {/* <Route pah="/home" element ={<HomePage/>}/> */}
          {/* <Route path="/signin" element={<SignIn />} /> */}
          {/* <Route path="/signup" element={<SignUp />} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
