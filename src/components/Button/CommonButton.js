import React, { useContext } from "react";
import { Button } from "antd";
import { ThemeContext } from "../../context/ThemeContext";
import { Link } from "react-router-dom";
function CommonButton({ value, type, icon, to }) {
  const { isDarkMode } = useContext(ThemeContext);
  return (
    <>
      {to ? (
        <Link to={to}>
          <Button
            style={{
              borderRadius: "2px",
              color: icon ? (isDarkMode ? "white" : "black") : "black",
              boxShadow: icon
                ? ""
                : isDarkMode
                ? "4px 4px 0px 0px #FFFFFF40"
                : "4px 4px 0px 0px #000",
              fontSize: "16px",
              border: "1px solid black",
              height: "56px",
              backgroundColor: icon && (isDarkMode ? "black" : "white"),
              width: "100%",
              fontWeight:'bold'
            }}
            type={type}
            icon={icon}
            // href={to}
          >
            {value}
          </Button>
        </Link>
      ) : (
        <Button
          style={{
            borderRadius: "2px",
            color: icon ? (isDarkMode ? "white" : "black") : "black",
            boxShadow: icon
              ? ""
              : isDarkMode
              ? "4px 4px 0px 0px #FFFFFF40"
              : "4px 4px 0px 0px #000",
            fontSize: "16px",
            border: "1px solid black",
            height: "56px",
            backgroundColor: icon && (isDarkMode ? "black" : "white"),
            width: "100%",
            fontWeight:'bold'
          }}
          type={type}
          icon={icon}
          // href={to}
        >
          {value}
        </Button>
      )}
    </>
  );
}
export default CommonButton;
