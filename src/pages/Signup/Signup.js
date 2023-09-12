import React, { useContext } from "react";
import Logo from "../../components/logo/Logo";
import Button from "../../components/Button/CommonButton";
import "./Signup.css";
import { Form } from "antd";
import Link from "antd/es/typography/Link";
import CommonForm from "../../components/Form/Form";
import DarkModeToggle from "../../components/ToggleDarkMode/ToggleDarkMode";
import { ThemeContext } from "../../context/ThemeContext";
import CommonCheckbox from "../../components/Checkbox/CommonCheckbox";
import CommonSelect from "../../components/Select/CommonSelect";

function Signup() {
  const { isDarkMode } = useContext(ThemeContext);
  const colorStyle = isDarkMode ? { color: "#FFFFFF" } : { color: "black" };
  const seletionData = [
    { value: "United States", label: "United States" },
    { value: "India", label: "India" },
    { value: "Canada", label: "Canada" },
  ];

  return (
    <div>
      <div className="signup">
        <Logo />

        <div className="labels">
          <text style={colorStyle}>Sign up</text>
          <br />
          <span style={colorStyle}>
            Before we start, please enter your current location
          </span>
        </div>
        <div className="form">
          <Form>
            <h4 style={colorStyle}>Country/Area of Residence</h4>
            <CommonSelect seletionData={seletionData} defaultText={'India'}/>
            <CommonForm />
          </Form>
          <br />
          <div className="terms">
            <CommonCheckbox value={"I agree to receive email updates"} />
            <CommonCheckbox
              value={"I have read and agree to Terms of Service"}
            />
          </div>
          <br />
        </div>
        <div className="bottom">
          <Button type={"primary"} value={"Create account"} />

          <text style={colorStyle}>
            Already registered?{" "}
            <Link
              style={colorStyle}
              href="/signin"
            >
              <b>Sign in to your account</b>
            </Link>
          </text>
        </div>
        {/* <DarkModeToggle /> */}
      </div>
    </div>
  );
}

export default Signup;
