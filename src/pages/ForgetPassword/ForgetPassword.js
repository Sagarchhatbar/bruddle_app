import React, { useContext } from "react";
import Logo from "../../components/logo/Logo";
import Button from "../../components/Button/CommonButton";
import "./ForgetPassword.css";
import Link from "antd/es/typography/Link";
import DarkModeToggle from "../../components/ToggleDarkMode/ToggleDarkMode";
import { ThemeContext } from "../../context/ThemeContext";
import CommonForm from "../../components/Form/Form";

const ForgetPassword = () => {
  const { isDarkMode } = useContext(ThemeContext);
  const colorStyle = isDarkMode ? { color: "#FFFFFF" } : { color: "black" };
  return (
    <div>
      <div className="forgetPasswordDiv">
        <Logo />
        <div>
          <div className="labels">
            <text style={colorStyle}>Forget Password?</text>
            <br />
            <span
              style={isDarkMode ? { color: "#FFFFFF50" } : { color: "#5F646D" }}
            >
              Enter your email below, you will receive an email with
              instructions on how to reset your password in a few minutes. You
              can also set a new password if you’ve never set one before.
            </span>
          </div>
          <div className="form">
            <CommonForm forgetPassword={true} />
            <br />
          </div>
          <Button type={"primary"} value={"Start Recovery"} />
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
  );
};

export default ForgetPassword;
