import React, { useContext } from "react";
import Logo from "../../components/logo/Logo";
import Button from "../../components/Button/CommonButton";
import "./Signin.css";
import { Divider } from "antd";
import Link from "antd/es/typography/Link";
import { QrcodeOutlined } from "@ant-design/icons";
import DarkModeToggle from "../../components/ToggleDarkMode/ToggleDarkMode";
import { ThemeContext } from "../../context/ThemeContext";
import CommonForm from "../../components/Form/Form";
import CommonCheckbox from "../../components/Checkbox/CommonCheckbox";

function Signin() {
  const { isDarkMode } = useContext(ThemeContext);
  const colorStyle = isDarkMode ? { color: "#FFFFFF", fontWeight:'bold' } : { color: "black" , fontWeight:'bold' };

  return (
    <div>
      <div className="signin">
        <Logo />
        <div className="labels">
          <text style={colorStyle}>
            Sign in
          </text>
          <br />
          <span
            style={isDarkMode ? { color: "#FFFFFF50" } : { color: "#5F646D" }}
          >
            Enter your account details or use QR code
          </span>
        </div>
        <div className="form">
          <CommonForm/>
          <br />
          <div className="rememberRecover">
            <CommonCheckbox value={'Remember Me'}/>
            <Link
              style={colorStyle}
              href="/forgetPassword"
            >
              Recover password
            </Link>
          </div>
          <br />
        </div>
        <Button type={"primary"} value={"Sign in"} />
        <Divider orientation="center">or</Divider>
        <div className="bottom">
          <Button
            type={"default"}
            value={"Log in with QR code"}
            icon={<QrcodeOutlined />}
            to={'/QRlogin'}
          />

          <text style={colorStyle}>
            You don’t have an account?{" "}
            <Link
              style={colorStyle}
              href="/signup"
            >
              <b>Create an account</b>
            </Link>
          </text>
        </div>
        <DarkModeToggle />
      </div>
    </div>
  );
}

export default Signin;
