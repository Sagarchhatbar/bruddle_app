import React, { useContext } from "react";
import Logo from "../../components/logo/Logo";
import Button from "../../components/Button/CommonButton";
import "./Signin.css";
import { Checkbox, Divider, Form, Input } from "antd";
import Link from "antd/es/typography/Link";
import {
  QrcodeOutlined,
} from "@ant-design/icons";

import DarkModeToggle from "../../components/ToggleDarkMode/ToggleDarkMode";
import { ThemeContext } from "../../context/ThemeContext";
import PasswordVisibility from "../../assets/Icons/PasswordVisibility";
import MailIcon from "../../assets/Icons/MailIcon";

function Signin() {
  const { isDarkMode } = useContext(ThemeContext);
  return (
    <div>
      <div className="signin">
        <Logo />
        <div className="labels">
          <text style={isDarkMode ? { color: "#FFFFFF" } : { color: "black" }}>
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
          <Form>
            <h4 style={isDarkMode ? { color: "#FFFFFF" } : { color: "black" }}>
              Email
            </h4>
            <Input placeholder="Enter your Email" suffix={<MailIcon />} />
            <h4 style={isDarkMode ? { color: "#FFFFFF" } : { color: "black" }}>
              Password
            </h4>
            <Input
              placeholder="Enter your Password"
              suffix={<PasswordVisibility />}
            />
          </Form>
          <br />
          <div className="rememberRecover">
            <Checkbox
              style={isDarkMode ? { color: "#FFFFFF" } : { color: "black" }}
            >
              Remember Me
            </Checkbox>
            <Link
              style={isDarkMode ? { color: "#FFFFFF" } : { color: "black" }}
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
          />

          <text style={isDarkMode ? { color: "#FFFFFF" } : { color: "black" }}>
            You don’t have an account?{" "}
            <Link
              style={isDarkMode ? { color: "#FFFFFF" } : { color: "black" }}
              href="/signup"
            >
              Create an account
            </Link>
          </text>
        </div>
        <DarkModeToggle />
      </div>
    </div>
  );
}

export default Signin;
