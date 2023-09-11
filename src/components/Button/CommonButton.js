import React, { useContext } from "react";
import { Button } from "antd";
import { ThemeContext } from "../../context/ThemeContext";
function CommonButton({ value, type, icon }) {
  const { isDarkMode } = useContext(ThemeContext);
  return (
    <Button
      style={{
        borderRadius: "2px",
        color: icon ? (isDarkMode ? "white" : "black") : "black",
        boxShadow: icon ? "" : (isDarkMode ? '4px 4px 0px 0px #FFFFFF40' : '4px 4px 0px 0px #000'),
        fontSize: "16px",
        border: "1px solid black",
        height: "56px",
        backgroundColor: icon && (isDarkMode ? "black" : "white"),
      }}
      type={type}
      icon={icon}
    >
      {value}
    </Button>
  );
}
export default CommonButton;
