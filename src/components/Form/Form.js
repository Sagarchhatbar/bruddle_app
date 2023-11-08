import React, { useContext } from "react";
import { Form, Input } from "antd";

import PasswordVisibility from "../../assets/Icons/PasswordVisibility";
import MailIcon from "../../assets/Icons/MailIcon";
import { ThemeContext } from "../../context/ThemeContext";

function CommonForm({ forgetPassword }) {
  const { isDarkMode } = useContext(ThemeContext);
  const commonStyle = isDarkMode ? "#FFFFFF" : "black";

  return (
    <Form>
      <h4 style={{ color: commonStyle }}>Email</h4>
      <Input
        placeholder="Enter your Email"
        type="email"
        style={{ borderColor: commonStyle }}
        suffix={<MailIcon />}
      />
      {!forgetPassword && (
        <>
          <h4 style={{ color: commonStyle }}>Password</h4>
          <Input
            placeholder="Enter your Password"
            type="password"
            style={{ borderColor: commonStyle }}
            suffix={<PasswordVisibility />}
          />
        </>
      )}
    </Form>
  );
}

export default CommonForm;
