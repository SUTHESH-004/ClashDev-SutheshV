import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
// import UserContextProvider from "./store/UserContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <UserContext.Provider> */}
      <App />
    {/* </UserContext.Provider> */}
  </StrictMode>
);
