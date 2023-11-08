import React, { useContext } from "react";
import Logo from "../../components/logo/Logo";
import Button from "../../components/Button/CommonButton";
import "./QRLogin.css";
import Link from "antd/es/typography/Link";
import DarkModeToggle from "../../components/ToggleDarkMode/ToggleDarkMode";
import { ThemeContext } from "../../context/ThemeContext";
import QRImage from "../../assets/images/QRImage.png"
import { Divider } from "antd";
import DevicesIcon from "../../assets/Icons/DevicesIcon";

const QRLogin = () => {

    const { isDarkMode } = useContext(ThemeContext);
  const colorStyle = isDarkMode ? { color: "#FFFFFF" } : { color: "black" };
  return (
    <div>
      <div className="forgetPasswordDiv">
        <Logo />
        <div>
          <div className="labels">
            <text style={colorStyle}>Log in with QR</text>
            <br />
            <span
              style={isDarkMode ? { color: "#FFFFFF50" } : { color: "#5F646D" }}
            >
              Scan this code with the mobile app to log in instantly
            </span>
          </div>
          <div className="image">
            <img src={QRImage} alt=""/>
            <br />
          </div>
          <Divider orientation="center">or</Divider>
          <Button type={"primary"} value={"Login with email or Phone NUmber"} icon={<DevicesIcon/>} />
        </div>
        <div>
          <div className="bottom-forget">
            <text style={colorStyle}>
              Already registered?{" "}
              <Link style={colorStyle} href="/signin">
                <b>Sign in to your account</b>
              </Link>
            </text>
          </div>
          <DarkModeToggle />
        </div>
      </div>
    </div>
  )
}

export default QRLogin