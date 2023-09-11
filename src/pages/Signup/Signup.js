import React from "react";
import Logo from "../../components/logo/Logo";
import Button from "../../components/Button/CommonButton";
import "./Signup.css";
import { Checkbox, Form, Input, Select } from "antd";
import Link from "antd/es/typography/Link";
import {
  EyeInvisibleFilled,
  QrcodeOutlined,
  MailFilled,
} from "@ant-design/icons";

function Signup() {
  return (
    <div>
      <div className="signin">
        <Logo />

        <div className="labels">
          <text>Sign up</text>
          <span style={{ color: "#5F646D" }}>
            Before we start, please enter your current location
          </span>
        </div>
        <div className="form">
          <Form>
            <h4>Country/Area of Residence</h4>
            <Select
              defaultValue="India"
              style={{ width: "100%" }}
              options={[
                { value: "United States", label: "United States" },
                { value: "India", label: "India" },
                { value: "Canada", label: "Canada" },
                { value: "disabled", label: "Disabled", disabled: true },
              ]}
            />
            <h4>Email</h4>
            <Input placeholder="Enter your Email" suffix={<MailFilled />} />
            <h4>Password</h4>
            <Input
              placeholder="Enter your Password"
              suffix={<EyeInvisibleFilled />}
            />
          </Form>
          <br />
          <div className="terms">
            <Checkbox>I agree to receive email updates</Checkbox>
            <Checkbox>I have read and agree to Terms of Service</Checkbox>
          </div>
          <br />
        </div>
        <div className="bottom">
          <Button type={"primary"} value={"Create account"} />

          <text>
            Already registered? <Link href="/signin">Sign in to your account</Link>
          </text>
        </div>
      </div>
    </div>
  );
}

export default Signup;
