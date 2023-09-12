import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { Checkbox } from "antd";

function CommonCheckbox({ value }) {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <Checkbox style={isDarkMode ? { color: "#FFFFFF" } : { color: "black" }}>
      {value}
    </Checkbox>
  );
}

export default CommonCheckbox;
