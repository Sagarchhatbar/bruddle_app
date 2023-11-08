import React, { useContext } from "react";
import "./App.css";
import Signin from "./pages/Signin/Signin";
import { ConfigProvider } from "antd";
import {darkTheme} from "./Theme/theme";
import {theme} from "./Theme/theme";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Signup from "./pages/Signup/Signup";
import { ThemeContext } from "./context/ThemeContext";
import ForgetPassword from "./pages/ForgetPassword/ForgetPassword";
import QRLogin from "./pages/QRLogin/QRLogin";

function App() {
  const { isDarkMode } = useContext(ThemeContext);
  const lightMode = [
    "url(https://i.ibb.co/Y84KHk7/Light-Mode-Image.png)",
    "url(https://i.ibb.co/F6DyKk7/Light-Mockup.png)",
  ];

  const darkMode = [
    "url(https://i.ibb.co/Dkyvj15/Dark-Mode-Image.png)",
    "url(https://i.ibb.co/P6XTf7k/Dark-Mockup.png)",
  ];

  return (
    <ConfigProvider theme={isDarkMode ? darkTheme : theme}>
      <div
        className="App"
        style={{
          backgroundImage: isDarkMode ? darkMode[0] : lightMode[0],
          backgroundColor: isDarkMode ? "#161616" : "#FAF4F0",
        }}
      >
        <div
          className="upperPart"
          style={{ backgroundImage: isDarkMode ? darkMode[1] : lightMode[1] }}
        >
          <Router>
            <Routes>
              <Route path="/" element={<Navigate to="/signin" replace />} />
              <Route path="/signin" element={<Signin />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/forgetPassword" element={<ForgetPassword />} />
              <Route path="/QRlogin" element={<QRLogin />} />

            </Routes>
          </Router>
        </div>
      </div>
    </ConfigProvider>
  );
}

export default App;
